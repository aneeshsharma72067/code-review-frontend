import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, CodeIcon, ShieldCheckIcon, ZapIcon, BrainIcon, GitBranchIcon, UsersIcon } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <CodeIcon className="h-6 w-6 mr-2" />
          <span className="font-bold">AI Code Review</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 bg-gradient-to-b from-white to-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  About AI Code Review
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionizing code quality with cutting-edge AI technology
                </p>
                <p className="mx-auto w-1/2 text-gray-500 text-lg dark:text-gray-400">
                  We aim to streamline and enhance the software development process by providing an intelligent, automated code review system. Our platform leverages cutting-edge AI technology to analyze and review code with speed, accuracy, and consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg shadow-sm">
                <CodeIcon className="h-10 w-10 mb-2 text-blue-500" />
                <h2 className="text-xl font-bold">Advanced Analysis</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI performs in-depth static analysis to identify potential bugs, security vulnerabilities, and code smells.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg shadow-sm">
                <ShieldCheckIcon className="h-10 w-10 mb-2 text-green-500" />
                <h2 className="text-xl font-bold">Security First</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  We prioritize code security, helping you identify and fix potential vulnerabilities before they become issues.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-200 p-6 rounded-lg shadow-sm">
                <ZapIcon className="h-10 w-10 mb-2 text-yellow-500" />
                <h2 className="text-xl font-bold">Lightning Fast</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get instant feedback on your code with suggestions for improvements and best practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 px-10">
              <div className="space-y-4 bg-blue-100 rounded-lg p-12 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg lg:text-base xl:text-lg">
                  Our AI-powered code review system uses advanced machine learning algorithms to analyze your code and provide actionable insights. Here's how it works:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center space-x-2">
                    <BrainIcon className="h-5 w-5 text-blue-500" />
                    <span>AI analyzes your code for patterns and potential issues</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <GitBranchIcon className="h-5 w-5 text-blue-500" />
                    <span>Integrates seamlessly with your existing workflow</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <ZapIcon className="h-5 w-5 text-blue-500" />
                    <span>Provides instant feedback and suggestions</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <UsersIcon className="h-5 w-5 text-blue-500" />
                    <span>Learns from your team's coding style and preferences</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4 bg-green-100 rounded-lg p-12 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-lg lg:text-base xl:text-lg">
                  AI Code Review offers numerous benefits to development teams of all sizes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center justify-center space-x-2">
                    <ArrowRightIcon className="h-5 w-5 text-green-500" />
                    <span>Improve code quality and consistency</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <ArrowRightIcon className="h-5 w-5 text-green-500" />
                    <span>Reduce time spent on manual code reviews</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <ArrowRightIcon className="h-5 w-5 text-green-500" />
                    <span>Catch bugs and security issues early in development</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <ArrowRightIcon className="h-5 w-5 text-green-500" />
                    <span>Accelerate the development process</span>
                  </li>
                  <li className="flex items-center justify-center space-x-2">
                    <ArrowRightIcon className="h-5 w-5 text-green-500" />
                    <span>Continuous learning and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to improve your code?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start your journey to better code quality today with AI Code Review.
                </p>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/">
                  Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Code Review. All rights reserved.</p>
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
  )
}

