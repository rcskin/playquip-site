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
      {/* Contact Section */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">Our Office</h2>
                <p>
                  Playquip Leisure Ltd.<br />
                  Unit 4 - Heath Industrial Estate<br />
                  Cockaynes Lane - Arlesford<br />
                  Essex CO7 8BZ, UK<br />
                  Phone: +44 01206 825869<br />
                  Email: info@playquip.co.uk
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea textarea-bordered w-full"
                  placeholder="Your message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}