"use client";

import type React from "react";
import { useState, useRef } from "react";
import { FileIcon, UploadIcon } from "lucide-react";

interface FileUploadAreaProps {
  onFileSelect: (files: File[]) => void; // Updated to accept multiple files
}

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    webkitdirectory?: string;
  }
}

export function FileUploadArea({ onFileSelect }: FileUploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileNames, setFileNames] = useState<string[]>([]); // Array to store file names
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

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files: File[]) => {
    setFileNames(files.map((file) => file.name)); // Store all file names
    onFileSelect(files); // Send all files to the parent component
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
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInput}
        multiple
        webkitdirectory=""
        className="hidden"
      />
      <div className="flex flex-col items-center justify-center space-y-2">
        {fileNames.length > 0 ? (
          <>
            <FileIcon className="w-12 h-12 text-blue-500" />
            <div className="space-y-1">
              {fileNames.map((name, index) => (
                <p key={index} className="text-sm font-medium text-gray-900">
                  {name}
                </p>
              ))}
            </div>
            <p className="text-xs text-gray-500">Click or drag to replace</p>
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
      </div>
    </div>
  );
}
