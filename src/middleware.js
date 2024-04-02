import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  try {
    // Await for the cookie to be retrieved

    const token = request.cookies.get("token");
    console.log(token);

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error) {
    console.error("Error retrieving token:", error);
    return NextResponse.error(new Error("Failed to retrieve token"));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/complete-task", "/pending-task", "/settings", "/tasklists"],
};
