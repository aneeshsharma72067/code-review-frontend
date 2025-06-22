'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { FileUploadArea } from './file-upload-area';
import { ArrowRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useFiles } from '@/context/FileContext';

const generateUid = () => {
  return 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

function convertToRawUrl(githubUrl) {
  return githubUrl
    .replace('github.com', 'raw.githubusercontent.com')
    .replace('/blob/', '/');
}

export function CodeReviewInput() {
  const [inputType, setInputType] = useState<'file' | 'github'>('file');
  const { files, file, allowMultpleFiles, setAllowMultipleFiles, setFile } =
    useFiles();
  const [githubRepo, setGithubRepo] = useState('');
  const router = useRouter();

  const fetchAndCreateFile = async (githubUrl: string) => {
    const rawUrl = githubUrl
      .replace('github.com', 'raw.githubusercontent.com')
      .replace('/blob/', '/');

    try {
      const response = await fetch(rawUrl);
      if (!response.ok) throw new Error('Failed to fetch file');

      const text = await response.text();

      const newFile = new File([text], 'script.py', {
        type: 'text/plain',
      });

      setFile(newFile);
      console.log('File created and stored in state:', newFile);
    } catch (error) {
      console.error('Error fetching GitHub file:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputType === 'file') {
      if (allowMultpleFiles && files) {
        if (files.length === 0) {
          alert('Please select at least 1 file');
        } else {
          router.push(`/review/${generateUid()}`);
        }
      } else {
        if (!file) {
          alert('Please select at least 1 file');
        } else {
          router.push(`/review/${generateUid()}`);
        }
      }
    } else if (inputType === 'github' && githubRepo) {
      fetchAndCreateFile(convertToRawUrl(githubRepo));

      router.push(`/review/${generateUid()}`);
    }
  };
  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div className='relative inline-flex p-1 bg-gray-200 dark:bg-zinc-900 rounded-lg'>
        <div
          className={`absolute inset-0 m-1 text-zinc-900 bg-gray-50 dark:bg-black dark:text-white rounded transition-transform duration-200 ease-in-out ${
            inputType === 'github' ? 'translate-x-full' : ''
          }`}
          style={{
            width: 'calc(50% - 4px)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
        />
        <button
          type='button'
          className={`relative z-10 px-14 py-4 text-sm text-nowrap font-medium transition-colors duration-200 ${
            inputType === 'file'
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => setInputType('file')}
        >
          Upload File
        </button>
        <button
          type='button'
          className={`relative z-10 px-14 py-4 text-sm text-nowrap font-medium transition-colors duration-200 ${
            inputType === 'github'
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={() => setInputType('github')}
        >
          GitHub Repo
        </button>
      </div>
      {inputType === 'file' && (
        <div className='w-full hidden  items-center justify-center'>
          <div className='flex flex-1 items-center justify-center space-x-2'>
            <Switch
              id='airplane-mode'
              onCheckedChange={setAllowMultipleFiles}
            />
            <Label htmlFor='airplane-mode'>Allow Multiple files</Label>
          </div>
        </div>
      )}
      <div className='space-y-4'>
        {inputType === 'file' ? (
          <FileUploadArea />
        ) : (
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='github-repo'>GitHub Repository URL</Label>
            <Input
              id='github-repo'
              placeholder='https://github.com/username/repo'
              value={githubRepo}
              onChange={(e) => setGithubRepo(e.target.value)}
            />
          </div>
        )}
      </div>

      <Button type='submit' className='w-full'>
        {inputType === 'file' ? (
          <>
            Start Code Review <ArrowRightIcon className='ml-2 h-4 w-4' />
          </>
        ) : (
          <>
            <GitHubLogoIcon className='mr-2 h-4 w-4' /> Review GitHub Repo
          </>
        )}
        {/* <Link href={`/review/${generateUid()}`}>Go</Link> */}
      </Button>
    </form>
  );
}
