"use client";

import { useWishList } from "../context/WishListContext";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Link from "next/link";

export default function WishList() {
  const { WishList, removeFromWishList, clearWishList } = useWishList();
  const [enquiry, setEnquiry] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const sendEnquiry = async () => {
    if (!userDetails.name || !userDetails.email) {
      toast.error("Please enter your name and email!", { position: "top-right" });
      return;
    }

    if (WishList.length === 0) {
      toast.error("Your Wish List is empty!", { position: "top-right" });
      return;
    }

    toast.loading("Sending enquiry...", { id: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: WishList, enquiry, userDetails }),
      });

      toast.dismiss("sending");

      if (response.ok) {
        toast.success("Enquiry sent successfully!", {
          duration: 4000,
          position: "top-right",
          icon: "📩",
        });

        setEnquiry("");
        setUserDetails({ name: "", email: "" });
        clearWishList();
      } else {
        toast.error("Failed to send enquiry. Try again!", {
          duration: 4000,
          position: "top-right",
          icon: "❌",
        });
      }
    } catch (error) {
      toast.dismiss("sending");
      toast.error("Failed to send enquiry. Please check your connection!", {
        duration: 4000,
        position: "top-right",
        icon: "⚠️",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 container mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold text-blue-700 mb-8 text-center">
        Your Wish List
      </h1>

      {WishList.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your Wish List is empty.{" "}
          <Link href="/products" className="text-blue-700 font-semibold">
            Add items
          </Link>{" "}
          to your Wish List to save them!
        </p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="space-y-4">
            {WishList.map((item) => (
              <li key={item.slug} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.mainImage.url}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-lg shadow-md"
                  />
                  <span className="text-lg font-medium">{item.title}</span>
                </div>
                <button
                  onClick={() => removeFromWishList(item.slug)}
                  className="text-red-600 hover:text-red-800 transition font-semibold"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* User Details Form */}
          <div className="mt-6">
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-md shadow-sm mb-3"
              required
            />
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-md shadow-sm mb-3"
              required
            />
            <textarea
              placeholder="Add any additional enquiry details..."
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
            ></textarea>

            <button
              onClick={sendEnquiry}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Send Enquiry
            </button>
          </div>
        </div>
      )}
    </main>
  );
}