"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <section className="footer-top text-center max-w-6xl mx-auto">
        <h2 className="text-xl font-bold text-red-500 mb-1">Contact Us</h2>
        <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>

        <div className="footer-contact grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-white">
          {/* Phone */}
          <div className="contact-item border border-gray-700 rounded p-6 text-center hover:scale-105 transition-transform duration-300">
            <a href="/contact" className="no-underline text-inherit">
              <i className="fas fa-phone text-4xl text-red-500 mb-4 block"></i>
              <h4 className="font-semibold mb-1">Call us at</h4>
              <p>647-290-7250</p>
            </a>
          </div>

          {/* Email */}
          <div className="contact-item border border-gray-700 rounded p-6 text-center hover:scale-105 transition-transform duration-300">
            <a href="/contact" className="no-underline text-inherit">
              <i className="fas fa-envelope text-4xl text-red-500 mb-4 block"></i>
              <h4 className="font-semibold mb-1">E-mail us at</h4>
              <p>rbcustoms111@gmail.com</p>
            </a>
          </div>

          {/* Instagram */}
          <div className="contact-item border border-gray-700 rounded p-15 text-center hover:scale-105 transition-transform duration-300">
            <a
              href="https://www.instagram.com/rbcustoms._/?igsh=MW1wOWtqdDlvNWI1Yg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-4xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      <div className="text-center pt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} RB Customs. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
