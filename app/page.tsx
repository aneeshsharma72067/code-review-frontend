"use client";
import Link from "next/link";
import { CodeIcon, GitBranchIcon, ZapIcon } from "lucide-react";
import { CodeReviewInput } from "@/components/code-review-input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <CodeIcon className="h-6 w-6 mr-2" />
          <span className="font-bold">AI Code Review</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center">
        <section className="w-full py-28 h-screen flex justify-center items-center">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-12">
            <div className="space-y-8 flex flex-col items-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                AI-Powered Code Review
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Enhance your code quality with our advanced AI-powered code
                review system. Upload your file or enter a GitHub repo link to
                get started.
              </p>
            </div>
            <div className="w-full max-w-sm mt-10">
              <CodeReviewInput />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 justify-center">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CodeIcon className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Advanced Static Analysis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI performs in-depth static analysis to identify potential
                  bugs, security vulnerabilities, and code smells.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <GitBranchIcon className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">GitHub Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Seamlessly integrate with your GitHub repositories for
                  continuous code review on every pull request.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <ZapIcon className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Real-time Feedback</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get instant feedback on your code with suggestions for
                  improvements and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 AI Code Review. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
