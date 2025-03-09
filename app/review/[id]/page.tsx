"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function ReviewPage() {
  const codeQualityScore = 50;

  const getQualityText = (score : number) => {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Very Good";
    if (score >= 50) return "Average";
    return "Needs Improvement";
  };

  const getScoreColor = (score : number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 75) return "text-blue-600";
    if (score >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getSuggestions = (score : number) => {
    if (score >= 90) return ["Keep following best practices", "Ensure proper documentation"];
    if (score >= 75) return ["Refactor complex functions", "Improve variable naming conventions"];
    if (score >= 50) return ["Optimize loops and conditions", "Reduce redundant code"];
    return ["Fix syntax errors", "Improve performance by removing bottlenecks"];
  };

  const qualityText = getQualityText(codeQualityScore);
  const scoreColor = getScoreColor(codeQualityScore);
  const suggestions = getSuggestions(codeQualityScore);

  const router = useRouter();
  const pathname = usePathname().split("/");
  const uuid = pathname[pathname.length - 1];

  const handleOptimizeCode = () => {
    router.push(`/optimization/${uuid}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <CodeIcon className="h-6 w-6 mr-2" />
          <span className="font-bold">AI Code Review</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">Home</Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
        </nav>
      </header>

      <main className="flex-1 flex justify-center items-center">
        <section className="w-full py-28 flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center space-y-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Code Quality Review
            </h1>
            <p className="text-gray-600 md:text-xl">Your code quality score is:</p>
            <div className="flex flex-col items-center space-y-4">
              <div className={`text-6xl font-extrabold ${scoreColor}`}>
                {codeQualityScore}
                <span className="text-2xl font-medium">/100</span>
              </div>
              <div className="text-xl font-bold text-gray-700">{qualityText}</div>
              <div className="text-left max-w-md bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">Optimization Suggestions:</h2>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
              <Button onClick={handleOptimizeCode} className="bg-red-600 hover:bg-red-700">
                Optimize Code
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Code Review. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">Terms of Service</Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
