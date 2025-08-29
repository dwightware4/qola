import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import { APP_ROOT_ROUTE, HYBRID_ROUTES, PUBLIC_ROUTES } from '@/core'

const isHybridRoute = createRouteMatcher(HYBRID_ROUTES)
const isPublicRoute = createRouteMatcher(PUBLIC_ROUTES)

export const authMiddleware = async (auth: any, request: any) => {
  const { nextUrl } = request

  if (isHybridRoute(request)) {
    return NextResponse.next()
  }

  const { userId } = await auth()

  if (isPublicRoute(request)) {
    if (userId) {
      return NextResponse.redirect(new URL(APP_ROOT_ROUTE, nextUrl))
    }
    else {
      return NextResponse.next()
    }
  }

  if (!userId) {
    return NextResponse.redirect(new URL(APP_ROOT_ROUTE, nextUrl))
  }

  return NextResponse.next()
}

export default clerkMiddleware(authMiddleware)

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
