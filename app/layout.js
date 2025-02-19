// app/layout.js

import './globals.css';
import Footer from '../components/Footer';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Playquip Site',
  description: 'Playground Equipment Company Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
