'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
            <p className="text-xl mb-8">An error occurred while loading this page.</p>
            <div className="space-x-4">
              <button onClick={() => reset()} className="btn">
                Try again
              </button>
              <Link href="/" className="btn">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
} 