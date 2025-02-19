"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

export default function ReviewPage() {
  const codeQualityScore = 85;

  const qualityText =
    codeQualityScore >= 90
      ? "Excellent"
      : codeQualityScore >= 75
      ? "Very Good"
      : codeQualityScore >= 50
      ? "Average"
      : "Needs Improvement";

  const handleOptimizeCode = () => {
    console.log("Optimize Code clicked");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <CodeIcon className="h-6 w-6 mr-2" />
          <span className="font-bold">AI Code Review</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex justify-center items-center">
        <section className="w-full py-28 flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center space-y-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Code Quality Review
            </h1>
            <p className="text-gray-600 md:text-xl">
              Your code quality score is:
            </p>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-6xl font-extrabold text-red-600">
                {codeQualityScore}
                <span className="text-2xl font-medium">/100</span>
              </div>
              <div className="text-xl font-bold text-gray-700">
                {qualityText}
              </div>
              <Button
                onClick={handleOptimizeCode}
                className="bg-red-600 hover:bg-red-700"
              >
                Optimize Code
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 AI Code Review. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
