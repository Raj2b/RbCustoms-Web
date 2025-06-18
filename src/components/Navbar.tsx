"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const servicesMenuRef = useRef<HTMLUListElement>(null);
  
    useEffect(() => {
      const hamburger = document.getElementById("mobile-hamburger");
      const servicesToggle = document.getElementById("mobile-services-toggle");
  
      if (hamburger && mobileMenuRef.current) {
        hamburger.addEventListener("click", () => {
          const isShown = mobileMenuRef.current!.style.display === "block";
          mobileMenuRef.current!.style.display = isShown ? "none" : "block";
        });
      }
  
      if (servicesToggle && servicesMenuRef.current) {
        servicesToggle.addEventListener("click", () => {
          servicesMenuRef.current!.classList.toggle("show");
        });
      }
    }, []);
  
    return (
      <header>
        <style jsx>{`
          @media (max-width: 768px) {
            .navbar {
              display: none !important;
            }
  
            #mobile-hamburger {
              display: block;
              font-size: 60px;
              color: white;
              cursor: pointer;
            }
  
            .mobile-layout {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 20px;
              background-color: black;
            }
  
            .mobile-logo {
              text-align: center;
              flex-grow: 1;
            }
  
            #mobile-menu {
              display: none;
              position: absolute;
              top: 70px;
              left: 0;
              width: 100%;
              background-color: black;
              padding: 10px 20px;
              z-index: 1000;
            }
  
            .mobile-dropdown-content {
              display: none;
            }
  
            .mobile-dropdown-content.show {
              display: block;
            }
          }
  
          @media (min-width: 769px) {
            #mobile-hamburger,
            #mobile-menu,
            .mobile-layout {
              display: none !important;
            }
  
            .navbar {
              display: flex !important;
            }
          }
        `}</style>
  
        {/* Mobile Navbar */}
        <div className="mobile-layout px-4">
          <div id="mobile-hamburger">&#9776;</div>
<div className="mobile-logo flex justify-center">
            
            <Image src="/images/rb-customs-high-resolution-logo.png" alt="RB Customs Logo" width={120} height={60} />
          </div>
          <div className="social-media">
            <a href="https://www.instagram.com/rbcustoms._/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={{ fontSize: "50px", color: "white" }}></i>
            </a>
          </div>
        </div>
  
        {/* Desktop Navbar */}
        <div className="navbar w-full flex items-center justify-between px-15 py-4 bg-black text-white">
          <div className="logo">
            <Image src="/images/rb-customs-high-resolution-logo.png" alt="RB Customs Logo" width={150} height={80} />
          </div>
          <nav>
            <ul className="flex gap-21 text-[23px] font-semibold items-center">
                <li>
                <a href="/" className="hover:text-red-500 transition-transform hover:scale-110 duration-200">Home</a>
                </li>
                <li className="relative group">
                <a href="#" className="hover:text-red-500 transition-transform hover:scale-110 duration-200">Services <i className="fas fa-angle-down"></i></a>
                <ul className="absolute left-1/2 transform -translate-x-1/3 hidden text-[18px] group-hover:block bg-zinc-900 p-4 rounded shadow-lg z-20 space-y-2 text-sm w-64">
                    <li><a href="/interior-footwell-lights" className="block hover:text-red-400">Interior Footwell Lights</a></li>
                    <li><a href="/interior-door-dash-lights" className="block hover:text-red-400">Interior Door and Dash Light</a></li>
                    <li><a href="/headlight-restoration" className="block hover:text-red-400">Headlight Restoration</a></li>
                    <li><a href="/chip-crack-repair" className="block hover:text-red-400">Windshield Chip/Crack Repair</a></li>
                    <li><a href="#" className="block hover:text-red-400">Window Tinting</a></li>
                    <li><a href="/starlight-headliner" className="block hover:text-red-400">Starlight Headliner</a></li>
                </ul>
                </li>
                <li>
                <a href="/contact" className="hover:text-red-500 transition-transform hover:scale-110 duration-200">Contact</a>
                </li>
            </ul>
            </nav>

          <div className="social-media">
            <a href="https://www.instagram.com/rbcustoms._/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={{ fontSize: "56px", color: "white" }}></i>
            </a>
          </div>
        </div>
  
        {/* Mobile Menu */}
        <div id="mobile-menu" ref={mobileMenuRef}>
        <ul className="list-none p-4 space-y-3 text-white text-base font-bold">
            <li>
            <a href="/" className="block px-2 py-1 hover:text-red-400 active:text-red-400">Home</a>
            </li>
            <li>
            <div id="mobile-services-toggle" className="px-2 py-1 cursor-pointer">Services ▼</div>
            <ul id="mobile-services-menu" ref={servicesMenuRef} className="mobile-dropdown-content pl-4 space-y-2">
            <li><a href="/interior-footwell-lights" className="block active:text-red-400">Interior Footwell Lights</a></li>
            <li><a href="/interior-door-dash-lights" className="block active:text-red-400">Interior Door and Dash Light</a></li>
            <li><a href="/headlight-restoration" className="block active:text-red-400">Headlight Restoration</a></li>
            <li><a href="/chip-crack-repair" className="block active:text-red-400">Windshield Chip/Crack Repair</a></li>
            <li><a href="#" className="block active:text-red-400">Window Tinting</a></li>
            <li><a href="/starlight-headliner" className="block active:text-red-400">Starlight Headliner</a></li>
            </ul>

            </li>
            <li>
            <a href="/contact" className="block px-2 py-1 hover:text-red-400 active:text-red-400">Contact</a>
            </li>
        </ul>
        </div>

      </header>
    );
  }