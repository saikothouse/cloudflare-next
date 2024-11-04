import './globals.css'; // Ensure you include your global styles
import Link from 'next/link';

export const metadata = {
  title: 'Contact Form App',
  description: 'A simple contact form application using Next.js and EmailJS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <header className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4 shadow-md">
          <nav className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-xl font-bold">Contact Form App</h1>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">
                Contact
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
          {children}
        </main>
        <footer className="bg-gray-200 text-center p-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Contact Form App. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
