"use client";

import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesDropdown from "@/components/ServicesDropsdown";

export default function InteriorFootwellLights() {
  return (
    <>
      <Head>
        <title>Interior Footwell Lights - RB Customs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-red-600"
        style={{ backgroundImage: "url('/images/IMG_7692.jpeg')" }}
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
       Interior Footwell Lights
      </h1>

      </section>

      {/* Info Section */}
      <section className="bg-black text-white py-16 px-6 font-sans font-semibold leading-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Text */}
          <div className="flex-1 space-y-6">
            <h2 className="text-red-600 text-3xl font-bold">Enhance Your Vehicle</h2>
            <p className="text-lg">
              Enhance your vehicle's interior setting with our premium footwell lighting solutions. We offer high-quality LED footwell lights that provide a luxurious and customizable experience.
            </p>

            <div>
              <h3 className="text-red-500 text-xl mb-1">Features:</h3>
              <ul className="list-disc list-inside">
                <li>Over 4 Million colours to choose from</li>
                <li>Wireless remote control + phone app</li>
                <li>Durable and long-lasting LED strips</li>
                <li>Hidden Wires</li>
              </ul>
            </div>

            <div>
              <h3 className="text-red-500 text-xl mb-1">Benefits:</h3>
              <ul className="list-disc list-inside">
                <li>Adds a modern and stylish look to your vehicle</li>
                <li>Improves visibility in the footwell area</li>
                <li>Enhances the driving experience</li>
                <li>Adds ambient light to the interior cabin</li>
              </ul>
            </div>

            <div>
              <h3 className="text-red-500 text-xl mb-1">Pricing:</h3>
              <p>
                Starting at <strong>$94.99</strong> (including installation) for most 4 door sedans and compact SUVs.
                Larger trucks and SUVs may cost more.
              </p>
              <ServicesDropdown />
            </div>
          </div>

          {/* Carousel */}
          <div className="flex-1 max-w-lg relative overflow-hidden rounded-lg">
            <div className="carousel-images flex transition-transform duration-500">
              <Image src="/images/IMG_7691.jpeg" alt="Light 1" width={800} height={500} className="min-w-full h-auto" />
              <Image src="/images/IMG_9275.jpeg" alt="Light 2" width={800} height={500} className="min-w-full h-auto" />
              <Image src="/images/2E0B8F3E-0E73-49C4-AAC4-F9581514DFF4.jpg" alt="Light 3" width={800} height={500} className="min-w-full h-auto" />
            </div>
            <div className="carousel-dots absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              <span className="dot w-3 h-3 bg-white rounded-full cursor-pointer"></span>
              <span className="dot w-3 h-3 bg-white rounded-full cursor-pointer"></span>
              <span className="dot w-3 h-3 bg-white rounded-full cursor-pointer"></span>
            </div>
          </div>
          
        </div>
      </section>

      <Footer />

      {/* JS Carousel Logic */}
      <Script id="carousel-script" strategy="afterInteractive">{`
        const carousel = document.querySelector(".carousel-images");
        const dots = document.querySelectorAll(".dot");
        let currentIndex = 0;

        function showSlide(index) {
          carousel.style.transform = \`translateX(-\${index * 100}%)\`;
          dots.forEach((dot, i) => dot.classList.toggle("bg-white", i !== index));
          dots.forEach((dot, i) => dot.classList.toggle("bg-red-500", i === index));
        }

        function nextSlide() {
          currentIndex = (currentIndex + 1) % dots.length;
          showSlide(currentIndex);
        }

        setInterval(nextSlide, 5000);
        dots.forEach((dot, i) => {
          dot.addEventListener("click", () => {
            currentIndex = i;
            showSlide(currentIndex);
          });
        });

        showSlide(currentIndex);
      `}</Script>
    </>
  );
}
