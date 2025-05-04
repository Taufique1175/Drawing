import dynamic from 'next/dynamic';
import Head from 'next/head';

const DrawingCanvas = dynamic(() => import('../components/DrawingCanvas'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Drawing Canvas</title>
      </Head>
      <div className="flex flex-col h-screen">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Digital Drawing Canvas</h1>
        </header>
        <main className="flex-1 overflow-hidden">
          <DrawingCanvas />
        </main>
        <footer className="bg-white text-center text-sm text-gray-500 py-2 shadow-inner">
          &copy; 2025 Digital Drawing App. All rights reserved.
        </footer>
      </div>
    </>
  );
}