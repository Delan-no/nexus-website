import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
    //vérifions si la route demandée est pour l'admin
    if(request.nextUrl.pathname.startsWith("/admin")) {
        const adminAuth = request.cookies.get("auth_token")
        //si pas de cookie auth_tokenn rediriger vers login 
        if(!adminAuth) {
            return NextResponse.redirect(new URL('/auth/login',request.url))
        }
  
        
    }
    return NextResponse.next();
}

export const config ={
    matcher: '/admin/:path*'
}