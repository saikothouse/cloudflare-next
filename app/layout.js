import './globals.css'; // Ensure you include your global styles
import Link from 'next/link';

export const metadata = {
  title: 'Contact Form App',
  description: 'A simple contact form application using Next.js and EmailJS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-gray-200 p-4">
          <nav className="flex justify-between">
            <Link href="/" className="text-lg font-bold">
              Contact
            </Link>
            <Link href="/about" className="text-lg font-bold">
              About
            </Link>
          </nav>
        </header>
        <main className="flex flex-col items-center justify-center min-h-screen p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
