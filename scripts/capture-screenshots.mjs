/**
 * Automated Screenshot Capture Script
 * Boots each project's dev server, takes a 1920×1080 screenshot with Playwright,
 * kills the server, and saves the image into public/assets/images/work/<company>/
 *
 * Usage: node scripts/capture-screenshots.mjs
 */

import { chromium } from 'playwright';
import { spawn, exec } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const OUTPUT_BASE = path.join(ROOT, 'public', 'assets', 'images', 'work');

const HOME = process.env.HOME;

// ─── Project definitions ───────────────────────────────────────────
const projects = [
  // ── SIPRC ──
  {
    name: 'ip-portfolio',
    company: 'siprc',
    dir: `${HOME}/siprc/Front-End`,
    startCmd: 'npx vite --port 5173 --host',
    port: 5173,
    url: 'http://localhost:5173',
    needsInstall: false,
  },
  {
    name: 'cepro-dashboard',
    company: 'siprc',
    dir: `${HOME}/siprc/Cepro-frontend`,
    startCmd: 'npx vite --port 5174 --host',
    port: 5174,
    url: 'http://localhost:5174',
    needsInstall: false,
  },
  {
    name: 'cepro-website',
    company: 'siprc',
    dir: `${HOME}/siprc/cepro.ai-frontend`,
    startCmd: 'npx next dev --turbopack --port 3000',
    port: 3000,
    url: 'http://localhost:3000',
    needsInstall: false,
  },
  // ── Digitee ──
  {
    name: 'main-platform',
    company: 'digitee',
    dir: `${HOME}/digitee/digitee-frontend`,
    startCmd: 'npx vite --port 5175 --host',
    port: 5175,
    url: 'http://localhost:5175',
    needsInstall: false,
  },
  {
    name: 'ecommerce',
    company: 'digitee',
    dir: `${HOME}/digitee/digitee-ecommerce`,
    startCmd: 'npx vite --port 5176 --host',
    port: 5176,
    url: 'http://localhost:5176',
    needsInstall: false,
  },
  {
    name: 'factory-dashboard',
    company: 'digitee',
    dir: `${HOME}/digitee/digitee-ai-admin-dashboard`,
    startCmd: 'npx vite --port 5177 --host',
    port: 5177,
    url: 'http://localhost:5177',
    needsInstall: false,
  },
  {
    name: 'b2b-lovaa',
    company: 'digitee',
    dir: `${HOME}/digitee/b-2-b`,
    startCmd: 'npx vite --port 5178 --host',
    port: 5178,
    url: 'http://localhost:5178',
    needsInstall: false,
  },
  {
    name: 'b2b-dashboard',
    company: 'digitee',
    dir: `${HOME}/digitee/b-2-b-dashboard`,
    startCmd: 'npx vite --port 5179 --host',
    port: 5179,
    url: 'http://localhost:5179',
    needsInstall: false,
  },
  {
    name: 'carrier-dashboard',
    company: 'digitee',
    dir: `${HOME}/digitee/carrier-dashboard`,
    startCmd: 'npx vite --port 5180 --host',
    port: 5180,
    url: 'http://localhost:5180',
    needsInstall: false,
  },
  // ── Freelance ──
  {
    name: 'climate-risk',
    company: 'freelance',
    dir: `${HOME}/climate-change`,
    startCmd: 'npx vite --port 5181 --host',
    port: 5181,
    url: 'http://localhost:5181',
    needsInstall: false,
  },
  {
    name: 'gym',
    company: 'freelance',
    dir: `${HOME}/gym-v1`,
    startCmd: 'npx vite --port 5182 --host',
    port: 5182,
    url: 'http://localhost:5182',
    needsInstall: true,
  },
  {
    name: 'lusion',
    company: 'freelance',
    dir: `${HOME}/lusion`,
    startCmd: 'npx serve -l 5183 -s',
    port: 5183,
    url: 'http://localhost:5183',
    needsInstall: false,
    isStatic: true,
  },
  {
    name: 'talentlens',
    company: 'freelance',
    dir: `${HOME}/xpertlab-co/frontend`,
    startCmd: 'npx vite --port 5184 --host',
    port: 5184,
    url: 'http://localhost:5184',
    needsInstall: false,
  },
  {
    name: 'user-management',
    company: 'freelance',
    dir: `${HOME}/User-Management-Dashboard`,
    startCmd: 'npx vite --port 5185 --host',
    port: 5185,
    url: 'http://localhost:5185',
    needsInstall: false,
  },
];

// ─── Helpers ───────────────────────────────────────────────────────

function log(msg) {
  const ts = new Date().toLocaleTimeString();
  console.log(`[${ts}] ${msg}`);
}

function runInstall(dir) {
  return new Promise((resolve, reject) => {
    log(`  📦 Running npm install in ${dir}...`);
    const proc = spawn('npm', ['install'], { cwd: dir, stdio: 'pipe', shell: true });
    let stderr = '';
    proc.stderr.on('data', (d) => (stderr += d.toString()));
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`npm install failed (code ${code}): ${stderr.slice(-200)}`));
    });
    proc.on('error', reject);
  });
}

function startServer(project) {
  const [cmd, ...args] = project.startCmd.split(' ');
  log(`  🚀 Starting: ${project.startCmd} (in ${project.dir})`);
  const proc = spawn(cmd, args, {
    cwd: project.dir,
    stdio: 'pipe',
    shell: true,
    env: {
      ...process.env,
      // Provide minimal env vars so Vite/Next don't crash on missing .env values
      VITE_API_URL: 'http://localhost:9999',
      VITE_BASE_URL: 'http://localhost:9999',
      VITE_APP_URL: 'http://localhost:9999',
      NEXT_PUBLIC_API_URL: 'http://localhost:9999',
      NODE_ENV: 'development',
      BROWSER: 'none', // Don't auto-open browser
    },
    detached: true,
  });
  proc.unref();
  return proc;
}

function waitForServer(url, timeoutMs = 90000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      if (Date.now() - start > timeoutMs) {
        return reject(new Error(`Timeout waiting for ${url} after ${timeoutMs / 1000}s`));
      }
      const lib = url.startsWith('https') ? https : http;
      const req = lib.get(url, { timeout: 5000 }, (res) => {
        // Accept any response (even 404) — means server is up
        resolve(res.statusCode);
      });
      req.on('error', () => {
        setTimeout(check, 1500);
      });
      req.on('timeout', () => {
        req.destroy();
        setTimeout(check, 1500);
      });
    };
    check();
  });
}

function killServer(proc) {
  try {
    // Kill the entire process group
    process.kill(-proc.pid, 'SIGTERM');
  } catch {
    try {
      proc.kill('SIGTERM');
    } catch {
      // already dead
    }
  }
}

function killPort(port) {
  return new Promise((resolve) => {
    exec(`lsof -ti:${port} | xargs -r kill -9`, (err) => {
      resolve();
    });
  });
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  // Ensure output dirs
  for (const company of ['siprc', 'digitee', 'freelance']) {
    const dir = path.join(OUTPUT_BASE, company);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
    colorScheme: 'dark',
  });

  const results = [];

  for (const project of projects) {
    const outPath = path.join(OUTPUT_BASE, project.company, `${project.name}.png`);
    log(`\n━━━ ${project.company}/${project.name} ━━━`);

    // Make sure port is free
    await killPort(project.port);

    let serverProc = null;
    try {
      // Install if needed
      if (project.needsInstall && !existsSync(path.join(project.dir, 'node_modules'))) {
        await runInstall(project.dir);
      }

      // Start dev server
      serverProc = startServer(project);

      // Capture stderr for debugging
      let serverErr = '';
      serverProc.stderr?.on('data', (d) => (serverErr += d.toString()));
      serverProc.stdout?.on('data', () => {}); // drain stdout

      // Wait for server
      log(`  ⏳ Waiting for ${project.url}...`);
      const status = await waitForServer(project.url);
      log(`  ✅ Server responded with HTTP ${status}`);

      // Take screenshot
      const page = await context.newPage();
      try {
        await page.goto(project.url, {
          waitUntil: 'networkidle',
          timeout: 30000,
        });
      } catch {
        // If networkidle times out (API calls fail), try domcontentloaded
        log(`  ⚠️  networkidle timed out, using domcontentloaded...`);
        try {
          await page.goto(project.url, {
            waitUntil: 'domcontentloaded',
            timeout: 15000,
          });
        } catch {
          // page may already be loaded from first attempt
        }
      }

      // Wait a bit for animations/renders to settle
      await page.waitForTimeout(3000);

      await page.screenshot({ path: outPath, fullPage: false });
      log(`  📸 Screenshot saved: ${outPath}`);
      await page.close();

      results.push({ name: `${project.company}/${project.name}`, status: 'OK', path: outPath });
    } catch (err) {
      log(`  ❌ FAILED: ${err.message}`);
      results.push({ name: `${project.company}/${project.name}`, status: 'FAILED', error: err.message });
    } finally {
      // Kill server
      if (serverProc) {
        killServer(serverProc);
        await new Promise((r) => setTimeout(r, 1000));
      }
      await killPort(project.port);
    }
  }

  await browser.close();

  // Summary
  log('\n\n════════════════════════════════════════════════');
  log('SCREENSHOT CAPTURE SUMMARY');
  log('════════════════════════════════════════════════');
  const ok = results.filter((r) => r.status === 'OK');
  const failed = results.filter((r) => r.status !== 'OK');
  log(`✅ Success: ${ok.length}/${results.length}`);
  for (const r of ok) {
    log(`   ${r.name} → ${r.path}`);
  }
  if (failed.length) {
    log(`❌ Failed: ${failed.length}/${results.length}`);
    for (const r of failed) {
      log(`   ${r.name}: ${r.error}`);
    }
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
