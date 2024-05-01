import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'


export const middleware = async (req: NextRequest) => {
    const session = await auth()
    const loginPath = '/api/auth/signin'
    const authPath = '/api/auth'
    const currentPath = req.nextUrl.pathname

    if (!session && !currentPath.startsWith(authPath)) {
        return NextResponse.redirect(new URL(loginPath, req.url))
    }

    return NextResponse.next()
}