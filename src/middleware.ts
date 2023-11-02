import { NextRequest, NextResponse } from 'next/server'
import {RequestCookies} from "next/dist/compiled/@edge-runtime/cookies";

export function middleware(request: NextRequest) {
    console.log("log for middleware")
    console.log(request.cookies.getAll())
    const requestHeaders = new Headers(request.headers)

     if (request.nextUrl.pathname === '/middleware/do_login') {

       let response=NextResponse.redirect(new URL('/middleware', request.url))
            response.cookies.set("logined",true)

         return response
    }
    if (request.nextUrl.pathname === '/middleware/do_logout') {

       let response=NextResponse.redirect(new URL('/middleware', request.url))
        response.cookies.set("logined",false)

        return response

    }
    if (request.nextUrl.pathname === '/middleware/logined' && request.cookies.get("logined")?.value!='true') {

        return NextResponse.redirect(new URL('/middleware/not_login', request.url))
    }
    if (request.nextUrl.pathname === '/cta/set_clicked') {

        let response=NextResponse.redirect(new URL('/cta', request.url))
        response.cookies.set("cta_clicked",true)

        return response

    }
    if (request.nextUrl.pathname === '/cta/click_off') {

        let response=NextResponse.redirect(new URL('/cta', request.url))
        response.cookies.delete("cta_clicked")

        return response

    }


        return NextResponse.next()
}

export const config = {
    matcher: ['/middleware/:path*'  , '/cta/:path*'  , '/aaa']  ,
}