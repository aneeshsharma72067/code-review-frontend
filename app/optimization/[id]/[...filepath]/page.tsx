'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { CodeIcon } from 'lucide-react';
import { useFiles } from '@/context/FileContext';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getOptimizedCode } from '@/services';

const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

export default function CodeOptimizationEditorPage() {
  const { file, files } = useFiles();
  const [fileContent, setFileContent] = useState<string>('');
  const [optimizedfileContent, setOptimizedFileContent] = useState<string>('');

  const params = useParams();
  const { filepath } = params;

  let fullFilePath = '';
  if (typeof filepath === 'string') {
    fullFilePath = filepath;
  } else {
    fullFilePath = filepath?.join('/') || '';
  }

  useEffect(() => {
    const getFileContent = () => {
      console.log('fullFilePath :', fullFilePath);

      const reader = new FileReader();

      reader.onload = () => {
        const content = reader.result as string; // File content as string
        setFileContent(content);
      };
      if (file) {
        reader.readAsText(file);
      } else {
        files.forEach((f) => {
          if (f.webkitRelativePath === fullFilePath) {
            reader.onload = () => {
              const content = reader.result as string; // File content as string
              setFileContent(content);
            };
            reader.readAsText(f);
            console.log(fileContent);
          }
        });
      }
    };
    const fetchOptimizedCode = async () => {
      console.log('optimizing code....');
      const res = await getOptimizedCode(fileContent);
      setTimeout(() => {
        setOptimizedFileContent(res.data.optimized_code);
      }, 2000);
      console.log('code optimized....');
    };
    getFileContent();
    if (fileContent) {
      fetchOptimizedCode();
    }
  }, [fullFilePath, fileContent, files, file]);
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-6 h-14 flex items-center border-b'>
        <Link className='flex items-center justify-center' href='/'>
          <CodeIcon className='h-6 w-6 mr-2' />
          <span className='font-bold'>AI Code Review</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='/'
          >
            Home
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='/about'
          >
            About
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='/contact'
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className='flex-1 flex flex-col items-center p-6'>
        <h1 className='text-3xl font-bold mb-6'>Code Optimization Editor</h1>

        <div className='flex flex-1 w-full max-w-7xl gap-4'>
          <div className='flex-1 border border-gray-300 rounded-md overflow-hidden shadow-md h-full'>
            <Editor
              height='100%'
              width='100%'
              language='python'
              value={fileContent.length ? fileContent : 'Empty'}
              theme='vs-dark'
            />
          </div>
          <div className='flex-1 border border-gray-300 rounded-md overflow-hidden shadow-md h-full'>
            <Editor
              height='100%'
              width='100%'
              defaultLanguage='python'
              value={optimizedfileContent ?? 'Empty'}
            />
          </div>
        </div>
      </main>

      <footer className='flex flex-col gap-2 sm:flex-row py-6 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 AI Code Review. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Terms of Service
          </Link>
          <Link className='text-xs hover:underline underline-offset-4' href='#'>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
