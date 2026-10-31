"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function ServicesPage() {
  const { playSFX } = useApp();
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulatePipeline = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    playSFX("powerup");

    const steps = [1, 2, 3, 4];
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setActiveNode(step);
        playSFX("click");
        if (step === 4) {
          playSFX("dodon");
          setTimeout(() => {
            setIsSimulating(false);
          }, 1200);
        }
      }, idx * 600);
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Marquee / Tactical HUD Ticker */}
      <div className="w-full bg-surface-container-highest px-6 py-2 border-b-2 border-on-surface flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-tertiary text-on-tertiary font-label-code text-label-code font-bold tracking-wider uppercase border border-on-surface">
            <span className="w-2 h-2 rounded-full bg-surface-container-lowest animate-ping"></span>
            S-RANK SLOTS OPEN
          </span>
          <p className="font-label-code text-label-code text-on-surface uppercase tracking-widest hidden sm:inline">
            Lateef SHAIKH // MISSION DEPLOYMENT CODES: [WEB.SYS] &amp; [AI.AUTO]
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-label-code text-label-code text-on-surface-variant hidden md:inline">
            MUMBAI HQ // REMOTE WORLDWIDE
          </span>
          <span className="px-2 py-0.5 bg-surface-container-low border border-on-surface font-label-code text-label-code font-bold">
            Q2 / 2025
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 w-full space-y-16">
        {/* Header Section with Manga Panel Treatment */}
        <div className="relative bg-surface-container-lowest border-4 border-on-surface manga-shadow-lg p-6 lg:p-10 screentone-dots overflow-hidden">
          {/* Halftone Accent Corner */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute top-3 right-4 hidden md:flex items-center gap-2">
            <span className="font-label-code text-label-code text-on-surface-variant">SCROLL REF:</span>
            <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container font-label-code text-label-code font-bold border border-on-surface">
              SPEC_SHEET_V4
            </span>
          </div>
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-on-surface text-on-surface font-label-code text-label-code uppercase tracking-widest manga-shadow">
              <span className="material-symbols-outlined text-[15px] text-primary">military_tech</span>
              [TACTICAL ARSENAL // S-RANK CONTRACTS]
            </div>
            <h1 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight leading-none">
              SERVICES &amp; MISSION CAPABILITIES
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Specialized web engineering and intelligent AI automation built for ambitious businesses ready to outpace competition.
            </p>
            {/* Developer Speech Bubble callout */}
            <div className="inline-flex items-center gap-3 bg-surface-container-low border-2 border-on-surface px-4 py-2 mt-2 manga-shadow relative">
              <span className="material-symbols-outlined text-primary-container text-[20px]">bolt</span>
              <span className="font-speech-bubble-sm text-speech-bubble-sm text-on-surface">
                &ldquo;Zero bloat. Zero amateur templates. Clean code executed at full kinetic power.&rdquo;
              </span>
              <span className="font-label-code text-label-code text-on-surface-variant font-bold uppercase tracking-wider">
                — Lateef
              </span>
            </div>
          </div>
        </div>

        {/* Core Services: 2-Column High-Impact Mission Scrolls */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Mission Scroll A: Web Design & Dev */}
          <div className="flex flex-col bg-surface-container-lowest border-4 border-on-surface manga-shadow-lg transition-transform hover:-translate-y-1 duration-200">
            {/* Panel Header Strip */}
            <div className="px-6 py-4 bg-primary-fixed border-b-2 border-on-surface flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary border border-on-surface"></span>
                <span className="font-label-code text-label-code font-bold uppercase tracking-widest text-on-primary-fixed">
                  SCROLL [A] // FRONTEND ENGINE
                </span>
              </div>
              <span className="px-2 py-0.5 bg-surface-container-lowest border border-on-surface text-on-surface font-label-code text-label-code font-bold">
                SPRINT: 2-3 WEEKS
              </span>
            </div>

            {/* Scroll Body */}
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="inline-block px-2 py-0.5 bg-primary-container text-on-primary font-label-code text-label-code font-bold border border-on-surface uppercase tracking-wide">
                    AFFINITY: SPEED &amp; CONVERSION
                  </span>
                  <h2 className="font-headline-md text-headline-md uppercase text-on-surface">
                    Website Design &amp; Development
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Bespoke, high-velocity digital architectures crafted to hook user attention, elevate brand stature, and turn casual visitors into loyal high-ticket clients.
                </p>
              </div>

              {/* Feature Bullets with Shuriken Motif */}
              <div className="space-y-3 bg-surface-container-low p-5 border-2 border-on-surface">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-primary-container flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">adjust</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    <strong className="font-bold">Next.js &amp; TypeScript Core:</strong> 95+ Core Web Vitals with instantaneous page switching and razor-sharp SEO schemas.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-primary-container flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">adjust</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    <strong className="font-bold">Conversion-Engineered UI:</strong> Editorial typography hierarchy and bespoke layout rhythm tailored for extreme conversion.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-primary-container flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">adjust</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    <strong className="font-bold">Micro-Interactions &amp; Headless CMS:</strong> Smooth scroll cues, tactile feedback, and intuitive client-editable content control.
                  </p>
                </div>
              </div>

              {/* Ideal For & Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t-2 border-outline-variant">
                <div className="space-y-1">
                  <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant block font-bold">
                    IDEAL PROTOCOL FOR:
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">
                    High-growth startups, ambitious founders, boutique design agencies, and category leaders.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant block font-bold">
                    OPERATIONAL SCOPE:
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">
                    Figma-to-Code, headless architecture, analytics integration, and complete technical handover.
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-primary-container border border-on-surface"></span>
                  <span className="font-label-code text-label-code text-on-surface font-bold uppercase">
                    DEPLOYMENT // CODE-01
                  </span>
                </div>
                <Link
                  className="px-4 py-2 bg-surface-container-high border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase text-on-surface hover:bg-primary-container hover:text-on-primary transition-all flex items-center gap-1.5"
                  href="/contact"
                  onClick={() => playSFX("click")}
                >
                  <span>Deploy Build</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Mission Scroll B: AI Automation & Agents */}
          <div className="flex flex-col bg-surface-container-lowest border-4 border-on-surface manga-shadow-lg transition-transform hover:-translate-y-1 duration-200">
            {/* Panel Header Strip */}
            <div className="px-6 py-4 bg-secondary-fixed border-b-2 border-on-surface flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-secondary border border-on-surface"></span>
                <span className="font-label-code text-label-code font-bold uppercase tracking-widest text-on-secondary-fixed">
                  SCROLL [B] // NEURAL CHAKRA CORE
                </span>
              </div>
              <span className="px-2 py-0.5 bg-surface-container-lowest border border-on-surface text-on-surface font-label-code text-label-code font-bold">
                SPRINT: 1-2 WEEKS
              </span>
            </div>

            {/* Scroll Body */}
            <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="inline-block px-2 py-0.5 bg-secondary text-on-secondary font-label-code text-label-code font-bold border border-on-surface uppercase tracking-wide">
                    AFFINITY: PRECISION &amp; AUTONOMY
                  </span>
                  <h2 className="font-headline-md text-headline-md uppercase text-on-surface">
                    AI Automation &amp; Agents
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Tireless autonomous systems that capture inquiries, qualify high-intent prospects, sync your database, and run repetitive business workflows 24/7 without fatigue.
                </p>
              </div>

              {/* Feature Bullets with Shuriken Motif */}
              <div className="space-y-3 bg-surface-container-low p-5 border-2 border-on-surface">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    <strong className="font-bold">24/7 Autonomous WhatsApp &amp; Web Agents:</strong> Instant natural qualification, calendar booking, and conversational support.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    <strong className="font-bold">Automated Lead Qualification Pipelines:</strong> Auto-route incoming leads into HubSpot, Notion, Google Sheets, or custom SQL endpoints.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    <strong className="font-bold">Custom Workflow Scripts &amp; LLM Hooks:</strong> Tailored Zapier/Make/Python orchestrations bridging complex back-office tools seamlessly.
                  </p>
                </div>
              </div>

              {/* Ideal For & Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t-2 border-outline-variant">
                <div className="space-y-1">
                  <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant block font-bold">
                    IDEAL PROTOCOL FOR:
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">
                    Medical clinics, real estate brokers, CA &amp; legal firms, boutique consulting teams.
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant block font-bold">
                    OPERATIONAL SCOPE:
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium">
                    Prompt engineering, webhook integration, API secrets setup, and staff video guide.
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-secondary border border-on-surface"></span>
                  <span className="font-label-code text-label-code text-on-surface font-bold uppercase">
                    DEPLOYMENT // AUTO-02
                  </span>
                </div>
                <Link
                  className="px-4 py-2 bg-surface-container-high border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center gap-1.5"
                  href="/contact"
                  onClick={() => playSFX("click")}
                >
                  <span>Activate Agent</span>
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive AI Automation Visualizer Card */}
        <div className="bg-surface-container-low border-4 border-on-surface manga-shadow-lg p-6 lg:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b-2 border-on-surface pb-4">
            <div>
              <span className="px-2 py-0.5 bg-primary-fixed border border-on-surface font-label-code text-label-code font-bold uppercase text-on-primary-fixed">
                TACTICAL BLUEPRINT // ARCHITECTURE SAMPLE
              </span>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface mt-1">
                HOW Lateef CONNECTS YOUR PIPELINE
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={simulatePipeline}
                disabled={isSimulating}
                className="px-3 py-1.5 bg-primary-container text-on-surface border-2 border-on-surface manga-shadow font-label-code text-[11px] font-bold uppercase hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1 cursor-pointer disabled:opacity-60"
              >
                <span className="material-symbols-outlined text-[16px] animate-spin">
                  {isSimulating ? "sync" : "play_circle"}
                </span>
                <span>{isSimulating ? "FIRING JUTSU..." : "TEST PIPELINE PULSE"}</span>
              </button>
              <div className="hidden sm:flex items-center gap-2">
                <span className="font-label-code text-label-code text-on-surface-variant">NODE STATUS:</span>
                <span className="px-2 py-0.5 bg-secondary-fixed text-on-secondary-fixed border border-on-surface font-label-code text-label-code font-bold">
                  100% OPERATIONAL
                </span>
              </div>
            </div>
          </div>

          {/* Flow Nodes Grid with Directional Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Node 1: Trigger */}
            <div
              className={`border-2 border-on-surface p-4 manga-shadow flex flex-col justify-between space-y-3 transition-all duration-300 ${
                activeNode === 1
                  ? "bg-secondary-fixed ring-4 ring-primary-container scale-105"
                  : "bg-surface-container-lowest"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code bg-secondary-container text-on-secondary-container px-1.5 py-0.5 border border-on-surface font-bold">
                  NODE 01
                </span>
                <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Client Inbound</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Lead reaches out via WhatsApp, web modal, or contact form.
                </p>
              </div>
              <span className="font-label-code text-label-code text-primary font-bold">
                INPUT // INSTANT TRIGGER
              </span>
            </div>

            {/* Node 2: Neural Processing */}
            <div
              className={`border-2 border-on-surface p-4 manga-shadow flex flex-col justify-between space-y-3 transition-all duration-300 ${
                activeNode === 2
                  ? "bg-primary-fixed ring-4 ring-primary-container scale-105"
                  : "bg-surface-container-lowest"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code bg-primary-fixed text-on-primary-fixed px-1.5 py-0.5 border border-on-surface font-bold">
                  NODE 02
                </span>
                <span className="material-symbols-outlined text-primary-container text-[20px]">psychology</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">AI Agent Filter</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Conversational bot qualifies budget, timeline, and urgency.
                </p>
              </div>
              <span className="font-label-code text-label-code text-primary font-bold">
                EXECUTION // ZERO HUMAN LAG
              </span>
            </div>

            {/* Node 3: Database Routing */}
            <div
              className={`border-2 border-on-surface p-4 manga-shadow flex flex-col justify-between space-y-3 transition-all duration-300 ${
                activeNode === 3
                  ? "bg-secondary-container ring-4 ring-primary-container scale-105"
                  : "bg-surface-container-lowest"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code bg-surface-container-highest text-on-surface px-1.5 py-0.5 border border-on-surface font-bold">
                  NODE 03
                </span>
                <span className="material-symbols-outlined text-on-surface text-[20px]">hub</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">CRM &amp; Calendar</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Syncs deal to CRM, books Google Meet slot, drafts invoice.
                </p>
              </div>
              <span className="font-label-code text-label-code text-primary font-bold">
                DISPATCH // REAL-TIME SYNC
              </span>
            </div>

            {/* Node 4: Terminal Result */}
            <div
              className={`bg-primary-container text-on-primary border-4 border-on-surface p-4 manga-shadow flex flex-col justify-between space-y-3 transition-all duration-300 ${
                activeNode === 4 ? "ring-4 ring-tertiary scale-105 animate-bounce" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-label-code text-label-code bg-surface-container-lowest text-on-surface px-1.5 py-0.5 border border-on-surface font-bold">
                  FINAL STATE
                </span>
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm uppercase text-on-primary">Deal Secured</h4>
                <p className="font-body-sm text-body-sm text-on-primary/90 mt-1">
                  Owner receives notification with prepped briefing sheet.
                </p>
              </div>
              <span className="font-label-code text-label-code text-on-primary font-bold uppercase tracking-wider">
                RESULT // HIGH VELOCITY
              </span>
            </div>
          </div>
        </div>

        {/* Mission Process Strip: 4 Comic Action Steps */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-surface-container-highest border border-on-surface font-label-code text-label-code font-bold uppercase">
              TACTICAL TIMELINE
            </span>
            <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
              FOUR-STAGE MISSION PROTOCOL
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 01 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow p-6 flex flex-col justify-between space-y-4 relative">
              <div className="flex items-center justify-between border-b-2 border-outline-variant pb-3">
                <span className="font-headline-lg text-headline-lg text-primary-container leading-none">01</span>
                <span className="font-label-code text-label-code bg-surface-container-high px-2 py-0.5 border border-on-surface font-bold uppercase">
                  DIAGNOSE
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Mission Brief</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We diagnose your existing bottlenecks, assess target conversions, and architect the precise tech blueprint.
                </p>
              </div>
              <div className="pt-2 text-right">
                <span className="font-label-code text-label-code text-on-surface-variant font-bold uppercase tracking-wider">
                  DAY 01 — 03
                </span>
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow p-6 flex flex-col justify-between space-y-4 relative">
              <div className="flex items-center justify-between border-b-2 border-outline-variant pb-3">
                <span className="font-headline-lg text-headline-lg text-secondary leading-none">02</span>
                <span className="font-label-code text-label-code bg-surface-container-high px-2 py-0.5 border border-on-surface font-bold uppercase">
                  PROTOTYPE
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Design Matrix</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Interactive high-fidelity prototypes featuring punchy typography, frictionless user flows, and zero fluff.
                </p>
              </div>
              <div className="pt-2 text-right">
                <span className="font-label-code text-label-code text-on-surface-variant font-bold uppercase tracking-wider">
                  DAY 04 — 08
                </span>
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow p-6 flex flex-col justify-between space-y-4 relative">
              <div className="flex items-center justify-between border-b-2 border-outline-variant pb-3">
                <span className="font-headline-lg text-headline-lg text-primary leading-none">03</span>
                <span className="font-label-code text-label-code bg-surface-container-high px-2 py-0.5 border border-on-surface font-bold uppercase">
                  EXECUTE
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Clean Build</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Clean Next.js architecture, robust API bindings, and battle-tested automated workflows tested under load.
                </p>
              </div>
              <div className="pt-2 text-right">
                <span className="font-label-code text-label-code text-on-surface-variant font-bold uppercase tracking-wider">
                  DAY 09 — 16
                </span>
              </div>
            </div>

            {/* Step 04 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface manga-shadow p-6 flex flex-col justify-between space-y-4 relative">
              <div className="flex items-center justify-between border-b-2 border-outline-variant pb-3">
                <span className="font-headline-lg text-headline-lg text-tertiary leading-none">04</span>
                <span className="font-label-code text-label-code bg-surface-container-high px-2 py-0.5 border border-on-surface font-bold uppercase">
                  DELIVER
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Live Launch</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Rigorous DNS and speed checks, production deployment, and 30 days of active post-launch mission support.
                </p>
              </div>
              <div className="pt-2 text-right">
                <span className="font-label-code text-label-code text-on-surface-variant font-bold uppercase tracking-wider">
                  DAY 17+ LIFTOFF
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Target Industries Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b-2 border-on-surface pb-3">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-surface-container-highest border border-on-surface font-label-code text-label-code font-bold uppercase">
                OPERATIONAL SECTORS
              </span>
              <h3 className="font-headline-md text-headline-md uppercase text-on-surface">
                TARGET SECTOR SPECIALIZATION
              </h3>
            </div>
            <span className="font-label-code text-label-code text-on-surface-variant uppercase">
              PROVEN IN MUMBAI &amp; INTERNATIONAL MARKETS
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Sector 1 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-4 manga-shadow flex flex-col items-center text-center space-y-2 group hover:bg-primary-fixed transition-all cursor-default">
              <span className="material-symbols-outlined text-[32px] text-on-surface group-hover:scale-110 transition-transform">
                apartment
              </span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Real Estate</h4>
              <p className="font-label-code text-[11px] text-on-surface-variant">
                Developers &amp; brokers needing instant WhatsApp lead locks.
              </p>
            </div>

            {/* Sector 2 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-4 manga-shadow flex flex-col items-center text-center space-y-2 group hover:bg-secondary-fixed transition-all cursor-default">
              <span className="material-symbols-outlined text-[32px] text-on-surface group-hover:scale-110 transition-transform">
                stethoscope
              </span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Medical Clinics</h4>
              <p className="font-label-code text-[11px] text-on-surface-variant">
                Surgeons &amp; specialists wanting automated booking intake.
              </p>
            </div>

            {/* Sector 3 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-4 manga-shadow flex flex-col items-center text-center space-y-2 group hover:bg-primary-fixed transition-all cursor-default">
              <span className="material-symbols-outlined text-[32px] text-on-surface group-hover:scale-110 transition-transform">
                architecture
              </span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Architects</h4>
              <p className="font-label-code text-[11px] text-on-surface-variant">
                Design studios demanding ultra-sharp portfolio presence.
              </p>
            </div>

            {/* Sector 4 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-4 manga-shadow flex flex-col items-center text-center space-y-2 group hover:bg-secondary-fixed transition-all cursor-default">
              <span className="material-symbols-outlined text-[32px] text-on-surface group-hover:scale-110 transition-transform">
                shopping_bag
              </span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Boutique D2C</h4>
              <p className="font-label-code text-[11px] text-on-surface-variant">
                High-ticket consumer brands scaling conversion velocity.
              </p>
            </div>

            {/* Sector 5 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-4 manga-shadow flex flex-col items-center text-center space-y-2 group hover:bg-primary-fixed transition-all col-span-2 md:col-span-1 cursor-default">
              <span className="material-symbols-outlined text-[32px] text-on-surface group-hover:scale-110 transition-transform">
                balance
              </span>
              <h4 className="font-headline-sm text-headline-sm uppercase text-on-surface">Law &amp; CA Firms</h4>
              <p className="font-label-code text-[11px] text-on-surface-variant">
                Consulting practices replacing paperwork with automation.
              </p>
            </div>
          </div>
        </div>

        {/* Final High-Impact Shonen Call To Action Panel */}
        <div className="bg-surface-container-lowest border-4 border-on-surface manga-shadow-lg p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background Screentone Pattern Bar */}
          <div className="absolute inset-0 screentone-dots opacity-20 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed border border-on-surface font-label-code text-label-code font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-ping"></span>
              MISSION DISPATCH // READY FOR ACTION
            </div>

            <h2 className="font-display-hero text-headline-lg uppercase text-on-surface tracking-tight leading-tight">
              READY TO ACCELERATE YOUR REVENUE?
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Book a direct mission briefing with Lateef Shaikh. Walk away with an actionable architectural plan within 48 hours.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary border-2 border-on-surface manga-shadow-lg font-headline-md text-headline-md uppercase tracking-wide hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
                href="/contact"
                onClick={() => playSFX("dodon")}
              >
                <span className="material-symbols-outlined text-[24px]">swords</span>
                <span>Discuss Your Mission</span>
              </Link>

              <a
                className="w-full sm:w-auto px-6 py-4 bg-surface-container-high text-on-surface border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wide hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center justify-center gap-2"
                href="https://wa.me/919769212600?text=Hi%20Lateef,%20I'm%20interested%20in%20deploying%20a%20project."
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => playSFX("click")}
              >
                <span className="material-symbols-outlined text-[22px]">send</span>
                <span>WhatsApp Quick Connect</span>
              </a>
            </div>

            <p className="font-label-code text-label-code text-on-surface-variant pt-2">
              RESPONSE GUARANTEE: WITHIN 12 HOURS // NO JUNIORS OR MIDDLEMEN // DIRECT FOUNDER CHAKRA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
