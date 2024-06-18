import { NextRequest, NextResponse } from "next/server";

export function middlewre(requset) {
    return NextResponse.redirect(new URL('/',request.url)) 
    //return NextResponse.next()
}
export const config = {
    macher: ["/blog/:path"]
}
      