"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function ContactPage() {
  const { playSFX } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    missionType: "",
    budget: "tier2",
    scope: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isStamping, setIsStamping] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
    playSFX("click");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.scope) return;

    setIsStamping(true);
    playSFX("dodon");

    setTimeout(() => {
      setIsStamping(false);
      setIsSubmitted(true);
      playSFX("powerup");
    }, 850);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Visual Accent / Breadcrumb Bar */}
      <section className="w-full px-6 py-6 md:py-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-on-surface">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-inverse-surface text-surface-bright font-label-code text-label-code font-bold uppercase tracking-widest manga-shadow">
              [MISSION DISPATCH // COMMUNICATIONS TERMINAL]
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 font-label-code text-label-code text-on-surface-variant font-bold">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
              SECTOR: MUMBAI HQ [19.0760° N, 72.8777° E]
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container-high border-2 border-on-surface manga-shadow">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
              <span className="font-label-code text-label-code font-bold uppercase text-on-surface">
                ACCEPTING Q2 MISSIONS
              </span>
            </div>
            <span className="hidden md:block font-label-code text-label-code text-on-surface-variant">
              EST. LATENCY: &lt; 4 HOURS
            </span>
          </div>
        </div>

        {/* Title & Intel Header */}
        <div className="mt-8 mb-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-2">
            <div className="inline-block px-2 py-0.5 bg-primary-fixed text-on-primary-fixed border border-on-surface font-label-code text-label-code font-bold uppercase">
              {"//"} NINJA MISSION SCROLL PROTOCOL
            </div>
            <h1 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">
              TRANSMIT YOUR{" "}
              <span className="bg-primary-container text-on-primary px-3 py-0.5 inline-block -rotate-1 border-2 border-on-surface manga-shadow">
                MISSION SCROLL
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-1">
              Have an elite web app to build or modern AI workflow to automate? Unroll your briefing. Every transmitted directive lands directly inside Lateef’s personal terminal.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            {/* Manga Speech Bubble Insight */}
            <div className="relative bg-surface-container-lowest border-2 border-on-surface manga-shadow p-3.5 max-w-xs">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[24px]">bolt</span>
                <div>
                  <p className="font-speech-bubble-sm text-speech-bubble-sm text-on-surface leading-tight">
                    &ldquo;Direct terminal dispatch. Zero account managers, zero bureaucracy. Pure architect-grade execution.&rdquo;
                  </p>
                  <span className="font-label-code text-label-code text-primary font-bold mt-1 block">
                    {"//"} Lateef SHAIKH
                  </span>
                </div>
              </div>
              {/* Bubble tail */}
              <div className="absolute -bottom-2.5 left-8 w-4 h-4 bg-surface-container-lowest border-r-2 border-b-2 border-on-surface transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dual Column Workspace */}
      <section className="w-full px-6 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: The Ninja Mission Scroll (Interactive Contact Form) */}
          <div className="lg:col-span-7 relative">
            {/* Wooden Top Roller */}
            <div className="w-full h-5 bg-[#3e2723] border-2 border-on-surface rounded-t-sm flex items-center justify-between px-4 manga-shadow">
              <div className="w-3 h-2 bg-[#d7ccc8] border border-on-surface"></div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffb74d]"></span>
                <span className="font-label-code text-[10px] text-amber-100 uppercase tracking-wider font-bold">
                  SEALED ARTIFACT #9440
                </span>
              </div>
              <div className="w-3 h-2 bg-[#d7ccc8] border border-on-surface"></div>
            </div>

            {/* The Parchment Scroll Body */}
            <div id="mission-form" className="relative bg-surface-container-low border-x-4 border-b-4 border-on-surface p-6 sm:p-8 manga-shadow-lg">
              {/* Screentone Dot Watermark */}
              <div className="absolute top-2 right-2 w-28 h-28 screentone-dots opacity-25 pointer-events-none"></div>

              {/* Scroll Header Seal */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-dashed border-outline-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">history_edu</span>
                  <span className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-wide">
                    CONFIDENTIAL DISPATCH BRIEF
                  </span>
                </div>
                <div className="px-2 py-0.5 bg-surface-container border border-on-surface font-label-code text-label-code text-on-surface font-bold">
                  RANK: PROTOCOL // S-CLASS
                </div>
              </div>

              <form className="space-y-6 relative" onSubmit={handleSubmit}>
                {/* Row 1: Name & Dispatch Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className="flex items-center gap-1 font-label-code text-label-code font-bold uppercase text-on-surface"
                      htmlFor="client-name"
                    >
                      <span className="text-primary font-bold">01 //</span> Shinobi / Client Name *
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-surface-container-lowest text-on-surface border-2 border-on-surface p-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all"
                        id="client-name"
                        placeholder="e.g. Kenji Tanaka / Studio Founder"
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant text-[18px]">
                        badge
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className="flex items-center gap-1 font-label-code text-label-code font-bold uppercase text-on-surface"
                      htmlFor="client-email"
                    >
                      <span className="text-primary font-bold">02 //</span> Electronic Dispatch (Email) *
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-surface-container-lowest text-on-surface border-2 border-on-surface p-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all"
                        id="client-email"
                        placeholder="founder@yourclan.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant text-[18px]">
                        alternate_email
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row 2: Mission Classification */}
                <div className="space-y-1.5">
                  <label
                    className="flex items-center gap-1 font-label-code text-label-code font-bold uppercase text-on-surface"
                    htmlFor="mission-type"
                  >
                    <span className="text-primary font-bold">03 //</span> Mission Classification *
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-surface-container-lowest text-on-surface border-2 border-on-surface p-3 font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all pr-10 cursor-pointer"
                      id="mission-type"
                      required
                      value={formData.missionType}
                      onChange={(e) => setFormData({ ...formData, missionType: e.target.value })}
                    >
                      <option disabled value="">
                        Select primary objective...
                      </option>
                      <option value="nextjs">⚡ Modern Web App &amp; Next.js Architecture</option>
                      <option value="ai">🤖 AI Automation, Autonomous Agents &amp; Chatbots</option>
                      <option value="fullstack">⚔️ Full-Stack Custom SaaS Platform Build</option>
                      <option value="audit">📜 High-Impact Technical Audit &amp; System Optimization</option>
                      <option value="advisory">🎯 Founder-to-Engineer Strategic Consultation</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-3.5 pointer-events-none text-on-surface text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Row 3: Budget Tier Selector */}
                <div className="space-y-2">
                  <label className="flex items-center justify-between font-label-code text-label-code font-bold uppercase text-on-surface">
                    <span>
                      <span className="text-primary font-bold">04 //</span> Allocated Chakra / Budget Tier
                    </span>
                    <span className="text-on-surface-variant font-normal">Select estimate</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <label
                      className="cursor-pointer"
                      onClick={() => {
                        setFormData({ ...formData, budget: "tier1" });
                        playSFX("click");
                      }}
                    >
                      <input
                        className="peer sr-only"
                        name="budget"
                        type="radio"
                        checked={formData.budget === "tier1"}
                        onChange={() => {}}
                      />
                      <div className="p-3 bg-surface-container-lowest border-2 border-on-surface peer-checked:bg-secondary-fixed peer-checked:border-on-surface peer-checked:font-bold manga-shadow transition-all text-center">
                        <span className="font-headline-sm text-headline-sm block leading-none">TIER 1</span>
                        <span className="font-label-code text-[11px] block mt-1 text-on-surface-variant">
                          ₹50K – ₹1.5L
                        </span>
                        <span className="font-label-code text-[10px] text-primary block mt-0.5">
                          ($1k – $2.5k)
                        </span>
                      </div>
                    </label>

                    <label
                      className="cursor-pointer"
                      onClick={() => {
                        setFormData({ ...formData, budget: "tier2" });
                        playSFX("click");
                      }}
                    >
                      <input
                        className="peer sr-only"
                        name="budget"
                        type="radio"
                        checked={formData.budget === "tier2"}
                        onChange={() => {}}
                      />
                      <div className="p-3 bg-surface-container-lowest border-2 border-on-surface peer-checked:bg-primary-fixed peer-checked:border-on-surface peer-checked:font-bold manga-shadow transition-all text-center">
                        <span className="font-headline-sm text-headline-sm block leading-none">TIER 2</span>
                        <span className="font-label-code text-[11px] block mt-1 text-on-surface-variant">
                          ₹1.5L – ₹3.5L
                        </span>
                        <span className="font-label-code text-[10px] text-primary block mt-0.5">
                          ($2.5k – $5.5k)
                        </span>
                      </div>
                    </label>

                    <label
                      className="cursor-pointer"
                      onClick={() => {
                        setFormData({ ...formData, budget: "tier3" });
                        playSFX("click");
                      }}
                    >
                      <input
                        className="peer sr-only"
                        name="budget"
                        type="radio"
                        checked={formData.budget === "tier3"}
                        onChange={() => {}}
                      />
                      <div className="p-3 bg-surface-container-lowest border-2 border-on-surface peer-checked:bg-tertiary-fixed peer-checked:border-on-surface peer-checked:font-bold manga-shadow transition-all text-center">
                        <span className="font-headline-sm text-headline-sm block leading-none">S-RANK</span>
                        <span className="font-label-code text-[11px] block mt-1 text-on-surface-variant">
                          ₹3.5L+ // CUSTOM
                        </span>
                        <span className="font-label-code text-[10px] text-tertiary block mt-0.5">
                          ($6k+ Full Scope)
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Row 4: Project Scope & Intel */}
                <div className="space-y-1.5">
                  <label
                    className="flex items-center justify-between font-label-code text-label-code font-bold uppercase text-on-surface"
                    htmlFor="project-intel"
                  >
                    <span>
                      <span className="text-primary font-bold">05 //</span> Project Scope &amp; Tactical Intel *
                    </span>
                    <span className="text-on-surface-variant font-normal">Detail deliverables</span>
                  </label>
                  <textarea
                    className="w-full bg-surface-container-lowest text-on-surface border-2 border-on-surface p-3 font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all"
                    id="project-intel"
                    placeholder="Detail your operational goals: What is the product? What are the key milestones? Any existing stack or APIs to tie into?"
                    required
                    rows={4}
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  ></textarea>
                </div>

                {/* Submission Area With Stamp Animation */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
                    <span className="font-label-code text-label-code text-on-surface-variant">
                      Encrypted Direct Transmission
                    </span>
                  </div>

                  {/* Primary Submit Button */}
                  <button
                    className="w-full sm:w-auto relative px-7 py-3 bg-primary-container text-on-surface border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-all group overflow-hidden cursor-pointer"
                    id="submit-stamp-btn"
                    type="submit"
                    disabled={isStamping}
                  >
                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-12">
                      stylus_note
                    </span>
                    <span>
                      {isSubmitted ? "MISSION SCROLL DISPATCHED" : "STAMP SEAL &amp; SEND MISSION"}
                    </span>

                    {/* Hanko Stamp Impression Effect */}
                    {isStamping && (
                      <div className="absolute inset-0 bg-tertiary text-on-tertiary flex items-center justify-center font-headline-md text-headline-md tracking-widest border-2 border-on-surface animate-ping">
                        SEALED // TRANSMITTED
                      </div>
                    )}
                  </button>
                </div>

                {/* Interactive Feedback Status Container */}
                {isSubmitted && (
                  <div className="p-4 bg-secondary-fixed border-2 border-on-surface manga-shadow animate-in fade-in duration-300">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-on-secondary-fixed text-[26px]">
                        mark_email_read
                      </span>
                      <div>
                        <h4 className="font-headline-sm text-headline-sm uppercase text-on-secondary-fixed">
                          MISSION SCROLL RECEIVED
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-secondary-fixed-variant mt-0.5">
                          Lateef has been alerted at Mumbai Base. You will receive a reconnaissance reply within 4 business hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Wooden Bottom Roller */}
            <div className="w-full h-5 bg-[#3e2723] border-x-2 border-b-2 border-on-surface rounded-b-sm flex items-center justify-between px-4 manga-shadow">
              <div className="w-3 h-2 bg-[#d7ccc8] border border-on-surface"></div>
              <div className="font-label-code text-[9px] text-[#ffb74d] uppercase font-bold tracking-widest">
                TRANSMISSION FREQUENCY // ACTIVE
              </div>
              <div className="w-3 h-2 bg-[#d7ccc8] border border-on-surface"></div>
            </div>
          </div>

          {/* RIGHT COLUMN: Direct Channels, Manga Panels & Rapid Intel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Rapid Dispatch Panel: Direct Comms */}
            <div className="bg-surface-container border-4 border-on-surface manga-shadow-lg p-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b-2 border-on-surface pb-3 mb-4">
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  DIRECT COMMS CHANNELS
                </span>
                <span className="font-label-code text-label-code text-primary font-bold">
                  [SPEED PROTOCOL]
                </span>
              </div>

              <div className="space-y-3">
                {/* Email Direct Card */}
                <a
                  className="flex items-center justify-between p-3 bg-surface-container-lowest border-2 border-on-surface manga-shadow hover:bg-secondary-fixed hover:translate-x-1 transition-all group"
                  href="mailto:thelateefco@gmail.com"
                  onClick={() => playSFX("click")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary-container text-on-primary border border-on-surface flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <div>
                      <div className="font-label-code text-[11px] text-on-surface-variant uppercase font-bold">
                        Priority Mailbox
                      </div>
                      <div className="font-label-code text-label-code font-bold text-on-surface group-hover:text-primary">
                        thelateefco@gmail.com
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>

                {/* WhatsApp Direct Card */}
                <a
                  className="flex items-center justify-between p-3 bg-surface-container-lowest border-2 border-on-surface manga-shadow hover:bg-secondary-fixed hover:translate-x-1 transition-all group"
                  href="https://wa.me/919769212600?text=Hello%20Lateef,%20I%20have%20a%20project%20inquiry"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => playSFX("click")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-secondary text-on-secondary border border-on-surface flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                    </div>
                    <div>
                      <div className="font-label-code text-[11px] text-on-surface-variant uppercase font-bold">
                        Instant Signal / WhatsApp
                      </div>
                      <div className="font-label-code text-label-code font-bold text-on-surface group-hover:text-secondary">
                        +91 97692 12600
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>

                {/* GitHub Card */}
                <a
                  className="flex items-center justify-between p-3 bg-surface-container-lowest border-2 border-on-surface manga-shadow hover:bg-secondary-fixed hover:translate-x-1 transition-all group"
                  href="https://github.com/lateefshkh/"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => playSFX("click")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-inverse-surface text-surface-bright border border-on-surface flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">code</span>
                    </div>
                    <div>
                      <div className="font-label-code text-[11px] text-on-surface-variant uppercase font-bold">
                        Public Scrolls / GitHub
                      </div>
                      <div className="font-label-code text-label-code font-bold text-on-surface">
                        github.com/lateefshkh
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>

                {/* LinkedIn Card */}
                <a
                  className="flex items-center justify-between p-3 bg-surface-container-lowest border-2 border-on-surface manga-shadow hover:bg-secondary-fixed hover:translate-x-1 transition-all group"
                  href="https://www.linkedin.com/in/mr-lateef-s-476637318/"
                  rel="noopener noreferrer"
                  target="_blank"
                  onClick={() => playSFX("click")}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-surface-container-highest text-on-surface border border-on-surface flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">hub</span>
                    </div>
                    <div>
                      <div className="font-label-code text-[11px] text-on-surface-variant uppercase font-bold">
                        Shinobi Network / LinkedIn
                      </div>
                      <div className="font-label-code text-label-code font-bold text-on-surface">
                        linkedin.com/in/mr-lateef-s-476637318
                      </div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Manga Narrative Action Panel: Lateef in Focus */}
            <div className="bg-surface-container-lowest border-4 border-on-surface manga-shadow-lg p-4 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-code text-[11px] bg-on-surface text-surface px-2 py-0.5 font-bold uppercase tracking-wider">
                  PANEL // 04: ARCHITECT AURA
                </span>
                <span className="font-label-code text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  ACTIVE STATUS
                </span>
              </div>

              <div className="relative w-full h-64 overflow-hidden border-2 border-on-surface bg-surface-container-high">
                <img
                  className="w-full h-full object-cover object-center"
                  alt="Lateef Shaikh Mumbai Web & AI Developer"
                  src="/lateef/lateefshaikh.jpeg"
                />
                <div className="absolute bottom-2 left-2 bg-inverse-surface text-surface-bright px-2.5 py-1 font-label-code text-[10px] tracking-wider uppercase border border-surface-bright">
                  Lateef SHAIKH // PRINCIPAL CRAFTSMAN
                </div>
                <div className="absolute top-2 right-2 bg-primary-container text-on-primary px-2 py-0.5 font-headline-sm text-headline-sm uppercase manga-shadow border border-on-surface">
                  100% UNBOUND
                </div>
              </div>

              {/* Battle-Tested Guarantee Note */}
              <div className="mt-3 p-3 bg-surface-container-low border border-on-surface flex items-start gap-2.5">
                <span className="material-symbols-outlined text-tertiary text-[20px]">military_tech</span>
                <p className="font-body-sm text-body-sm text-on-surface leading-tight">
                  <strong className="font-bold text-on-surface">THE ZERO-DELEGATION CREED:</strong> You communicate directly with the individual writing the code and configuring the AI architecture. No juniors, no middle managers.
                </p>
              </div>
            </div>

            {/* Geographic Operation Card with Map Location Data */}
            <div className="bg-surface-container-high border-4 border-on-surface manga-shadow p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                    MUMBAI HEADQUARTERS
                  </span>
                </div>
                <span className="font-label-code text-label-code text-on-surface-variant font-bold">
                  IST (UTC+5:30)
                </span>
              </div>

              <div
                className="w-full h-32 bg-surface-container-low border-2 border-on-surface relative overflow-hidden screentone-dots flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 via-transparent to-secondary-container/20"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-3">
                  <div className="font-headline-sm text-headline-sm uppercase text-on-surface">
                    Mumbai Global Command
                  </div>
                  <div className="font-label-code text-[11px] text-primary font-bold">
                    LAT 19.0760° N • LONG 72.8777° E
                  </div>
                </div>
                <div className="absolute inset-0 bg-surface/30 mix-blend-multiply"></div>
                <div className="absolute top-2 left-2 bg-surface-container-lowest border border-on-surface px-2 py-0.5 font-label-code text-[10px] font-bold">
                  OPERATING REMOTELY GLOBALLY
                </div>
                <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-inverse-surface text-surface px-2 py-0.5 font-label-code text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  SF, NYC, LONDON, TOKYO ALIGNED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion: 3 Clean Unrolling Scroll Panels */}
      <section className="w-full bg-surface-container-high border-t-4 border-b-4 border-on-surface py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-block px-3 py-1 bg-surface-container-lowest border-2 border-on-surface font-label-code text-label-code font-bold uppercase manga-shadow">
              [RECONNAISSANCE INTEL // FAQ]
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">
              QUESTIONS BEFORE DEPLOYING?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
              Tactical transparency on delivery speeds, pricing models, and architectural recommendations.
            </p>
          </div>

          {/* FAQ Item 1 */}
          <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow overflow-hidden transition-all duration-200">
            <button
              aria-expanded={openFaq === 1}
              className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-surface-container-low transition-colors cursor-pointer"
              onClick={() => toggleFaq(1)}
              type="button"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-primary-container text-on-primary border border-on-surface font-headline-sm text-headline-sm flex items-center justify-center">
                  01
                </span>
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  What is your typical project delivery timeline?
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-on-surface transform transition-transform duration-200 ${
                  openFaq === 1 ? "rotate-180" : ""
                }`}
              >
                expand_circle_down
              </span>
            </button>
            {openFaq === 1 && (
              <div className="px-5 pb-5 pt-1 text-on-surface border-t border-dashed border-outline-variant block">
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Standard website builds launch in <strong className="text-on-surface font-bold">2 to 3 weeks</strong>. Autonomous AI automation pipelines ship within <strong className="text-on-surface font-bold">7 to 14 days</strong>. Custom SaaS full-stack platforms are delivered in structured 4 to 6-week battle sprints with weekly deployable builds.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow overflow-hidden transition-all duration-200">
            <button
              aria-expanded={openFaq === 2}
              className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-surface-container-low transition-colors cursor-pointer"
              onClick={() => toggleFaq(2)}
              type="button"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-secondary text-on-secondary border border-on-surface font-headline-sm text-headline-sm flex items-center justify-center">
                  02
                </span>
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  How do you structure project pricing?
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-on-surface transform transition-transform duration-200 ${
                  openFaq === 2 ? "rotate-180" : ""
                }`}
              >
                expand_circle_down
              </span>
            </button>
            {openFaq === 2 && (
              <div className="px-5 pb-5 pt-1 text-on-surface border-t border-dashed border-outline-variant block">
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Milestone-based fixed pricing with clearly scoped deliverables. <strong className="text-on-surface font-bold">No hidden hourly traps</strong> or ambiguous billing meters. You know the exact total investment, milestone gates, and launch date prior to laying down the first line of code.
                </p>
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow overflow-hidden transition-all duration-200">
            <button
              aria-expanded={openFaq === 3}
              className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-surface-container-low transition-colors cursor-pointer"
              onClick={() => toggleFaq(3)}
              type="button"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-tertiary-container text-on-tertiary border border-on-surface font-headline-sm text-headline-sm flex items-center justify-center">
                  03
                </span>
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface">
                  What tech stack do you recommend for high scale?
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-on-surface transform transition-transform duration-200 ${
                  openFaq === 3 ? "rotate-180" : ""
                }`}
              >
                expand_circle_down
              </span>
            </button>
            {openFaq === 3 && (
              <div className="px-5 pb-5 pt-1 text-on-surface border-t border-dashed border-outline-variant block">
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Next.js (App Router), Tailwind CSS, TypeScript, and modern serverless AI backends (OpenAI API, LangChain, Supabase, Cloudflare Workers). Built for <strong className="text-on-surface font-bold">maximum speed, zero bloat, and generational longevity</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final Manga Banner Callout / Creed */}
      <section className="w-full py-10 px-6 max-w-7xl mx-auto">
        <div className="bg-inverse-surface text-surface-bright border-4 border-on-surface manga-shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 screentone-dots opacity-15 pointer-events-none"></div>
          <div className="relative z-10 space-y-1 text-center md:text-left">
            <div className="font-label-code text-label-code text-primary-fixed uppercase tracking-widest font-bold">
              {"//"} FINAL COMMANDMENT
            </div>
            <h3 className="font-headline-md text-headline-md uppercase text-surface-bright">
              &ldquo;EVERY PROJECT IS PERSONALLY BUILT AND BATTLE-TESTED BY Lateef. ZERO OUTSOURCING.&rdquo;
            </h3>
            <p className="font-speech-bubble-sm text-speech-bubble-sm text-surface-variant">
              Direct partnership. High-velocity turnarounds. Relentless visual perfection.
            </p>
          </div>
          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() => {
                document.getElementById("client-name")?.focus();
                playSFX("click");
              }}
              className="px-6 py-3 bg-secondary-fixed text-on-secondary-fixed border-2 border-surface-bright manga-shadow font-headline-sm text-headline-sm uppercase tracking-wider hover:bg-secondary-fixed-dim hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer inline-block"
            >
              INITIATE DISPATCH NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
