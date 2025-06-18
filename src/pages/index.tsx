"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const images = ["/images/cm5.jpg", "/images/cm4.jpg", "/images/cm6.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Carousel */}
      <section id="hero-carousel" className="w-full overflow-hidden bg-black">
        <div className="relative w-full h-auto">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="min-w-full max-h-[650px] overflow-hidden">
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={1920}
                  height={900}
                  className="w-full h-full h-auto object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paragraph Section */}
      <section id="about" className="w-full bg-black text-white px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 self-start pt-2">
            <h2 className="text-4xl font-bold">Masters of Our Craft</h2>
            <p className="text-lg leading-relaxed">
              RB Customs was founded in 2021 with a vision to bring high-quality car modifications to life. Starting as a high schooler with a passion for automotive customization, a dream was turned into a growing business.
              <br /><br />
              Driven by creativity, craftsmanship, and a deep appreciation for automotive vehicles, RB Customs specializes in creating unique, personalized upgrades that make every ride extraordinary. From illuminated interiors to starlit headliners, and window tints to windshield repair,
              we transform your vehicles into a reflection of your creative prowess and dedication to your vehicle. Let us help you elevate your car to the next level!
            </p>
            <div
  className="relative mt-8 group inline-block"
  onMouseEnter={() => setShowDropdown(true)}
  onMouseLeave={() => setShowDropdown(false)}
>
  <div className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow hover:text-black-500 hover:scale-105 transition duration-300 flex items-center gap-2 cursor-pointer">
    Our Services <i className="fas fa-angle-down"></i>
  </div>

  <ul
    className={`absolute top-full left-0 bg-neutral-800 text-white shadow-lg rounded w-64 p-4 space-y-2 z-10 transition-opacity duration-200 ${
      showDropdown ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
    }`}
  >
    <li><a href="/interior-footwell-lights" className="block hover:text-red-400">Interior Footwell Lights</a></li>
    <li><a href="/interior-door-dash-lights" className="block hover:text-red-400">Interior Door and Dash Light</a></li>
    <li><a href="/headlight-restoration" className="block hover:text-red-400">Headlight Restoration</a></li>
    <li><a href="/chip-crack-repair" className="block hover:text-red-400">Windshield Chip/Crack Repair</a></li>
    <li><a href="#" className="block hover:text-red-400">Window Tinting</a></li>
    <li><a href="/starlight-headliner" className="block hover:text-red-400">Starlight Headliner</a></li>
  </ul>
</div>

          </div>

          <div className="about-image">
            <Image
              src="/images/IMG_9393.jpeg"
              alt="RB Customs Workshop"
              width={600}
              height={400}
              className="rounded shadow-md w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <Footer />

    </>
  );
}
