"use client";

import ErrorPage from "@/components/ErrorPage";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  return <ErrorPage code={500} message={error.message || "Something went wrong."} />;
}
