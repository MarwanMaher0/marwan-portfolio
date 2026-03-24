/**
 * Returns a helper that prefixes public-asset paths with the app's baseURL.
 * Works in both dev (baseURL = '/') and production (baseURL = '/marwan-portfolio/').
 *
 * Usage:
 *   const a = useAssetUrl()
 *   :src="a('/assets/images/logo.svg')"
 */
export const useAssetUrl = () => {
  const { app } = useRuntimeConfig()
  const base = app.baseURL ?? '/'

  return (path: string) => {
    // Only prefix absolute paths that don't already include the base
    if (path.startsWith('/') && !path.startsWith(base)) {
      return base + path.slice(1)
    }
    return path
  }
}
