import { NextRequest, NextResponse } from "next/server";

const VALID_CREDENTIALS = {
  username: "admin",
  password: "password123"
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username and password are required" },
        { status: 400 }
      );
    }

    if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
      return NextResponse.json({
        success: true,
        user: { username }
      });
    }

    return NextResponse.json(
      { success: false, error: "Invalid username or password" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
