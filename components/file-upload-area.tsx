"use client";

import type React from "react";
import { useState, useRef } from "react";
import { FileIcon, UploadIcon } from "lucide-react";
import { useFiles } from "@/context/FileContext";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
    directory?: string;
  }
}

export function FileUploadArea() {
  const { files, setFiles, file, setFile, allowMultpleFiles } = useFiles();
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleMultpleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleSingleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFiles = (inputFiles: File[]) => {
    setFiles(inputFiles); // Store all file names
  };

  const handleFile = (inputFile: File) => {
    setFile(inputFile); // Send all files to the parent component
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
        isDragging
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 hover:border-gray-400"
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      {allowMultpleFiles ? (
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleMultpleFileInput}
          multiple
          webkitdirectory=""
          accept=".js,.py,.cpp,.ts,.tsx,.jsx"
          className="hidden"
        />
      ) : (
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleSingleFileInput}
          accept=".js,.py,.cpp,.ts,.tsx,.jsx"
          className="hidden"
        />
      )}
      <div className="flex flex-col items-center justify-center space-y-2">
        {allowMultpleFiles ? (
          <>
            {files.length > 0 ? (
              <>
                <FileIcon className="w-12 h-12 text-blue-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    {files[0].name}
                    {files.length > 1 && ` and ${files.length - 1} more files`}
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  Click or drag to replace
                </p>
              </>
            ) : (
              <>
                <UploadIcon className="w-12 h-12 text-gray-400" />
                <p className="text-sm font-medium text-gray-900">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  ZIP, JS, TS, PY, JAVA, C, CPP (max. 100MB)
                </p>
              </>
            )}
          </>
        ) : (
          <>
            {file ? (
              <>
                <FileIcon className="w-12 h-12 text-blue-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-900">
                    {file.name}
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  Click or drag to replace
                </p>
              </>
            ) : (
              <>
                <UploadIcon className="w-12 h-12 text-gray-400" />
                <p className="text-sm font-medium text-gray-900">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  ZIP, JS, TS, PY, JAVA, C, CPP (max. 100MB)
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
