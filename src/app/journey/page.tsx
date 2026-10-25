"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function JourneyPage() {
  const { playSFX } = useApp();

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* METADATA STRIP */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-surface-container border-2 border-on-surface px-5 py-3 manga-shadow">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-tertiary text-on-tertiary font-label-code text-label-code uppercase border border-on-surface">
              <span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-ping"></span>
              Vol. 01 // File #088
            </span>
            <span className="font-label-code text-label-code text-on-surface-variant font-bold tracking-wider">
              CHARACTER DOSSIER: ACTIVE SHONEN BUILDER
            </span>
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant font-label-code text-label-code">
            <span>
              CHAKRA: <strong className="text-primary font-bold">100% FULL</strong>
            </span>
            <span>
              LOCATION: <strong className="text-secondary font-bold">MUMBAI (19.0760° N)</strong>
            </span>
            <span className="hidden md:inline px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-bold border border-on-surface">
              STATUS: UNBOUND
            </span>
          </div>
        </div>

        {/* HERO PROFILE SPREAD */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Illustrated Manga Protagonist Avatar */}
          <div className="lg:col-span-5 relative group">
            <div className="relative bg-surface-container-lowest border-4 border-on-surface p-3 manga-shadow-lg overflow-hidden flex flex-col justify-between h-full">
              {/* Manga Panel Speed Lines & Halftone Accent */}
              <div className="absolute inset-0 screentone-dots opacity-20 pointer-events-none"></div>

              <div className="relative z-10 flex items-center justify-between pb-3 mb-2 bg-surface-container-low border border-on-surface px-3 py-2">
                <span className="font-label-code text-label-code text-primary font-bold tracking-widest">
                  [PROTAGONIST // AWAKENING]
                </span>
                <button
                  type="button"
                  onClick={() => playSFX("dodon")}
                  className="font-headline-sm text-headline-sm text-tertiary tracking-tight cursor-pointer hover:scale-105 transition-transform"
                >
                  SFX: *KRAKA-DOOM!*
                </button>
              </div>

              {/* Protagonist Illustration */}
              <div className="relative border-2 border-on-surface overflow-hidden bg-surface-container-high aspect-[3/4] flex items-center justify-center">
                <img
                  alt="Manga protagonist Lateef Shaikh powering up with electric cyan and chakra orange aura holding kunai stylus and laptop"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ4Ybf6ZtsRQBfjfL5rhwuxPrY_aAifIlCmHFcYAoC8gdQh-poBlPyf9vzDJVx7LNhrfBowJF_vmEfwJEQiUQa3QITapqah5LQcWpNXa-zLlDst18FauCBrEXI52PNlUhncdGggqS-TnxSteGmaJepvz4klUTlB0EXqFfPLqbpYJ0TeZDjVs0CBwxXSFmJ81UwUonzNYp6kQLNT96R-ESHrYydmqc7xxGj0V18eSTSUpGkeVpkRdbC"
                />
                {/* Aura Corner Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-surface-container-lowest/95 backdrop-blur-sm border-2 border-on-surface px-3 py-1.5 manga-shadow flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
                  <span className="font-label-code text-label-code font-bold text-on-surface">
                    CYAN FLAME LEVEL: MAX
                  </span>
                </div>
              </div>

              <div className="relative z-10 pt-3 flex items-center justify-between font-label-code text-label-code text-on-surface-variant">
                <span>STYLUS: LOADED</span>
                <span className="text-secondary font-bold">NODE CLUSTER: SYNCED</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Protagonist Data Card */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-surface-container-low border-4 border-on-surface p-6 sm:p-8 manga-shadow-lg relative overflow-hidden">
            {/* Floating Speech Bubble Accent */}
            <div className="hidden sm:block absolute -top-3 right-6 bg-surface-container-lowest text-on-surface px-4 py-2 border-2 border-on-surface manga-shadow rotate-2 z-20">
              <p className="font-speech-bubble-sm text-speech-bubble-sm text-primary font-bold">
                &ldquo;Shipping over hesitation. Always.&rdquo;
              </p>
            </div>

            <div className="space-y-6">
              {/* Identity Badges */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 bg-primary text-on-primary font-label-code text-label-code font-bold uppercase border border-on-surface">
                    PROTAGONIST IDENT
                  </span>
                  <span className="px-2.5 py-0.5 bg-secondary-fixed text-on-secondary-fixed font-label-code text-label-code font-bold uppercase border border-on-surface">
                    CODENAME: THE LATEEF &amp; CO.
                  </span>
                </div>
                <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight uppercase leading-none">
                  Lateef SHAIKH
                </h1>
                <p className="font-headline-sm text-headline-sm text-primary tracking-wide uppercase mt-1">
                  Full-Stack Craftsman &amp; AI Automation Builder
                </p>
              </div>

              {/* Vital Specs Bento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-4 border-2 border-on-surface manga-shadow">
                  <span className="font-label-code text-label-code text-on-surface-variant block uppercase font-bold">
                    Operational Base
                  </span>
                  <span className="font-body-lg text-body-lg text-on-surface font-bold flex items-center gap-1.5 mt-0.5">
                    <span className="material-symbols-outlined text-secondary text-[20px]">location_on</span>
                    Mumbai, India{" "}
                    <span className="font-label-code text-label-code font-normal text-on-surface-variant">
                      (Global Delivery)
                    </span>
                  </span>
                </div>

                <div className="bg-surface-container-lowest p-4 border-2 border-on-surface manga-shadow">
                  <span className="font-label-code text-label-code text-on-surface-variant block uppercase font-bold">
                    Core Philosophy
                  </span>
                  <span className="font-body-md text-body-md text-on-surface font-bold mt-0.5 block text-primary">
                    Mastery over bloat. Shipping over hesitation.
                  </span>
                </div>
              </div>

              {/* Stat Bars */}
              <div className="space-y-3.5 bg-surface-container p-5 border-2 border-on-surface manga-shadow">
                <div className="flex items-center justify-between pb-1 border-b border-outline-variant">
                  <span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide">
                    STAT METERS // CHAKRA CALIBRATION
                  </span>
                  <span className="font-label-code text-label-code text-tertiary font-bold">
                    [COMBAT READY]
                  </span>
                </div>

                {/* Stat 1 */}
                <div className="space-y-1">
                  <div className="flex justify-between font-label-code text-label-code">
                    <span className="font-bold text-on-surface">FRONTEND VELOCITY</span>
                    <span className="font-bold text-primary">98%</span>
                  </div>
                  <div className="w-full h-3 bg-surface-container-highest border border-on-surface overflow-hidden p-0.5">
                    <div
                      className="h-full bg-primary-container screentone-dots transition-all duration-1000"
                      style={{ width: "98%" }}
                    ></div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="space-y-1">
                  <div className="flex justify-between font-label-code text-label-code">
                    <span className="font-bold text-on-surface">AI INTEGRATION DEPTH</span>
                    <span className="font-bold text-secondary">95%</span>
                  </div>
                  <div className="w-full h-3 bg-surface-container-highest border border-on-surface overflow-hidden p-0.5">
                    <div
                      className="h-full bg-secondary-fixed-dim screentone-dots transition-all duration-1000"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="space-y-1">
                  <div className="flex justify-between font-label-code text-label-code">
                    <span className="font-bold text-on-surface">ARCHITECTURE PRECISION</span>
                    <span className="font-bold text-on-surface">96%</span>
                  </div>
                  <div className="w-full h-3 bg-surface-container-highest border border-on-surface overflow-hidden p-0.5">
                    <div
                      className="h-full bg-inverse-surface screentone-dots transition-all duration-1000"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="space-y-1">
                  <div className="flex justify-between font-label-code text-label-code">
                    <span className="font-bold text-on-surface">PROBLEM-SOLVING STAMINA</span>
                    <span className="font-bold text-tertiary">99%</span>
                  </div>
                  <div className="w-full h-3 bg-surface-container-highest border border-on-surface overflow-hidden p-0.5">
                    <div
                      className="h-full bg-tertiary-container screentone-dots transition-all duration-1000"
                      style={{ width: "99%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action strip within spread */}
            <div className="pt-6 mt-4 flex flex-wrap items-center gap-4">
              <Link
                className="px-6 py-3 bg-primary-container text-on-primary border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2"
                href="/work"
                onClick={() => playSFX("kunai")}
              >
                <span>Explore My Work</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <span className="font-label-code text-label-code text-on-surface-variant font-medium">
                AVAILABLE FOR HIGH-STAKES CONTRACTS
              </span>
            </div>
          </div>
        </section>

        {/* 4-PANEL MANGA STORY ARC */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b-2 border-on-surface pb-3">
            <div>
              <span className="font-label-code text-label-code text-primary font-bold uppercase tracking-widest">
                CHRONICLES // VOLUME CHAPTERS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                Lateef&rsquo;S JOURNEY ARC
              </h2>
            </div>
            <p className="font-speech-bubble-sm text-speech-bubble-sm text-on-surface-variant max-w-xs">
              Read left-to-right, panel-by-panel. Every chapter forged with sweat and compilation passes.
            </p>
          </div>

          {/* Manga Panel Grid (Koma Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Panel 01 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow flex flex-col justify-between group hover:translate-y-[-2px] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 screentone-dots opacity-30"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-surface-container-highest border border-on-surface text-on-surface font-label-code text-label-code font-bold">
                    PANEL // 01
                  </span>
                  <span className="font-label-code text-label-code text-primary font-bold">YEAR 01</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide mb-3">
                  ORIGIN ARC — THE CODE FOUNDATION
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Started with deep MERN stack roots, mastering JavaScript runtime engines.
                </p>
                <p className="font-body-md text-body-md text-on-surface font-medium mt-2">
                  Crafted resilient component architectures and strict responsive design frameworks.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-low border border-on-surface px-3 py-2 flex items-center justify-between font-label-code text-label-code">
                <span className="text-on-surface-variant">TECH: MERN / TS</span>
                <span className="text-primary font-bold">ORIGIN READY</span>
              </div>
            </div>

            {/* Panel 02 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow flex flex-col justify-between group hover:translate-y-[-2px] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 screentone-dots opacity-30"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-secondary-fixed border border-on-surface text-on-secondary-fixed font-label-code text-label-code font-bold">
                    PANEL // 02
                  </span>
                  <span className="font-label-code text-label-code text-secondary font-bold">POWER UP</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide mb-3">
                  TRAINING ARC — AI &amp; AUTOMATION
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Expanded into autonomous agents, LLM pipelines, and webhook orchestrations.
                </p>
                <p className="font-body-md text-body-md text-on-surface font-medium mt-2">
                  Erased hundreds of hours of repetitive manual toil for fast-growing companies.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-low border border-on-surface px-3 py-2 flex items-center justify-between font-label-code text-label-code">
                <span className="text-on-surface-variant">TECH: LLMS / LANGCHAIN</span>
                <span className="text-secondary font-bold">AURA UNLOCKED</span>
              </div>
            </div>

            {/* Panel 03 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow flex flex-col justify-between group hover:translate-y-[-2px] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 screentone-dots opacity-30"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-primary-fixed border border-on-surface text-on-primary-fixed font-label-code text-label-code font-bold">
                    PANEL // 03
                  </span>
                  <span className="font-label-code text-label-code text-primary font-bold">NOW ACTIVE</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide mb-3">
                  PRESENT ARC — THE LATEEF &amp; CO.
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Operating as an elite solo contractor in Mumbai for global founders.
                </p>
                <p className="font-body-md text-body-md text-on-surface font-medium mt-2">
                  Shipping high-converting web apps and autonomous backend infrastructures.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-low border border-on-surface px-3 py-2 flex items-center justify-between font-label-code text-label-code">
                <span className="text-on-surface-variant">ROLE: ARCHITECT</span>
                <span className="text-primary font-bold">SHIPPING DAILY</span>
              </div>
            </div>

            {/* Panel 04 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow flex flex-col justify-between group hover:translate-y-[-2px] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 screentone-dots opacity-30"></div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-tertiary-fixed border border-on-surface text-on-tertiary-fixed font-label-code text-label-code font-bold">
                    PANEL // 04
                  </span>
                  <span className="font-label-code text-label-code text-tertiary font-bold">NEXT HORIZON</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide mb-3">
                  NEXT ARC — THE PRODUCT HORIZON
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Incubating proprietary AI micro-SaaS utilities and automated tools.
                </p>
                <p className="font-body-md text-body-md text-on-surface font-medium mt-2">
                  Scaling resilient digital products on distributed global edge servers.
                </p>
              </div>
              <div className="mt-6 pt-4 bg-surface-container-low border border-on-surface px-3 py-2 flex items-center justify-between font-label-code text-label-code">
                <span className="text-on-surface-variant">GOAL: MICRO-SAAS</span>
                <span className="text-tertiary font-bold">UNBOUND SCALE</span>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLL OF SKILLS: CATEGORIZED TECH ARSENAL */}
        <section className="bg-surface-container-low border-4 border-on-surface p-6 sm:p-10 manga-shadow-lg relative overflow-hidden space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-on-surface pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="material-symbols-outlined text-primary text-[20px]">auto_stories</span>
                <span className="font-label-code text-label-code text-primary font-bold uppercase tracking-widest">
                  NINJA ARSENAL // TECH SPEC
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                SCROLL OF SKILLS
              </h2>
            </div>
            <div className="font-label-code text-label-code text-on-surface-variant">
              COMPILED FOR MODERN FULL-STACK RUNTIMES &amp; VECTOR PIPELINES
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Languages &amp; Frameworks
                </h3>
                <span className="material-symbols-outlined text-primary text-[22px]">code</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Battle-tested toolchain for ultra-fast, responsive user interfaces.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["TypeScript", "React", "Next.js", "Node.js", "Python", "Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-surface-container font-label-code text-label-code font-bold text-on-surface border border-outline"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  AI &amp; Automation
                </h3>
                <span className="material-symbols-outlined text-secondary text-[22px]">psychology</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Cognitive nodes, embedding search, and automated background jobs.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["OpenAI APIs", "LangChain", "Serper.dev", "Webhooks", "Appwrite", "Pinecone"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary-fixed text-on-secondary-fixed font-label-code text-label-code font-bold border border-on-surface"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-6 manga-shadow space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                  Tools &amp; Craft
                </h3>
                <span className="material-symbols-outlined text-tertiary text-[22px]">build</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Deployment pipelines, containerization, and precision vector design.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Git", "Figma", "Docker", "Vercel", "Supabase"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-surface-container font-label-code text-label-code font-bold text-on-surface border border-outline"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FUN FACTS & NINJA PERSONALITY */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-on-surface pb-3">
            <div>
              <span className="font-label-code text-label-code text-secondary font-bold uppercase tracking-widest">
                SPEECH CANALS // INNER DIALOGUE
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                BEHIND THE KUNAI
              </h2>
            </div>
            <span className="material-symbols-outlined text-primary text-[32px]">chat</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Speech Bubble 01 */}
            <div className="bg-surface-container-lowest border-3 border-on-surface p-6 manga-shadow-lg relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">local_fire_department</span>
                  <span className="font-label-code text-label-code text-primary font-bold uppercase">
                    Anime Inspiration
                  </span>
                </div>
                <p className="font-speech-bubble-lg text-speech-bubble-lg text-on-surface leading-snug">
                  &ldquo;The eternal duel of Naruto’s gritty shipping energy and Sasuke’s razor-sharp precision.&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant flex items-center justify-end font-label-code text-label-code text-on-surface-variant">
                <span>// CHAKRA BALANCE</span>
              </div>
            </div>

            {/* Speech Bubble 02 */}
            <div className="bg-surface-container-lowest border-3 border-on-surface p-6 manga-shadow-lg relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-secondary text-[20px]">hardware</span>
                  <span className="font-label-code text-label-code text-secondary font-bold uppercase">
                    Zoro Work Ethic
                  </span>
                </div>
                <p className="font-speech-bubble-lg text-speech-bubble-lg text-on-surface leading-snug">
                  &ldquo;Never back down from a complex architectural bug. Cut straight through the blocker.&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant flex items-center justify-end font-label-code text-label-code text-on-surface-variant">
                <span>// ZERO BLINKING</span>
              </div>
            </div>

            {/* Speech Bubble 03 */}
            <div className="bg-surface-container-lowest border-3 border-on-surface p-6 manga-shadow-lg relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">rainy</span>
                  <span className="font-label-code text-label-code text-tertiary font-bold uppercase">
                    Based in Mumbai
                  </span>
                </div>
                <p className="font-speech-bubble-lg text-speech-bubble-lg text-on-surface leading-snug">
                  &ldquo;Fuelled by cutting chai, monsoon rain coding sprints, and fast Wi-Fi.&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant flex items-center justify-end font-label-code text-label-code text-on-surface-variant">
                <span>// 100% MAXIMUM POWER</span>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL BATTLE ACTION: CTA BANNER */}
        <section className="bg-inverse-surface text-inverse-on-surface border-4 border-on-surface p-8 sm:p-12 manga-shadow-lg relative overflow-hidden text-center flex flex-col items-center space-y-6">
          <div className="absolute inset-0 screentone-dots opacity-10 pointer-events-none"></div>

          <div className="max-w-2xl space-y-3 relative z-10">
            <span className="px-3 py-1 bg-primary text-on-primary font-label-code text-label-code font-bold uppercase border border-surface-bright inline-block">
              MISSION INVITATION // S-RANK CONTRACT
            </span>
            <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface uppercase tracking-tight">
              READY TO UNBIND YOUR ARCHITECTURE?
            </h2>
            <p className="font-body-md text-body-md text-surface-container-highest max-w-lg mx-auto">
              Need a high-velocity web platform or autonomous AI workflow delivered without the bloat? Let’s deploy.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Link
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-container text-on-surface font-headline-md text-headline-md uppercase tracking-wider border-2 border-surface manga-shadow hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              href="/contact"
              onClick={() => playSFX("dodon")}
            >
              <span className="material-symbols-outlined text-[24px]">swords</span>
              <span>Hire Lateef</span>
            </Link>
          </div>

          <div className="relative z-10 flex items-center gap-6 font-label-code text-label-code text-surface-dim pt-2">
            <span>RESPONSE TIME: &lt; 24 HOURS</span>
            <span>•</span>
            <span>DIRECT ENGAGEMENT ONLY</span>
          </div>
        </section>
      </div>
    </div>
  );
}
