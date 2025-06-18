"use client";
import { useState } from "react";

export default function ServicesDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
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
          showDropdown
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
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
  );
}
