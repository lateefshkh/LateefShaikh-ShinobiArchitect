"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function HomePage() {
  const { playSFX } = useApp();

  return (
    <div className="flex flex-col w-full">
      {/* Top Sound Effect Marquee */}
      <div className="w-full bg-surface-container-highest px-6 py-1.5 flex items-center justify-between text-on-surface-variant overflow-hidden select-none border-b border-on-surface/20">
        <div className="flex items-center gap-6 font-label-code text-[11px] uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>{" "}
            MISSION STATUS: ACTIVE IN MUMBAI
          </span>
          <span className="hidden sm:inline opacity-40">{"//"}</span>
          <span className="hidden sm:inline">CHAKRA CADENCE: 99.98% SPEED</span>
          <span className="hidden md:inline opacity-40">{"//"}</span>
          <span className="hidden md:inline">AVAILABLE FOR SELECT CLIENT MISSIONS</span>
        </div>
        <Link
          href="/work#live-deployments"
          className="font-label-code text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:text-primary transition-colors flex items-center gap-1.5 uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>4 LIVE APPS ONLINE ↗</span>
        </Link>
      </div>

      {/* SECTION 1: Splash-Page Hero Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-10 lg:py-16 max-w-7xl mx-auto">
        {/* Manga Double-Page Frame */}
        <div className="relative bg-surface-container-lowest border-4 border-on-surface manga-shadow-lg p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Act Caption Badge */}
          <div className="absolute top-0 left-0 bg-on-surface text-surface px-3 py-1 font-label-code text-label-code tracking-widest uppercase">
            [ACT I: PROTAGONIST AWAKENING]
          </div>

          {/* Halftone Screen Texture Accent (Top-Right) */}
          <div className="absolute top-0 right-0 w-48 h-48 screentone-dots opacity-20 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left: Punchy Manga Narrative Headline & CTA */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 self-start bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 font-label-code text-label-code uppercase tracking-wider border border-on-surface">
                <span className="material-symbols-outlined text-[15px]">bolt</span>
                SOLO ARCHITECT • THE LATEEF &amp; CO.
              </div>

              <div className="space-y-2">
                <h1 className="font-display-hero text-display-hero uppercase tracking-tight text-on-surface leading-none select-none">
                  I BUILD <br />
                  <span className="text-primary-container relative inline-block">
                    WEBSITES &amp; AI
                    {/* Speedline Accent Line */}
                    <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-on-surface"></span>
                  </span>{" "}
                  <br />
                  THAT WORK.
                </h1>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Freelance web developer and AI automation builder, Mumbai.
              </p>

              {/* Dialogue Snippet */}
              <div className="relative bg-surface-container-low p-4 max-w-md border-2 border-on-surface manga-shadow">
                <div className="font-speech-bubble-sm text-speech-bubble-sm text-on-surface">
                  “The digital realm doesn’t need more bloat. It needs raw speed, hardened code, and autonomous jutsu.”
                </div>
                <div className="font-label-code text-[11px] text-primary-container uppercase font-bold tracking-widest mt-1">
                  — Lateef SHAIKH // LEVEL 99 AGENT ARCHITECT
                </div>
              </div>

              {/* Primary Hero Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary-container text-on-surface border-2 border-on-surface font-headline-sm text-headline-sm uppercase tracking-wide manga-shadow hover:translate-x-1 hover:translate-y-1 transition-transform group"
                  href="/work"
                  onClick={() => playSFX("kunai")}
                >
                  <span>See My Work →</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
                <a
                  className="inline-flex items-center gap-2 px-5 py-4 bg-surface-container-high border-2 border-on-surface text-on-surface font-label-code text-label-code uppercase font-bold manga-shadow hover:bg-secondary-fixed transition-colors"
                  href="#jutsu"
                  onClick={() => playSFX("click")}
                >
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                  <span>Inspect Jutsu</span>
                </a>
              </div>
            </div>

            {/* Right: Anime Avatar Hero Feature */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              {/* Background Concentric Speedlines Graphic */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25">
                <svg
                  className="w-full h-full text-on-surface animate-spin"
                  style={{ animationDuration: "90s" }}
                  viewBox="0 0 400 400"
                >
                  <g stroke="currentColor" strokeDasharray="8 6" strokeWidth="1.5">
                    <circle cx="200" cy="200" fill="none" r="190"></circle>
                    <circle cx="200" cy="200" fill="none" r="140"></circle>
                    <circle cx="200" cy="200" fill="none" r="90"></circle>
                    <line x1="200" x2="200" y1="0" y2="400"></line>
                    <line x1="0" x2="400" y1="200" y2="200"></line>
                    <line x1="60" x2="340" y1="60" y2="340"></line>
                    <line x1="60" x2="340" y1="340" y2="60"></line>
                  </g>
                </svg>
              </div>

              {/* Avatar Manga Frame Panel */}
              <div className="relative w-full max-w-sm sm:max-w-md bg-surface-container-high border-3 border-on-surface manga-shadow-lg p-2.5 overflow-hidden transition-all duration-300 hover:scale-[1.01]">
                {/* Corner Visual Tape Marker */}
                <div className="absolute top-2 right-2 z-20 px-2 py-0.5 bg-secondary-container border border-on-surface text-on-secondary-container font-label-code text-[11px] font-bold uppercase tracking-wider">
                  Lateef // JUTSU: ON
                </div>

                <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container border border-on-surface">
                  <img
                    alt="Lateef Shaikh - Solo Architect & Full Stack AI Developer"
                    className="w-full h-full object-cover object-center filter contrast-105"
                    loading="eager"
                    src="/lateef/lateefshaikh.jpeg"
                  />
                  {/* Energy aura gradient overlay */}
                  <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20 bg-gradient-to-t from-primary-container via-transparent to-secondary-container"></div>
                </div>

                {/* Manga Bottom Strip Info */}
                <div className="mt-2.5 px-2 py-1.5 bg-surface-container-lowest border border-on-surface flex items-center justify-between font-label-code text-label-code">
                  <span className="text-on-surface font-bold uppercase flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
                    CHAKRA: 100%
                  </span>
                  <span className="text-on-surface-variant tracking-wider">FIG // 001.AVATAR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 'Skills as Jutsu' Strip */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto" id="jutsu">
        {/* Section Title Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b-2 border-on-surface pb-4">
          <div>
            <div className="inline-block bg-tertiary text-on-tertiary px-2 py-0.5 font-label-code text-label-code tracking-widest uppercase mb-1">
              [ARSENAL // NINPO SCROLLS]
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">
              SKILLS AS JUTSU
            </h2>
          </div>
          <p className="font-speech-bubble-sm text-speech-bubble-sm text-on-surface-variant max-w-xs text-left sm:text-right">
            Tactical engineering disciplines honed through relentless Mumbai sprints.
          </p>
        </div>

        {/* 6 Tilted Comic Box Jutsu Seals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Jutsu 1: Next.js */}
          <div
            onClick={() => playSFX("kunai")}
            className="group relative bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow transition-all duration-200 hover:-translate-y-1 hover:bg-secondary-fixed/20 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-on-surface text-surface flex items-center justify-center font-headline-md text-headline-md">
                01
              </div>
              <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant font-bold bg-surface-container border border-on-surface px-2 py-0.5">
                RANK: S-TIER
              </span>
            </div>
            <div className="text-primary font-label-code text-[11px] uppercase tracking-widest font-bold mb-1">
              Next.js 15 • App Router
            </div>
            <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-2">
              Rasengan of Speed
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Sub-second edge routing, server components, and dynamic caching engineered for lightning-fast loads.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-label-code text-[11px]">
              <span>SPEED: 99/100</span>
              <span className="material-symbols-outlined text-[16px] text-primary">cyclone</span>
            </div>
          </div>

          {/* Jutsu 2: React */}
          <div
            onClick={() => playSFX("kunai")}
            className="group relative bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow transition-all duration-200 hover:-translate-y-1 hover:bg-secondary-fixed/20 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-on-surface text-surface flex items-center justify-center font-headline-md text-headline-md">
                02
              </div>
              <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant font-bold bg-surface-container border border-on-surface px-2 py-0.5">
                RANK: A-TIER
              </span>
            </div>
            <div className="text-primary font-label-code text-[11px] uppercase tracking-widest font-bold mb-1">
              React • State Architecture
            </div>
            <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-2">
              Shadow Clone UI
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Modular, infinitely reusable atomic components multiplying UI velocity without state contamination.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-label-code text-[11px]">
              <span>CONCURRENCY: MAX</span>
              <span className="material-symbols-outlined text-[16px] text-primary">filter_none</span>
            </div>
          </div>

          {/* Jutsu 3: TypeScript */}
          <div
            onClick={() => playSFX("kunai")}
            className="group relative bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow transition-all duration-200 hover:-translate-y-1 hover:bg-secondary-fixed/20 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-on-surface text-surface flex items-center justify-center font-headline-md text-headline-md">
                03
              </div>
              <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant font-bold bg-surface-container border border-on-surface px-2 py-0.5">
                RANK: S-TIER
              </span>
            </div>
            <div className="text-primary font-label-code text-[11px] uppercase tracking-widest font-bold mb-1">
              TypeScript • Strict Schema
            </div>
            <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-2">
              Byakugan Strictness
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Complete structural type vision across client &amp; server boundaries. Zero runtime surprises, zero leaks.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-label-code text-[11px]">
              <span>ACCURACY: 100%</span>
              <span className="material-symbols-outlined text-[16px] text-primary">visibility</span>
            </div>
          </div>

          {/* Jutsu 4: Node / MongoDB */}
          <div
            onClick={() => playSFX("kunai")}
            className="group relative bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow transition-all duration-200 hover:-translate-y-1 hover:bg-secondary-fixed/20 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-on-surface text-surface flex items-center justify-center font-headline-md text-headline-md">
                04
              </div>
              <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant font-bold bg-surface-container border border-on-surface px-2 py-0.5">
                RANK: B-TIER
              </span>
            </div>
            <div className="text-primary font-label-code text-[11px] uppercase tracking-widest font-bold mb-1">
              Node.js • MongoDB • Redis
            </div>
            <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-2">
              Earth Style Data
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Bedrock data models, robust query pipelines, and rock-solid resilience capable of holding enterprise traffic.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-label-code text-[11px]">
              <span>DURABILITY: ULTRA</span>
              <span className="material-symbols-outlined text-[16px] text-primary">landscape</span>
            </div>
          </div>

          {/* Jutsu 5: AI Automation & Agents */}
          <div
            onClick={() => playSFX("powerup")}
            className="group relative bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow transition-all duration-200 hover:-translate-y-1 hover:bg-primary-fixed/30 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary-container text-on-surface border border-on-surface flex items-center justify-center font-headline-md text-headline-md">
                05
              </div>
              <span className="font-label-code text-label-code uppercase tracking-wider text-on-tertiary-fixed font-bold bg-tertiary-fixed border border-on-surface px-2 py-0.5">
                SECRET SEAL
              </span>
            </div>
            <div className="text-primary font-label-code text-[11px] uppercase tracking-widest font-bold mb-1">
              LangChain • FastAPI • Agents
            </div>
            <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-2">
              Forbidden Jutsu Engine
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Self-healing agents, automated lead extraction pipelines, and customized LLM reasoning running 24/7.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-label-code text-[11px]">
              <span>AUTONOMY: SELF-DIRECTED</span>
              <span className="material-symbols-outlined text-[16px] text-primary-container">psychology</span>
            </div>
          </div>

          {/* Jutsu 6: Tailwind CSS */}
          <div
            onClick={() => playSFX("kunai")}
            className="group relative bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow transition-all duration-200 hover:-translate-y-1 hover:bg-secondary-fixed/20 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-on-surface text-surface flex items-center justify-center font-headline-md text-headline-md">
                06
              </div>
              <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant font-bold bg-surface-container border border-on-surface px-2 py-0.5">
                RANK: S-TIER
              </span>
            </div>
            <div className="text-primary font-label-code text-[11px] uppercase tracking-widest font-bold mb-1">
              Tailwind CSS • Motion System
            </div>
            <h3 className="font-headline-md text-headline-md uppercase text-on-surface mb-2">
              Chakra Flow Design
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Micro-tailored design systems, zero-CSS runtime weight, and neo-brutalist manga aesthetic execution.
            </p>
            <div className="mt-4 pt-3 border-t border-surface-container-highest flex items-center justify-between text-on-surface-variant font-label-code text-[11px]">
              <span>WEIGHT: ZERO KB BLOAT</span>
              <span className="material-symbols-outlined text-[16px] text-primary">waves</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Live Deployments & Production Radar */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto" id="live-deployments">
        {/* Radar Section Title Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b-2 border-on-surface pb-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-2.5 py-0.5 font-label-code text-label-code tracking-widest uppercase mb-1 font-bold">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              [RADAR // LIVE PRODUCTION DEPLOYMENTS]
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">
              LIVE DEPLOYED PROJECTS
            </h2>
          </div>
          <p className="font-speech-bubble-sm text-speech-bubble-sm text-on-surface-variant max-w-xs text-left sm:text-right">
            Verified production builds running 24/7 on Vercel Edge networks.
          </p>
        </div>

        {/* 4 Live Vercel Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Live Project 1: Urban Vogue */}
          <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow p-5 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-200 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-surface-container-high border border-on-surface font-label-code text-[10px] font-bold uppercase text-on-surface">
                  E-COMMERCE
                </span>
                <span className="flex items-center gap-1 font-label-code text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  LIVE
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary transition-colors">
                Urban Vogue
              </h3>
              <div className="font-label-code text-[11px] text-primary font-bold">
                urban-vougee.vercel.app
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Luxury streetwear and apparel storefront with responsive cart state, smooth lookbooks, and sub-second page delivery.
              </p>
              <div className="flex flex-wrap gap-1 font-label-code text-[10px] text-on-surface-variant pt-1">
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Next.js</span>
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Tailwind</span>
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Cart Engine</span>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant">
              <a
                href="https://urban-vougee.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSFX("kunai")}
                className="w-full py-2.5 px-3 bg-primary-container text-on-primary border-2 border-on-surface manga-shadow font-headline-sm text-[12px] uppercase tracking-wide flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
              >
                <span>Visit Live Site</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Live Project 2: Ace New Interior */}
          <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow p-5 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-200 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-surface-container-high border border-on-surface font-label-code text-[10px] font-bold uppercase text-on-surface">
                  ARCHITECTURE
                </span>
                <span className="flex items-center gap-1 font-label-code text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  LIVE
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary transition-colors">
                Ace New Interior
              </h3>
              <div className="font-label-code text-[11px] text-primary font-bold">
                acenewinterior.vercel.app
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Bespoke spatial architecture and interior design showcase with virtual gallery staging and high-ticket consultation inquiry flow.
              </p>
              <div className="flex flex-wrap gap-1 font-label-code text-[10px] text-on-surface-variant pt-1">
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Next.js</span>
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Framer</span>
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Spatial 3D</span>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant">
              <a
                href="https://acenewinterior.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSFX("kunai")}
                className="w-full py-2.5 px-3 bg-secondary-fixed text-on-secondary-fixed border-2 border-on-surface manga-shadow font-headline-sm text-[12px] uppercase tracking-wide flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
              >
                <span>Visit Live Site</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Live Project 3: DKS Jewelry */}
          <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow p-5 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-200 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-surface-container-high border border-on-surface font-label-code text-[10px] font-bold uppercase text-on-surface">
                  FINE JEWELRY
                </span>
                <span className="flex items-center gap-1 font-label-code text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  LIVE
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary transition-colors">
                DKS Jewelry
              </h3>
              <div className="font-label-code text-[11px] text-primary font-bold">
                dks-jwelery.vercel.app
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Opulent boutique catalog showcasing fine gold, diamond jewelry, and bespoke interior aesthetics with instant 1-tap WhatsApp connect.
              </p>
              <div className="flex flex-wrap gap-1 font-label-code text-[10px] text-on-surface-variant pt-1">
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Next.js</span>
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">WhatsApp API</span>
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Luxury UI</span>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant">
              <a
                href="https://dks-jwelery.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSFX("kunai")}
                className="w-full py-2.5 px-3 bg-tertiary-fixed text-on-tertiary-fixed border-2 border-on-surface manga-shadow font-headline-sm text-[12px] uppercase tracking-wide flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
              >
                <span>Visit Live Site</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Live Project 4: The Lateef & Co. */}
          <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow p-5 flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-200 group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 bg-surface-container-high border border-on-surface font-label-code text-[10px] font-bold uppercase text-on-surface">
                  STUDIO HUB
                </span>
                <span className="flex items-center gap-1 font-label-code text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  LIVE
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary transition-colors">
                The Lateef &amp; Co.
              </h3>
              <div className="font-label-code text-[11px] text-primary font-bold">
                thelateefco.vercel.app
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Flagship engineering and AI consulting portfolio featuring custom manga shinobi aesthetics, edge optimizations, and client dispatch protocol.
              </p>
              <div className="flex flex-wrap gap-1 font-label-code text-[10px] text-on-surface-variant pt-1">
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Next.js 15</span>
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">TypeScript</span>
                <span className="px-1.5 py-0.5 bg-surface-container border border-outline">Vercel Edge</span>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-outline-variant">
              <a
                href="https://thelateefco.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSFX("kunai")}
                className="w-full py-2.5 px-3 bg-primary-container text-on-primary border-2 border-on-surface manga-shadow font-headline-sm text-[12px] uppercase tracking-wide flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
              >
                <span>Visit Live Site</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Featured Chapters (Canon Real Projects) */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto" id="featured-work">
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b-2 border-on-surface pb-4">
          <div>
            <div className="inline-block bg-on-surface text-surface px-2 py-0.5 font-label-code text-label-code tracking-widest uppercase mb-1">
              [CANON // CLIENT MISSIONS]
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">
              FEATURED CHAPTERS
            </h2>
          </div>
          <div className="font-label-code text-label-code text-on-surface-variant uppercase font-bold">
            INDEX // 01 — 03
          </div>
        </div>

        {/* 3 Comic Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Chapter 01: Urban Vogue */}
          <article className="bg-surface-container-lowest border-2 border-on-surface manga-shadow flex flex-col justify-between overflow-hidden group hover:translate-y-[-4px] transition-transform duration-200">
            <div>
              <div className="p-4 bg-surface-container-high border-b-2 border-on-surface flex items-center justify-between">
                <span className="font-label-code text-label-code uppercase tracking-widest font-bold text-on-surface">
                  CHAPTER 01
                </span>
                <span className="px-2 py-0.5 bg-emerald-500 text-white font-label-code text-[10px] font-bold uppercase border border-on-surface flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  LIVE ON VERCEL
                </span>
              </div>
              <div className="relative h-48 bg-surface-container-low border-b-2 border-on-surface overflow-hidden flex items-center justify-center p-6 screentone-dots">
                <div className="w-full h-full bg-surface-container-lowest border-2 border-on-surface p-4 manga-shadow flex flex-col justify-between relative z-10">
                  <div className="flex items-center justify-between font-label-code text-[11px] text-on-surface-variant">
                    <span>DEPLOYMENT: VERCEL</span>
                    <span className="text-emerald-500 font-bold">SUB-SECOND</span>
                  </div>
                  <div className="font-headline-md text-headline-md text-on-surface">
                    URBAN VOGUE
                  </div>
                  <div className="font-label-code text-[11px] text-primary font-bold">
                    urban-vougee.vercel.app
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex flex-wrap gap-1.5 font-label-code text-[11px]">
                  <span className="px-2 py-0.5 bg-surface-container border border-outline text-on-surface font-semibold">Next.js</span>
                  <span className="px-2 py-0.5 bg-surface-container border border-outline text-on-surface font-semibold">Tailwind CSS</span>
                  <span className="px-2 py-0.5 bg-surface-container border border-outline text-on-surface font-semibold">Cart Engine</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                  Urban Vogue — Streetwear Store
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  High-speed e-commerce platform with dynamic cart state and responsive mobile lookbooks.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex gap-2">
              <a
                className="w-full py-3 bg-primary-container text-on-primary font-headline-sm text-headline-sm uppercase text-center border-2 border-on-surface manga-shadow flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
                href="https://urban-vougee.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSFX("kunai")}
              >
                <span>Launch Live App ↗</span>
              </a>
            </div>
          </article>

          {/* Chapter 02: Ace New Interior */}
          <article className="bg-surface-container-lowest border-2 border-on-surface manga-shadow flex flex-col justify-between overflow-hidden group hover:translate-y-[-4px] transition-transform duration-200">
            <div>
              <div className="p-4 bg-surface-container-high border-b-2 border-on-surface flex items-center justify-between">
                <span className="font-label-code text-label-code uppercase tracking-widest font-bold text-on-surface">
                  CHAPTER 02
                </span>
                <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-code text-[10px] font-bold uppercase border border-on-surface flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  LIVE ON VERCEL
                </span>
              </div>
              <div className="relative h-48 bg-surface-container-low border-b-2 border-on-surface overflow-hidden flex items-center justify-center p-6 screentone-dots">
                <div className="w-full h-full bg-surface-container-lowest border-2 border-on-surface p-4 manga-shadow flex flex-col justify-between relative z-10">
                  <div className="flex items-center justify-between font-label-code text-[11px] text-on-surface-variant">
                    <span>AUDIT: LIGHTHOUSE</span>
                    <span className="text-secondary font-bold">+140% LEADS</span>
                  </div>
                  <div className="font-headline-md text-headline-md text-on-surface">
                    ACE INTERIOR
                  </div>
                  <div className="font-label-code text-[11px] text-primary font-bold">
                    acenewinterior.vercel.app
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex flex-wrap gap-1.5 font-label-code text-[11px]">
                  <span className="px-2 py-0.5 bg-surface-container border border-outline text-on-surface font-semibold">Next.js</span>
                  <span className="px-2 py-0.5 bg-surface-container border border-outline text-on-surface font-semibold">Framer Motion</span>
                  <span className="px-2 py-0.5 bg-surface-container border border-outline text-on-surface font-semibold">Spatial Design</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                  Ace New Interior Architecture
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Luxury interior architecture digital studio presenting bespoke spatial projects and consultation intake.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex gap-2">
              <a
                className="w-full py-3 bg-secondary-fixed text-on-secondary-fixed font-headline-sm text-headline-sm uppercase text-center border-2 border-on-surface manga-shadow flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
                href="https://acenewinterior.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSFX("kunai")}
              >
                <span>Launch Live App ↗</span>
              </a>
            </div>
          </article>

          {/* Chapter 03: LeadFlow (Leads Scraper) */}
          <article className="bg-surface-container-lowest border-2 border-on-surface manga-shadow flex flex-col justify-between overflow-hidden group hover:translate-y-[-4px] transition-transform duration-200">
            <div>
              <div className="p-4 bg-surface-container-high border-b-2 border-on-surface flex items-center justify-between">
                <span className="font-label-code text-label-code uppercase tracking-widest font-bold text-on-surface">
                  CHAPTER 03
                </span>
                <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed font-label-code text-[10px] font-bold uppercase border border-on-surface">
                  AI SCRAPER
                </span>
              </div>
              <div className="relative h-48 bg-surface-container-low border-b-2 border-on-surface overflow-hidden flex items-center justify-center p-6 screentone-dots">
                <div className="w-full h-full bg-surface-container-lowest border-2 border-on-surface p-4 manga-shadow flex flex-col justify-between relative z-10">
                  <div className="flex items-center justify-between font-label-code text-[11px] text-on-surface-variant">
                    <span>ENGINE: SERPER + GPT-4o</span>
                    <span className="text-tertiary font-bold">10K+ LEADS</span>
                  </div>
                  <div className="font-headline-md text-headline-md text-on-surface">
                    LEADFLOW
                  </div>
                  <div className="font-label-code text-[11px] text-on-surface-variant uppercase">
                    AUTONOMOUS B2B INTELLIGENCE
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex flex-wrap gap-1.5 font-label-code text-[11px]">
                  <span className="px-2 py-0.5 bg-surface-container border border-outline text-on-surface font-semibold">Python</span>
                  <span className="px-2 py-0.5 bg-surface-container border border-outline text-on-surface font-semibold">FastAPI</span>
                  <span className="px-2 py-0.5 bg-surface-container border border-outline text-on-surface font-semibold">OpenAI GPT-4o</span>
                </div>
                <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                  LeadFlow — AI Leads Scraper
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Autonomous B2B scraping jutsu extracting targeted prospect domains and qualifying intent 24/7.
                </p>
              </div>
            </div>
            <div className="p-6 pt-0 flex gap-2">
              <Link
                className="w-full py-3 bg-surface-container text-on-surface font-headline-sm text-headline-sm uppercase text-center border-2 border-on-surface manga-shadow flex items-center justify-center gap-2 group-hover:bg-primary-container group-hover:text-on-primary transition-colors"
                href="/work"
                onClick={() => playSFX("click")}
              >
                <span>View All 10 Missions →</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* SECTION 4: Lateef's Monologue / Philosophy Speech Bubble */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-16 max-w-5xl mx-auto flex flex-col items-center">
        {/* Monologue Badge */}
        <div className="font-label-code text-label-code uppercase tracking-widest text-on-surface-variant font-bold mb-4">
          [FOCUS // SHINOBI OATH]
        </div>

        {/* Hand-Inked Comic Oval Speech Bubble */}
        <div className="relative bg-surface-container-lowest border-4 border-on-surface max-w-2xl p-8 sm:p-12 manga-shadow-lg text-center rounded-3xl">
          <blockquote className="font-speech-bubble-lg text-speech-bubble-lg text-on-surface leading-relaxed sm:text-2xl">
            “Clean code. Fast delivery. Real results. <br className="hidden sm:inline" />
            No bloatware, no missed deadlines.”
          </blockquote>
          <div className="mt-4 pt-3 border-t border-surface-container-high inline-flex items-center gap-2 font-label-code text-label-code text-on-surface-variant uppercase tracking-wider">
            <span className="w-2 h-2 bg-primary-container rounded-full animate-ping"></span>
            Lateef SHAIKH // SHINOBI CODER’S OATH
          </div>

          {/* Pointed Speech Bubble Tail SVG */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 pointer-events-none">
            <svg
              className="w-full h-full fill-surface-container-lowest filter drop-shadow-[0px_3px_0px_#1c1b1b]"
              viewBox="0 0 32 32"
            >
              <path d="M0,0 L32,0 L16,28 Z"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 5: Final CTA Burst Panel */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto mb-12">
        {/* Chunky Manga Burst Panel Container */}
        <div className="relative bg-on-surface text-surface border-4 border-on-surface manga-shadow-lg p-8 sm:p-14 overflow-hidden">
          {/* Background Screentone Contrast */}
          <div className="absolute inset-0 screentone-dots opacity-10 pointer-events-none"></div>

          {/* Visual Burst Rays (Inline SVG) */}
          <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 400">
              <polygon fill="#ffffff" points="400,200 0,0 80,0"></polygon>
              <polygon fill="#ffffff" points="400,200 160,0 240,0"></polygon>
              <polygon fill="#ffffff" points="400,200 320,0 400,0"></polygon>
              <polygon fill="#ffffff" points="400,200 480,0 560,0"></polygon>
              <polygon fill="#ffffff" points="400,200 640,0 720,0"></polygon>
              <polygon fill="#ffffff" points="400,200 800,40 800,120"></polygon>
              <polygon fill="#ffffff" points="400,200 800,200 800,280"></polygon>
              <polygon fill="#ffffff" points="400,200 800,360 720,400"></polygon>
              <polygon fill="#ffffff" points="400,200 560,400 480,400"></polygon>
              <polygon fill="#ffffff" points="400,200 320,400 240,400"></polygon>
              <polygon fill="#ffffff" points="400,200 120,400 0,380"></polygon>
              <polygon fill="#ffffff" points="400,200 0,260 0,180"></polygon>
              <polygon fill="#ffffff" points="400,200 0,100 0,20"></polygon>
            </svg>
          </div>

          {/* Action Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary px-3 py-1 font-label-code text-label-code font-bold uppercase tracking-widest border border-surface">
              <span className="material-symbols-outlined text-[16px]">priority_high</span>
              <span>DISPATCH REQUEST • 2025</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg uppercase tracking-tight leading-none text-surface">
              READY FOR YOUR NEXT MISSION?
            </h2>

            <p className="font-body-lg text-body-lg text-surface-container-highest max-w-xl">
              Let’s turn your vision into an unstoppable digital weapon.
            </p>

            {/* Chakra Action Button */}
            <div className="pt-2">
              <Link
                className="inline-flex items-center gap-3 px-10 py-5 bg-primary-container text-on-surface border-2 border-surface manga-shadow hover:translate-x-1 hover:translate-y-1 transition-all group"
                href="/contact"
                onClick={() => playSFX("dodon")}
              >
                <span className="material-symbols-outlined text-[24px]">swords</span>
                <span className="font-headline-md text-headline-md uppercase tracking-wider">Start a Project</span>
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div className="font-label-code text-label-code text-surface-container-high tracking-wider uppercase pt-4">
              AVG FIRST SCROLL RESPONSE TIME: 4 HOURS // MUMBAI • REMOTE GLOBAL
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
