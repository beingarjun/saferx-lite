"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
          <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
          <p className="mt-2 text-slate-600">The app crashed.</p>
          <button
            onClick={() => reset()}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}