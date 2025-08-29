export const APP_NAME = 'QOLA' as const

export const ROOT_ROUTE = '/' as const

export const PRIVACY_ROUTE = '/privacy' as const
export const TERMS_ROUTE = '/terms' as const

export const NOT_FOUND_ROUTE = '/not-found' as const

export const WEBHOOK_API_ROUTE = '/api/webhooks/:path*' as const

// MAIN APP ROUTES
export const PROJECT_ROUTE = '/project' as const
export const SPECBOOK_ROUTE = '/specbook' as const

export const APP_ROOT_ROUTE = PROJECT_ROUTE

// Hybrid routes are available to both signed-in and signed-out users
export const HYBRID_ROUTES = [PRIVACY_ROUTE, TERMS_ROUTE, WEBHOOK_API_ROUTE, NOT_FOUND_ROUTE]

// Public routes are ONLY available to users who are signed OUT
export const PUBLIC_ROUTES = [ROOT_ROUTE]
