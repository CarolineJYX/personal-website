import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_ROUTE_LOCALE, getLocaleFromPathname, localizePath } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocaleFromPathname(pathname);

  if (!locale) {
    const destination = request.nextUrl.clone();
    destination.pathname = localizePath(pathname, DEFAULT_ROUTE_LOCALE);

    return NextResponse.redirect(destination, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)"]
};
