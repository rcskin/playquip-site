"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Sending message...", { id: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      toast.dismiss("sending");

      if (response.ok) {
        toast.success("Message sent successfully!", {
          duration: 4000,
          position: "top-right",
          icon: "📩",
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again!", {
          duration: 4000,
          position: "top-right",
          icon: "❌",
        });
      }
    } catch (error) {
      toast.dismiss("sending");
      toast.error("Error sending message. Please check your connection!", {
        duration: 4000,
        position: "top-right",
        icon: "⚠️",
      });
    }
  };

  return (
    <main className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-blue-950 mb-8">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto">
          Have questions or need assistance? Get in touch with us! Whether it's
          about our products, services, or a custom project, we're here to help.
        </p>
      </section>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-blue-950 mb-2">Our Office</h2>
            <p className="text-lg text-gray-700">
              Playquip Leisure Ltd.<br />
              Unit 4 - Heath Industrial Estate<br />
              Cockaynes Lane - Arlesford<br />
              Essex CO7 8BZ, UK<br />
            </p>
            <p className="mt-2 text-lg">
              📞 <strong>Phone:</strong> +44 01206 825869<br />
              ✉️ <strong>Email:</strong>{" "}
              <a
                href="mailto:info@playquip.co.uk"
                className="text-blue-600 hover:underline"
              >
                info@playquip.co.uk
              </a>
            </p>
          </div>

          {/* Google Map */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2464.0398719041013!2d0.9865325840010251!3d51.86022842276245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d90fda8e419167%3A0x1c8d2427bab1bcb6!2sPlayquip%20UK%20Ltd!5e0!3m2!1sen!2suk!4v1727966115173!5m2!1sen!2suk"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">Send Us a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered w-full text-lg"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full text-lg"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg">Message</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full text-lg"
                placeholder="Type your message here..."
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition w-full text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}