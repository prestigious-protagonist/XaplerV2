import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token"); // Adjust this based on your authentication setup

    if (!token) {
        return NextResponse.redirect(new URL("/signup", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/home"], // Protect the home page
};
