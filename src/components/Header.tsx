"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Journey", href: "/journey" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme, soundEnabled, toggleSound, playSFX } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Chakra Progress Line */}
      <div className="w-full h-1 bg-surface-container-highest">
        <div className="h-full bg-gradient-to-r from-primary-container via-secondary-container to-secondary-fixed-dim w-1/3 transition-all duration-300 animate-pulse"></div>
      </div>

      {/* Main Bar with Solid Manga Border (No torn-edge clipping) */}
      <div className="h-20 bg-surface-container-low border-b-2 border-on-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
          {/* Logo and Brand Title */}
          <Link
            href="/"
            onClick={() => playSFX("kunai")}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 rounded-sm border-2 border-on-surface bg-primary-container flex items-center justify-center manga-shadow group-hover:rotate-6 transition-transform">
              <span className="font-headline-sm text-on-primary text-[17px] tracking-tighter">LS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none group-hover:text-primary transition-colors">
                THE LATEEF &amp; CO.
              </span>
              <span className="font-label-code text-[10px] sm:text-label-code tracking-widest text-on-surface-variant uppercase">
                Lateef SHAIKH // MUMBAI ARCHITECT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => playSFX("click")}
                  className={`px-3 py-1 uppercase transition-all font-headline-sm text-headline-sm ${
                    active
                      ? "text-on-primary-container bg-primary-fixed border border-on-surface font-bold manga-shadow translate-y-[-1px]"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls: Theme, SFX, CTA, Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="px-2 py-1 bg-surface-container-high border-2 border-on-surface manga-shadow text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5"
              type="button"
              title="Toggle Day/Night Village Theme"
            >
              <span className="material-symbols-outlined text-[16px]">
                {theme === "day" ? "light_mode" : "dark_mode"}
              </span>
              <span className="hidden sm:inline font-label-code text-[11px] font-bold uppercase">
                {theme === "day" ? "Day Village" : "Night Shinobi"}
              </span>
            </button>

            {/* SFX Toggle */}
            <button
              onClick={toggleSound}
              className="px-2 py-1 bg-surface-container-high border-2 border-on-surface manga-shadow text-on-surface hover:bg-primary-container hover:text-on-primary transition-all flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5"
              type="button"
              title="Toggle Manga Audio Effects"
            >
              <span className="material-symbols-outlined text-[16px]">
                {soundEnabled ? "volume_up" : "volume_off"}
              </span>
              <span className="hidden sm:inline font-label-code text-[11px] font-bold uppercase">
                {soundEnabled ? "SFX: ON" : "SFX: OFF"}
              </span>
            </button>

            {/* Hire Lateef CTA */}
            <Link
              href="/contact"
              onClick={() => playSFX("dodon")}
              className="px-3 py-1.5 bg-primary-container text-on-primary border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm tracking-wide uppercase hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[18px]">swords</span>
              <span className="hidden md:inline">Hire Lateef</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                playSFX("click");
              }}
              className="lg:hidden p-1.5 bg-surface-container-high border-2 border-on-surface manga-shadow text-on-surface"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b-4 border-on-surface manga-shadow-lg p-5 flex flex-col gap-3 animate-in slide-in-from-top duration-200">
          <div className="font-label-code text-[11px] text-primary font-bold uppercase tracking-widest pb-1 border-b border-on-surface">
            // TACTICAL MISSION DIRECTORY
          </div>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  playSFX("click");
                }}
                className={`px-4 py-2 border-2 border-on-surface font-headline-sm text-headline-sm uppercase manga-shadow flex items-center justify-between transition-transform active:translate-x-0.5 active:translate-y-0.5 ${
                  active
                    ? "bg-primary-container text-on-primary font-bold"
                    : "bg-surface-container-low text-on-surface hover:bg-secondary-fixed"
                }`}
              >
                <span>{item.label}</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
