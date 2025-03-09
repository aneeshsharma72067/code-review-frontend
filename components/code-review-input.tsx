"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FileUploadArea } from "./file-upload-area";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const generateUid = () => {
  return "xxxx-xxxx-4xxx-yxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export function CodeReviewInput() {
  const [inputType, setInputType] = useState<"file" | "github">("file");
  const [file, setFile] = useState<File | null>(null);
  const [githubRepo, setGithubRepo] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputType === "file" && file) {
      console.log("Submitting file:", file.name);
    } else if (inputType === "github" && githubRepo) {
      console.log("Submitting GitHub repo:", githubRepo);
    }
  };

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative inline-flex p-1 bg-gray-200 rounded-lg">
        <div
          className={`absolute inset-0 m-1 rounded transition-transform duration-200 ease-in-out ${
            inputType === "github" ? "translate-x-full" : ""
          }`}
          style={{
            width: "calc(50% - 4px)",
            backgroundColor: "white",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        />
        <button
          type="button"
          className={`relative z-10 px-14 py-4 text-sm text-nowrap font-medium transition-colors duration-200 ${
            inputType === "file" ? "text-gray-900" : "text-gray-500"
          }`}
          onClick={() => setInputType("file")}
        >
          Upload File
        </button>
        <button
          type="button"
          className={`relative z-10 px-14 py-4 text-sm text-nowrap font-medium transition-colors duration-200 ${
            inputType === "github" ? "text-gray-900" : "text-gray-500"
          }`}
          onClick={() => setInputType("github")}
        >
          GitHub Repo
        </button>
      </div>

      <div className="space-y-4">
        {inputType === "file" ? (
          <FileUploadArea onFileSelect={handleFileSelect} />
        ) : (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="github-repo">GitHub Repository URL</Label>
            <Input
              id="github-repo"
              placeholder="https://github.com/username/repo"
              value={githubRepo}
              onChange={(e) => setGithubRepo(e.target.value)}
            />
          </div>
        )}
      </div>

      <Button className="w-full">
        {/* {inputType === "file" ? (
          <>
            Start Code Review <ArrowRightIcon className="ml-2 h-4 w-4" />
          </>
        ) : (
          <>
            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Review GitHub Repo
          </>
        )} */}
        <Link href={`/review/${generateUid()}`}>Go</Link>
      </Button>
    </form>
  );
}
