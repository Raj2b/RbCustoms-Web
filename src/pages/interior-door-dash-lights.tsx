"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InteriorDoorDashLights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/cm18.png",
    "/images/cm17.png",
    "/images/cm16.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-red-600"
        style={{ backgroundImage: "url('/images/cm11.png')" }}
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
       Interior Door & Dash Lights
      </h1>
      </section>

      {/* Info Section */}
      <section className="bg-black text-white py-16 px-6 font-sans font-semibold leading-relaxed">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl text-red-600">Transform Your Interior</h2>
            <p className="text-lg">
              Enhance your vehicle’s interior with our premium door and dash lighting solutions.
            </p>

            <div>
              <h3 className="text-red-500 text-xl">Features:</h3>
              <ul className="list-disc pl-5">
                <li>Customizable colors with over 4 million options</li>
                <li>Seamless integration with your door and dash</li>
                <li>Remote and app-based control</li>
                <li>Professional-grade installation with hidden wiring</li>
              </ul>
            </div>

            <div>
              <h3 className="text-red-500 text-xl">Benefits:</h3>
              <ul className="list-disc pl-5">
                <li>Adds a luxurious ambiance to your vehicle</li>
                <li>Increases visibility and convenience</li>
                <li>Enhances the overall aesthetic appeal</li>
              </ul>
            </div>

            <div>
              <h3 className="text-red-500 text-xl">Pricing:</h3>
              <p>
                Starting at <strong>$249.99</strong> (including installation).
              </p>
            </div>
          </div>

          {/* Carousel */}
          <div className="flex-1 relative max-w-xl mx-auto overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Door and Dash Light ${index + 1}`}
                  width={600}
                  height={400}
                  className="min-w-full object-cover"
                />
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
              {images.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    currentIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
