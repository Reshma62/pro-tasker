import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = request.cookies.get("token");
  console.log(token, "token");
  const response = NextResponse.next();
  response.cookies.set({
    name: "myCookieName",
    value: token.value,
    httpOnly: true,
  });

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/complete-task", "/pending-task", "/settings", "/tasklists"],
};
