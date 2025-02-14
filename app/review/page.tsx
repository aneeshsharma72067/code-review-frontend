"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function CodeReviewEditorPage() {
  return (
    <div className="flex flex-col h-screen">
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

      <main className="flex-1 flex flex-col">
        {/* Editor Section */}
        <div className="flex flex-1 gap-4 p-4">
          <div className="flex-1 border border-gray-300 rounded-md overflow-hidden">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              defaultValue={`// Editor 1: Write your code here...`}
            />
          </div>
          <div className="flex-1 border border-gray-300 rounded-md overflow-hidden">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              defaultValue={`// Editor 2: Write your code here...`}
            />
          </div>
        </div>

        <div
          className="border-t border-b p-4 h-40 overflow-y-auto bg-gray-50 resize-none"
          contentEditable={false}
          style={{ resize: "none" }}
        >
          <p className="text-gray-700">
            Prompt output will appear here...
          </p>
        </div>

        <div className="border-t p-4">
          <div className="flex items-center gap-2">
            <textarea
              className="flex-1 border border-gray-300 p-2 rounded-md"
              placeholder="Type your message here..."
              rows={2}
            />
            <Button>Send</Button>
          </div>
        </div>
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
