import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/db-utils";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    console.log("Received signup request for:", email);

    // Check if user exists
    const existingUser = await executeQuery({
      query: 'SELECT * FROM users WHERE email = ?',
      values: [email],
    });
    console.log("Existing user check:", existingUser);

    if (existingUser.length > 0) {
      console.log("User already exists");
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("Password hashed successfully");

    // Insert new user
    const result = await executeQuery({
      query: 'INSERT INTO users (email, password) VALUES (?, ?)',
      values: [email, hashedPassword],
    });
    console.log("User inserted successfully:", result);

    return NextResponse.json({ 
      message: "User created successfully",
      userId: result.insertId 
    });

  } catch (error) {
    console.error("Signup error details:", error);
    return NextResponse.json(
      { message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
} 