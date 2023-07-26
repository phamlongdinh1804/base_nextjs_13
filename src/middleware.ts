import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'

const WHITE_LIST = ['/']

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request) {
    const isLogin = !!request.nextauth.token
    const pathName = request?.nextUrl?.pathname
    if (WHITE_LIST.includes(pathName)) return NextResponse.next()
    if (!isLogin) {
      if (pathName !== '/base/auth/signin') {
        return NextResponse.redirect(new URL('/base/auth/signin', request.url))
      }
      return null
    } else {
      if (pathName === '/base/auth/signin') {
        return NextResponse.redirect(new URL('/', request.url))
      }
      return null
    }
  },
  {
    callbacks: {
      authorized: () => {
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
