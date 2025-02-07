import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg bg-white rounded-lg">
        <CardHeader>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <CardTitle className="text-center text-3xl font-bold text-gray-700">
            👋 Welcome Back!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Input type="email" placeholder="Email" required />
            </div>
            <div className="mb-4">
              <Input type="password" placeholder="Password" required />
            </div>
            <div className="text-right mb-4">
              <Link href="/forgot-password" className="text-blue-500 text-sm hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
          {/* Sky Blue Button */}
          <SignedOut>
            <SignInButton>
              <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <p className="mt-4 text-center text-sm">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
