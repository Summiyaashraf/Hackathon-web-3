import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedOut, SignUpButton } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg bg-white rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-700">
            🎉 Join Us Today!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Input type="text" placeholder="Full Name" required />
            </div>
            <div className="mb-4">
              <Input type="email" placeholder="Email" required />
            </div>
            <div className="mb-4">
              <Input type="password" placeholder="Password" required />
            </div>
          </form>
          {/* Sky Blue Button */}
          <SignedOut>
            <SignUpButton>
              <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 font-semibold">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
