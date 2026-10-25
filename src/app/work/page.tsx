"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

type Category = "all" | "websites" | "ai" | "apps";

interface Mission {
  id: string;
  chapter: string;
  badge: string;
  badgeClass: string;
  title: string;
  subtitle: string;
  description: string;
  category: "websites" | "ai" | "apps";
  metricLabel: string;
  metricValue: string;
  metricSub: string;
  tags: string[];
  location: string;
  metricBoxClass: string;
  metricValueClass: string;
}

const MISSIONS: Mission[] = [
  {
    id: "aura-luxe",
    chapter: "CHAPTER 02",
    badge: "[CLIENT WORK]",
    badgeClass: "text-secondary",
    title: "Aura Luxe Interiors",
    subtitle: "E-Commerce & Virtual Staging",
    description:
      "Bespoke digital showroom for a premier Mumbai interior studio featuring sub-second image rendering, dynamic 3D layouts, and instant consultations.",
    category: "websites",
    metricLabel: "KEY IMPACT METRIC:",
    metricValue: "+140% Mobile Inquiries",
    metricSub: "Observed within the first 30 days post-launch.",
    tags: ["Next.js 14", "Shopify API", "Framer Motion"],
    location: "Mumbai, MH",
    metricBoxClass: "bg-secondary-fixed/30 border border-on-surface",
    metricValueClass: "text-secondary",
  },
  {
    id: "omnichat-ai",
    chapter: "CHAPTER 03",
    badge: "[AI AUTOMATION]",
    badgeClass: "text-tertiary",
    title: "OmniChat AI Clinic",
    subtitle: "Autonomous WhatsApp Concierge",
    description:
      "24/7 intelligent patient intake triage handling appointment scheduling, doctor routing, and diagnostic FAQ resolution directly via Meta API.",
    category: "ai",
    metricLabel: "KEY IMPACT METRIC:",
    metricValue: "82% Autonomous Triage",
    metricSub: "Patient queries solved without front-desk staff.",
    tags: ["LangChain", "WhatsApp Cloud", "Pinecone RAG"],
    location: "Healthcare Bot",
    metricBoxClass: "bg-tertiary-fixed/40 border border-on-surface",
    metricValueClass: "text-tertiary",
  },
  {
    id: "apex-legal",
    chapter: "CHAPTER 04",
    badge: "[LAW & CA FIRMS]",
    badgeClass: "text-on-surface-variant",
    title: "Apex Legal Partners",
    subtitle: "High-Trust Corporate Web Portal",
    description:
      "Immaculate, authoritative web presence with encrypted document upload vaults and corporate arbitration filings for Mumbai attorneys.",
    category: "websites",
    metricLabel: "KEY IMPACT METRIC:",
    metricValue: "100% PageSpeed Audit",
    metricSub: "Flawless accessibility and zero layout shifts.",
    tags: ["Next.js 14", "Tailwind CSS", "Sanity CMS"],
    location: "B2B Legal",
    metricBoxClass: "bg-surface-container-high border border-on-surface",
    metricValueClass: "text-on-surface",
  },
  {
    id: "novastream-saas",
    chapter: "CHAPTER 05",
    badge: "[SAAS PLATFORM]",
    badgeClass: "text-primary",
    title: "NovaStream Media Hub",
    subtitle: "Full-Stack Creator CMS & Billing",
    description:
      "Multi-tenant video asset transcoding and tier subscription portal with Stripe webhooks and role-based shinobi team workspaces.",
    category: "apps",
    metricLabel: "KEY IMPACT METRIC:",
    metricValue: "4.8x Upload Throughput",
    metricSub: "Direct chunked upload pipelines to AWS S3 & Cloudflare.",
    tags: ["Next.js 15", "PostgreSQL", "Stripe", "Prisma"],
    location: "Global SaaS",
    metricBoxClass: "bg-primary-fixed/30 border border-on-surface",
    metricValueClass: "text-primary",
  },
  {
    id: "pulsesync-ai",
    chapter: "CHAPTER 06",
    badge: "[AUTONOMOUS AGENTS]",
    badgeClass: "text-secondary",
    title: "PulseSync Cold Outreach",
    subtitle: "Multi-Agent Prospecting Jutsu",
    description:
      "Self-orchestrated crawling nodes searching LinkedIn profiles, scoring company fits, and crafting hyper-personalized email drafts directly to CRM.",
    category: "ai",
    metricLabel: "KEY IMPACT METRIC:",
    metricValue: "3,800+ Hours Saved",
    metricSub: "Over 6 months across 4 enterprise business units.",
    tags: ["FastAPI", "OpenAI GPT-4o", "Make.com", "HubSpot"],
    location: "Enterprise AI",
    metricBoxClass: "bg-secondary-fixed/30 border border-on-surface",
    metricValueClass: "text-secondary",
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState<Category>("all");
  const { playSFX } = useApp();

  const filteredMissions = MISSIONS.filter((m) => {
    if (filter === "all") return true;
    return m.category === filter;
  });

  const handleFilterClick = (cat: Category) => {
    setFilter(cat);
    playSFX("click");
  };

  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-6 py-10 md:py-16 max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border-2 border-on-surface manga-shadow">
              <span className="w-2.5 h-2.5 bg-tertiary rounded-full animate-ping"></span>
              <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface font-bold">
                MANGA ARCHIVE // VOLUME 01
              </span>
              <span className="text-on-surface-variant font-label-code text-label-code">
                | Lateef SHAIKH
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">
              FEATURED CHAPTERS &amp; CASE STUDIES
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A chronicle of high-impact web builds, autonomous AI systems, and relentless performance engineering forged in Mumbai.
            </p>
          </div>

          <div className="relative bg-surface-container-low p-4 border-2 border-on-surface manga-shadow hidden lg:flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-container border-2 border-on-surface flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-2xl">auto_stories</span>
            </div>
            <div>
              <div className="font-label-code text-label-code uppercase text-on-surface font-bold">
                ARC STATUS: ACTIVE
              </div>
              <div className="font-speech-bubble-sm text-speech-bubble-sm text-primary">
                &ldquo;No shortcuts in code or chakra!&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Ribbon */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 pb-8 border-b-2 border-on-surface">
          <button
            onClick={() => handleFilterClick("all")}
            className={`filter-btn px-4 py-2 border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wide transition-all active:translate-x-0.5 active:translate-y-0.5 ${
              filter === "all"
                ? "bg-primary-container text-on-primary"
                : "bg-surface-container-lowest text-on-surface hover:bg-secondary-container hover:text-on-secondary-container"
            }`}
            type="button"
          >
            All Missions (06)
          </button>

          <button
            onClick={() => handleFilterClick("websites")}
            className={`filter-btn px-4 py-2 border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wide transition-all active:translate-x-0.5 active:translate-y-0.5 ${
              filter === "websites"
                ? "bg-primary-container text-on-primary"
                : "bg-surface-container-lowest text-on-surface hover:bg-secondary-container hover:text-on-secondary-container"
            }`}
            type="button"
          >
            Websites (03)
          </button>

          <button
            onClick={() => handleFilterClick("ai")}
            className={`filter-btn px-4 py-2 border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wide transition-all active:translate-x-0.5 active:translate-y-0.5 ${
              filter === "ai"
                ? "bg-primary-container text-on-primary"
                : "bg-surface-container-lowest text-on-surface hover:bg-secondary-container hover:text-on-secondary-container"
            }`}
            type="button"
          >
            AI Automation (02)
          </button>

          <button
            onClick={() => handleFilterClick("apps")}
            className={`filter-btn px-4 py-2 border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wide transition-all active:translate-x-0.5 active:translate-y-0.5 ${
              filter === "apps"
                ? "bg-primary-container text-on-primary"
                : "bg-surface-container-lowest text-on-surface hover:bg-secondary-container hover:text-on-secondary-container"
            }`}
            type="button"
          >
            Full-Stack Apps (01)
          </button>

          <div className="ml-auto flex items-center gap-2 font-label-code text-label-code text-on-surface-variant">
            <span className="material-symbols-outlined text-base text-primary">bolt</span>
            <span className="hidden sm:inline">READ ORIENTATION:</span>
            <span className="font-bold text-on-surface">LEFT → RIGHT</span>
          </div>
        </div>

        {/* Main Project Grid: Chapter 01 (Apex Case Study) */}
        {(filter === "all" || filter === "ai" || filter === "websites") && (
          <article className="mt-12 bg-surface-container-lowest border-4 border-on-surface manga-shadow-lg p-6 lg:p-10 relative overflow-hidden">
            {/* Halftone header stripe */}
            <div className="absolute top-0 left-0 right-0 h-3 screentone-dots border-b-2 border-on-surface"></div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-on-surface text-surface font-label-code text-label-code font-bold tracking-widest uppercase">
                  CHAPTER 01 // APEX MISSION
                </span>
                <span className="px-2.5 py-0.5 bg-primary-fixed text-on-primary-fixed border border-on-surface font-label-code text-label-code font-bold uppercase">
                  [PRODUCTION SHIP]
                </span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-code text-label-code">
                <span className="material-symbols-outlined text-base text-emerald-500">verified</span>
                <span>100% SOLVED ARCHITECTURE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">
                  LeadFlow — AI B2B Lead Intelligence
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Autonomous lead-scraping and AI qualification engine converting cold domain searches into high-intent verified prospect pipelines with live multi-agent verification.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    Next.js 14 App Router
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    Serper.dev Engine
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    Appwrite Cloud
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    OpenAI GPT-4o
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    Tailwind CSS
                  </span>
                </div>

                {/* Speech Bubble insight */}
                <div className="relative bg-surface-container-low border-2 border-on-surface p-4 mt-6 max-w-xl">
                  <div className="absolute -top-3 left-6 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-on-surface"></div>
                  <div className="absolute -top-2 left-6 w-0 h-0 border-x-8 border-x-transparent border-b-8 border-b-surface-container-low"></div>
                  <p className="font-speech-bubble-lg text-speech-bubble-lg text-on-surface">
                    &ldquo;We slashed repetitive data scraping down from 25 hours weekly to a headless cron execution firing at 04:00 AM every day.&rdquo;
                  </p>
                  <div className="mt-2 font-label-code text-label-code text-primary font-bold uppercase">
                    — Lateef Shaikh (Lead Architect)
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    className="px-5 py-3 bg-primary-container text-on-primary border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wide hover:translate-x-0.5 hover:translate-y-0.5 transition-transform flex items-center gap-2"
                    href="/contact"
                    onClick={() => playSFX("kunai")}
                  >
                    <span>Commission Similar System</span>
                    <span className="material-symbols-outlined text-lg">bolt</span>
                  </Link>
                  <a
                    className="px-5 py-3 bg-surface border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-all flex items-center gap-2"
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSFX("click")}
                  >
                    <span>View Architecture Blueprint</span>
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* 3-Panel Manga Narrative Strip */}
              <div className="lg:col-span-5 bg-surface-container-low border-2 border-on-surface p-4 space-y-3">
                <div className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant font-bold border-b border-on-surface pb-1 flex justify-between items-center">
                  <span>TACTICAL STORYBOARD</span>
                  <span className="text-tertiary">SFX: *CLICK-CLICK*</span>
                </div>

                {/* Panel 1 */}
                <div className="bg-surface-container-lowest border-2 border-on-surface p-3 relative group hover:bg-surface transition-colors">
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-surface-container-highest border border-on-surface font-label-code text-label-code font-bold">
                    PANEL 01
                  </span>
                  <div className="text-tertiary font-headline-sm text-headline-sm uppercase">THE OBSTACLE</div>
                  <p className="font-body-sm text-body-sm text-on-surface mt-1">
                    Manual prospecting was devouring 25+ human hours weekly per sales specialist with high bounce rates.
                  </p>
                </div>

                {/* Panel 2 */}
                <div className="bg-surface-container-lowest border-2 border-on-surface p-3 relative group hover:bg-surface transition-colors">
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-secondary-fixed text-on-secondary-fixed border border-on-surface font-label-code text-label-code font-bold">
                    PANEL 02
                  </span>
                  <div className="text-secondary font-headline-sm text-headline-sm uppercase">THE JUTSU (SOLUTION)</div>
                  <p className="font-body-sm text-body-sm text-on-surface mt-1">
                    Orchestrated Serper.dev Google indexing paired with asynchronous GPT-4o qualification routines on serverless cron hooks.
                  </p>
                </div>

                {/* Panel 3 */}
                <div className="bg-surface-container-lowest border-2 border-on-surface p-3 relative group hover:bg-surface transition-colors">
                  <span className="absolute top-2 right-2 px-1.5 py-0.5 bg-primary-fixed text-on-primary-fixed border border-on-surface font-label-code text-label-code font-bold">
                    PANEL 03
                  </span>
                  <div className="text-primary font-headline-sm text-headline-sm uppercase">THE TRIUMPH</div>
                  <p className="font-body-sm text-body-sm text-on-surface mt-1 font-bold">
                    12,400+ qualified business leads processed with 99.2% uptime and automatic enrichments into customer CRMs.
                  </p>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Multi-Column Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredMissions.map((mission) => (
            <article
              key={mission.id}
              className="mission-card bg-surface-container-lowest border-2 border-on-surface manga-shadow flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-200"
            >
              <div>
                <div className="screentone-dots h-4 border-b-2 border-on-surface"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-code text-label-code font-bold uppercase tracking-wider text-on-surface bg-surface-container-high px-2 py-0.5 border border-on-surface">
                      {mission.chapter}
                    </span>
                    <span className={`font-label-code text-label-code font-bold uppercase ${mission.badgeClass}`}>
                      {mission.badge}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface leading-snug">
                    {mission.title}
                  </h3>
                  <p className="font-label-code text-label-code text-primary font-bold mt-1">
                    {mission.subtitle}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                    {mission.description}
                  </p>

                  <div className={`my-5 p-3 ${mission.metricBoxClass}`}>
                    <div className="font-label-code text-label-code uppercase text-on-surface-variant font-bold">
                      {mission.metricLabel}
                    </div>
                    <div className={`font-headline-sm text-headline-sm uppercase mt-0.5 ${mission.metricValueClass}`}>
                      {mission.metricValue}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface">
                      {mission.metricSub}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {mission.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-on-surface font-label-code text-label-code px-2 py-0.5 bg-surface-container border border-outline"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-outline-variant flex items-center justify-between mt-4">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">
                  {mission.location}
                </span>
                <Link
                  className="inline-flex items-center gap-1 font-headline-sm text-headline-sm uppercase text-primary hover:text-on-surface transition-colors"
                  href="/contact"
                  onClick={() => playSFX("click")}
                >
                  <span>Inspect</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Architectural Workflow / Combat Breakdown */}
        <section className="mt-16 bg-surface-container-low border-4 border-on-surface p-6 lg:p-10 manga-shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-on-surface pb-4 mb-8">
            <div>
              <span className="font-label-code text-label-code uppercase text-primary font-bold">
                SYSTEMATIC METHODOLOGY
              </span>
              <h2 className="font-headline-md text-headline-md uppercase text-on-surface">
                HOW CHAPTERS GET WRITTEN &amp; SHIPPED
              </h2>
            </div>
            <div className="font-label-code text-label-code text-on-surface-variant">
              ESTIMATED TIME TO DEPLOY: <strong className="text-on-surface">7 TO 21 DAYS</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Stage 1 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-5 relative">
              <div className="font-headline-md text-headline-md text-outline-variant">01</div>
              <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                DISCOVERY SCROLL
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Deconstructing exact bottlenecks, tech boundaries, and high-value conversion pathways.
              </p>
              <div className="mt-4 font-label-code text-label-code text-secondary font-bold">
                OUTPUT: Architecture Doc
              </div>
            </div>

            {/* Stage 2 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-5 relative">
              <div className="font-headline-md text-headline-md text-secondary">02</div>
              <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                INK &amp; WIREFRAME
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Rapid prototyping using atomic neo-brutalist grids, clean typography, and motion pacing.
              </p>
              <div className="mt-4 font-label-code text-label-code text-secondary font-bold">
                OUTPUT: Interactive Canvas
              </div>
            </div>

            {/* Stage 3 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-5 relative">
              <div className="font-headline-md text-headline-md text-primary-container">03</div>
              <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                CHAKRA SYNTHESIS
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Production coding in Next.js, LangChain pipelines, API bridges, and edge database storage.
              </p>
              <div className="mt-4 font-label-code text-label-code text-primary font-bold">
                OUTPUT: Hardened Codebase
              </div>
            </div>

            {/* Stage 4 */}
            <div className="bg-surface-container-lowest border-2 border-on-surface p-5 relative">
              <div className="font-headline-md text-headline-md text-tertiary">04</div>
              <div className="font-headline-sm text-headline-sm uppercase text-on-surface mt-1">
                SHIP &amp; UNLEASH
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                CDN provisioning, Vercel edge deployment, security validation, and client training.
              </p>
              <div className="mt-4 font-label-code text-label-code text-tertiary font-bold">
                OUTPUT: Live Domain
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Secret Easter Egg Chapter 99 Banner */}
        <div className="mt-16 bg-surface-container-highest border-4 border-dashed border-on-surface p-8 lg:p-12 relative overflow-hidden text-center">
          <div className="screentone-dots absolute inset-0 opacity-40"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-block px-3 py-1 bg-tertiary text-on-tertiary font-label-code text-label-code uppercase font-bold tracking-widest manga-shadow">
              CLASSIFIED // UNWRITTEN MISSION
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">
              CHAPTER 99: YOUR PRODUCT HERE
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Have an impossible idea, a cumbersome manual pipeline, or an ambitious digital vision? Let&rsquo;s ink your next breakthrough together.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary border-2 border-on-surface manga-shadow-lg font-headline-sm text-headline-sm uppercase tracking-wider hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                href="/contact"
                onClick={() => playSFX("dodon")}
              >
                <span>Commission a New Chapter</span>
                <span className="material-symbols-outlined text-xl">bolt</span>
              </Link>
              <Link
                className="w-full sm:w-auto px-6 py-4 bg-surface-container-lowest text-on-surface border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wide hover:bg-secondary-container hover:text-on-secondary-container transition-all"
                href="/contact"
                onClick={() => playSFX("click")}
              >
                Book 20-Min Jutsu Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
