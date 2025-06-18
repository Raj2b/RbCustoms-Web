"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_s4mxx6g",    
        "template_vwle0q8",   
        formRef.current,
        "muv5G1-aPALGu_-uZ"     
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Something went wrong. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="h-[70vh] flex justify-center items-center text-red-600 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cm12.jpg')" }}
      >
        <h1
      className="text-7xl font-bold text-red-600"
      style={{
        textShadow: `
          0 0 10px #000000,
          0 0 20px #ab1414,
          0 0 30px #9a1f1f,
          0 0 40px #742f2f
        `
      }}
      >
       Contact Us
      </h1>
      </section>

      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="bg-neutral-900 p-6 rounded-lg space-y-4">
            <h2 className="text-2xl text-red-500 font-bold mb-4">We'd Love to Hear From You!</h2>

            <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 bg-neutral-800 text-white" />
            <input type="email" name="email" placeholder="Email" required className="w-full p-3 bg-neutral-800 text-white" />
            <input type="tel" name="phone" placeholder="Phone" required className="w-full p-3 bg-neutral-800 text-white" />
            <textarea name="message" rows={5} placeholder="Your message..." required className="w-full p-3 bg-neutral-800 text-white"></textarea>

            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-neutral-900 p-6 rounded">
              <h3 className="text-red-500 text-lg">Phone</h3>
              <p><a href="tel:6472907250" className="text-white">647-290-7250</a></p>
            </div>
            <div className="bg-neutral-900 p-6 rounded">
              <h3 className="text-red-500 text-lg">Email</h3>
              <p><a href="mailto:rbcustoms111@gmail.com" className="text-white">rbcustoms111@gmail.com</a></p>
            </div>
            <div className="bg-neutral-900 p-6 rounded">
              <h3 className="text-red-500 text-lg">Follow Us</h3>
              <a href="https://www.instagram.com/rbcustoms._/" target="_blank" className="text-white">
                <i className="fab fa-instagram mr-2"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
