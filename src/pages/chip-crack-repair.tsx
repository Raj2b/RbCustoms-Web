"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WindshieldRepair() {
  const images = ["/images/CM23.png", "/images/CM24.png", "/images/CM25.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/cm22.jpg')" }}
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
       Windshield Chip & Crack Repair
      </h1>
      </section>

      {/* Content Section */}
      <section className="bg-black text-white px-8 py-16 font-bold leading-relaxed">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl text-red-600">Keep Your Windshield Safe</h2>
            <p className="text-lg">
              Small chips and cracks in your windshield can quickly grow into bigger problems, costing you more time and money.
              We professionally seal rock chips and cracks to prevent further damage and help your vehicle pass safety inspections.
            </p>
            <div>
              <h3 className="text-red-500 text-xl">Features:</h3>
              <ul className="list-disc list-inside">
                <li>Seals chips and prevents spreading</li>
                <li>Restores structural integrity of windshield</li>
                <li>Maintains optical clarity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-500 text-xl">Benefits:</h3>
              <ul className="list-disc list-inside">
                <li>Prevents further damage</li>
                <li>Improves visibility and safety by reducing glare</li>
                <li>Saves a lot of money compared to full replacement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-red-500 text-xl">Pricing:</h3>
              <p>
                Chips start at <strong>$59.99</strong> per repair (depending on size and location).<br />
                Cracks start at <strong>$99.99</strong> per repair (depending on size and location).
              </p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="flex-1 relative overflow-hidden rounded-lg max-w-xl mx-auto">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`Windshield Repair ${idx + 1}`}
                  width={600}
                  height={400}
                  className="min-w-full h-auto object-cover rounded"
                />
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    idx === currentIndex ? "bg-white" : "bg-white/50"
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
