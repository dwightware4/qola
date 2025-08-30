export const APP_NAME = 'QOLA' as const

export const ROOT_ROUTE = '/' as const

export const PRIVACY_ROUTE = '/privacy' as const
export const TERMS_ROUTE = '/terms' as const

export const NOT_FOUND_ROUTE = '/not-found' as const

export const WEBHOOK_API_ROUTE = '/api/webhooks/:path*' as const

// MAIN APP ROUTES
export const COMPANY_INFO_ROUTE = '/company-info' as const
export const LP_ANALYSIS_ROUTE = '/lp-analysis' as const
export const OFFER_BLUEPRINT_ROUTE = '/offer-blueprint' as const
export const ICP_ROUTE = '/icp' as const
export const GAP_ANALYSIS_ROUTE = '/gap-analysis' as const
export const ONBOARDING_ROUTE = '/onboarding' as const

// Hybrid routes are available to both signed-in and signed-out users
export const HYBRID_ROUTES = [PRIVACY_ROUTE, TERMS_ROUTE, WEBHOOK_API_ROUTE, NOT_FOUND_ROUTE]

// Public routes are ONLY available to users who are signed OUT
export const PUBLIC_ROUTES = [ROOT_ROUTE]
