interface ErrorPageProps {
  code: number;
  message: string;
}

export default function ErrorPage({ code, message }: ErrorPageProps) {
  return (
    <main className="flex-1 flex items-center justify-center p-4">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold">{code}</h1>
        <div className="h-0.75 my-4 bg-linear-to-r from-[rgb(239,98,159)] to-[rgb(238,205,163)]" />
        <p className="text-lg">{message}</p>
      </div>
    </main>
  );
}
