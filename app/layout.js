// app/layout.js

import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "@/components/Navbar";
import { WishListProvider } from "./context/WishListContext";
import { Toaster } from "react-hot-toast"; 

export const metadata = {
  title: "Playquip Site",
  description: "Playground Equipment Company Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WishListProvider>
          <Navbar />
          <Toaster position="top-right" />
          {children}
          <Footer />
        </WishListProvider>
      </body>
    </html>
  );
}
