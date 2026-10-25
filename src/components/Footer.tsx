"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { playSFX } = useApp();

  return (
    <footer className="w-full bg-surface-container-low border-t-4 border-on-surface relative overflow-hidden">
      {/* Mumbai Skyline Silhouette Screentone Decorative Strip */}
      <div className="w-full h-16 screentone-dots border-b border-outline-variant flex items-end justify-center opacity-60">
        <svg
          className="w-full h-12 text-on-surface"
          fill="currentColor"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,120 L0,70 L40,70 L50,50 L60,70 L120,70 L130,40 L150,40 L160,70 L240,70 L250,20 L270,10 L290,20 L300,70 L380,70 L420,30 L460,70 L560,70 L580,0 L600,0 L620,70 L720,70 L740,45 L760,45 L780,70 L860,70 L880,15 L910,15 L930,70 L1020,70 L1040,35 L1070,35 L1090,70 L1200,70 L1200,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-headline-md text-headline-md tracking-tight uppercase text-on-surface">
              THE LATEEF &amp; CO.
            </span>
            <span className="px-2 py-0.5 border border-on-surface bg-tertiary-container text-on-tertiary font-label-code text-label-code font-bold">
              PROD // 2025
            </span>
          </div>
          <p className="font-speech-bubble-sm text-speech-bubble-sm text-on-surface-variant">
            Built with chakra and code in the heart of Mumbai.
          </p>
        </div>

        {/* Social Icons & Comms */}
        <div className="flex items-center gap-3">
          <a
            className="w-9 h-9 border-2 border-on-surface manga-shadow bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-all"
            href="mailto:contact@thelateef.co"
            title="Direct Scroll / Email"
            onClick={() => playSFX("click")}
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </a>
          <a
            className="w-9 h-9 border-2 border-on-surface manga-shadow bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-all"
            href="https://linkedin.com/in/Lateef-shaikh"
            target="_blank"
            rel="noopener noreferrer"
            title="Shinobi Network / LinkedIn"
            onClick={() => playSFX("click")}
          >
            <span className="material-symbols-outlined text-[18px]">hub</span>
          </a>
          <a
            className="w-9 h-9 border-2 border-on-surface manga-shadow bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-all"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Scroll Vault / GitHub"
            onClick={() => playSFX("click")}
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
          </a>
          <a
            className="w-9 h-9 border-2 border-on-surface manga-shadow bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-all"
            href="https://instagram.com/sliqenca"
            target="_blank"
            rel="noopener noreferrer"
            title="Visual Hanko / Instagram @sliqenca"
            onClick={() => playSFX("click")}
          >
            <span className="material-symbols-outlined text-[18px]">photo_camera</span>
          </a>
        </div>

        {/* Right Credits */}
        <div className="text-center md:text-right font-label-code text-label-code text-on-surface-variant flex flex-col items-center md:items-end">
          <p>© 2025 Lateef Shaikh. All Rights Reserved.</p>
          <p className="text-primary font-bold">
            Solo Web &amp; AI Automation Builder // Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
