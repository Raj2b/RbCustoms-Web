"use client";

import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect } from "react";
import ServicesDropdown from "@/components/ServicesDropsdown";

export default function HeadlightRestoration() {
  useEffect(() => {
    const carousel = document.querySelector(".carousel-images") as HTMLElement;
    const dots = document.querySelectorAll(".dot");
    let currentIndex = 0;

    function showSlide(index: number) {
      if (carousel) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % dots.length;
      showSlide(currentIndex);
    }

    const interval = setInterval(nextSlide, 5000);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
        clearInterval(interval);
      });
    });

    showSlide(currentIndex);
  }, []);

  return (
    <>
      <Head>
        <title>Headlight Restoration - RB Customs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: "url('/images/cm19.jpg')" }}
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
       Headlight Restoration
      </h1>
      </section>

      {/* Content Section */}
      <section className="bg-black text-white px-5 py-16 font-sans font-bold leading-relaxed">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h2 className="text-red-600 text-4xl mb-4">Restore Your Visibility</h2>
            <p className="text-lg">
              Over time, headlights can become cloudy or yellowed, reducing visibility and the aesthetic of your vehicle. We offer professional headlight restoration services to bring clarity and brightness back to your headlights.
            </p>
            <h3 className="text-red-600 text-xl">Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Removes yellowing, haze, and oxidation</li>
              <li>Improves light output and clarity</li>
              <li>Protective coating to prevent future damage</li>
            </ul>
            <h3 className="text-red-600 text-xl mt-4">Benefits:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Enhances nighttime visibility and safety</li>
              <li>Restores a like-new appearance</li>
              <li>Increases the value of your vehicle</li>
              <li>Extends the lifespan of your headlights</li>
            </ul>
            <h3 className="text-red-600 text-xl mt-4">Pricing:</h3>
            <p>Starting at <strong>$89.99</strong> (including both headlights).</p>
            <ServicesDropdown />
          </div>

          {/* Carousel */}
          <div className="flex-1 max-w-[600px] relative overflow-hidden rounded-xl">
            <div className="carousel-images flex transition-transform duration-500 ease-in-out">
              <Image src="/images/cm20.jpg" alt="Before" width={600} height={400} className="min-w-full h-auto object-cover" />
              <Image src="/images/cm21.png" alt="After" width={600} height={400} className="min-w-full h-auto object-cover" />
              <Image src="/images/cm.png" alt="Process" width={600} height={400} className="min-w-full h-auto object-cover" />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
              {[0, 1, 2].map((i) => (
                <span key={i} className="dot w-3 h-3 rounded-full bg-white/70 cursor-pointer" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
