import { NextRequest, NextResponse } from "next/server";

const isChatRoute = (pathname: string) => {
  console.log('isChatRoute', pathname);
  return pathname.startsWith("/chat");
}

export function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");
  console.log(origin);

  const { pathname } = new URL(request.nextUrl);

  const allowedOrigins = ["*"];
  const isOriginAllowed = origin !== null && allowedOrigins.includes(origin);

  const response = NextResponse.next();

  console.log('Auth Header Check', request.headers.get('Authorization'));
  console.log('Pathname', pathname);
  if (isChatRoute(pathname)) {
    return NextResponse.redirect(new URL('/api/auth/unauthorized', request.url));
  }

  if (isOriginAllowed) {
    response.headers.set("Access-Control-Allow-Origin", origin!); // Using "!" to assert that origin is not null
  }


  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  response.headers.set("Access-Control-Max-Age", "86400");

  console.log("Middleware!");
  console.log(request.method);
  console.log(request.url);

  return response;
}

export const config = {
  matcher: ["/api/:path*", "/chat/:path*"]
};
