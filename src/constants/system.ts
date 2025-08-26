export const APP_MODE = process.env.NEXT_PUBLIC_APP_MODE

export const PROD_MODE = APP_MODE === 'production'
export const DEV_MODE = APP_MODE === 'development'
