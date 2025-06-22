// FileContext.tsx
'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

interface FileContextType {
  files: File[];
  setFiles: (files: File[]) => void;
  file: File | null;
  setFile: (file: File) => void;
  fileText: string;
  setFileText: (fileText: string) => void;
  allowMultpleFiles: boolean;
  setAllowMultipleFiles: (allowMultpleFiles: boolean) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [fileText, setFileText] = useState<string>('');
  const [allowMultpleFiles, setAllowMultipleFiles] = useState<boolean>(false);

  return (
    <FileContext.Provider
      value={{
        files,
        setFiles,
        file,
        setFile,
        fileText,
        setFileText,
        allowMultpleFiles,
        setAllowMultipleFiles,
      }}
    >
      {children}
    </FileContext.Provider>
  );
};

export const useFiles = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFiles must be used within a FileProvider');
  }
  return context;
};
