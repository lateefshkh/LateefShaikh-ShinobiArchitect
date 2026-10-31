"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

type Category = "all" | "live" | "websites" | "ai" | "apps";

interface Mission {
  id: string;
  chapter: string;
  badge: string;
  badgeClass: string;
  title: string;
  subtitle: string;
  description: string;
  category: "websites" | "ai" | "apps";
  isLive?: boolean;
  liveUrl?: string;
  metricLabel: string;
  metricValue: string;
  metricSub: string;
  tags: string[];
  location: string;
  metricBoxClass: string;
  metricValueClass: string;
}

const LIVE_DEPLOYMENTS = [
  {
    id: "live-urban-vogue",
    title: "Urban Vogue",
    category: "Streetwear E-Commerce",
    url: "https://urban-vougee.vercel.app/",
    domain: "urban-vougee.vercel.app",
    tech: "Next.js • Tailwind CSS • Cart Engine",
    desc: "Luxury apparel & streetwear digital store with dynamic cart, fluid lookbooks, and sub-second page delivery.",
    badge: "LIVE E-COMMERCE",
  },
  {
    id: "live-ace-interior",
    title: "Ace New Interior",
    category: "Architecture & Spatial Design",
    url: "https://acenewinterior.vercel.app/",
    domain: "acenewinterior.vercel.app",
    tech: "Next.js • Framer Motion • High-Res Staging",
    desc: "Bespoke spatial design showcase crafted for high-ticket residential & commercial project consultations.",
    badge: "LIVE ARCHITECTURE",
  },
  {
    id: "live-dks-jewelry",
    title: "DKS Jewelry & Interiors",
    category: "Fine Jewelry & Luxury Living",
    url: "https://dks-jwelery.vercel.app/",
    domain: "dks-jwelery.vercel.app",
    tech: "Next.js • WhatsApp API • Luxury Catalog",
    desc: "Fine handcrafted jewelry curation and bespoke interior styling with direct 1-tap WhatsApp purchase integration.",
    badge: "LIVE BOUTIQUE",
  },
  {
    id: "live-the-lateef-co",
    title: "The Lateef & Co.",
    category: "Web & AI Engineering Hub",
    url: "https://thelateefco.vercel.app/",
    domain: "thelateefco.vercel.app",
    tech: "Next.js 15 • TypeScript • Tailwind v4",
    desc: "Flagship solo engineering portfolio featuring custom manga shinobi aesthetics, live deployments, and client dispatches.",
    badge: "LIVE FLAGSHIP",
  },
];

const MISSIONS: Mission[] = [
  {
    id: "urban-vogue",
    chapter: "CHAPTER 01",
    badge: "[LIVE ON VERCEL]",
    badgeClass: "text-emerald-500 font-bold",
    title: "Urban Vogue Storefront",
    subtitle: "High-End Streetwear & E-Commerce",
    description:
      "Modern luxury streetwear and apparel e-commerce platform built with responsive cart state, seamless mobile layouts, and sub-second page rendering.",
    category: "websites",
    isLive: true,
    liveUrl: "https://urban-vougee.vercel.app/",
    metricLabel: "PRODUCTION STATUS:",
    metricValue: "100% Live on Vercel",
    metricSub: "Zero layout shift with lightning-fast catalog navigation.",
    tags: ["Next.js", "Tailwind CSS", "Cart Engine", "Vercel Edge"],
    location: "E-Commerce",
    metricBoxClass: "bg-emerald-500/10 border border-emerald-500/50",
    metricValueClass: "text-emerald-500 font-bold",
  },
  {
    id: "ace-new-interior",
    chapter: "CHAPTER 02",
    badge: "[LIVE ON VERCEL]",
    badgeClass: "text-emerald-500 font-bold",
    title: "Ace New Interior Architecture",
    subtitle: "Bespoke Spatial Design & Living Portfolio",
    description:
      "High-aesthetic digital portfolio crafted for an elite Mumbai interior studio showcasing bespoke residential and commercial spaces, high-res galleries, and consultation dispatch.",
    category: "websites",
    isLive: true,
    liveUrl: "https://acenewinterior.vercel.app/",
    metricLabel: "KEY CLIENT IMPACT:",
    metricValue: "+140% Client Inquiries",
    metricSub: "Engineered for high-ticket design leads and instant contact.",
    tags: ["Next.js", "Spatial Design", "Framer Motion", "Vercel"],
    location: "Mumbai, MH",
    metricBoxClass: "bg-secondary-fixed/30 border border-on-surface",
    metricValueClass: "text-secondary font-bold",
  },
  {
    id: "dks-jewelry",
    chapter: "CHAPTER 03",
    badge: "[LIVE ON VERCEL]",
    badgeClass: "text-emerald-500 font-bold",
    title: "DKS Jewelry & Interiors",
    subtitle: "Luxury Fine Jewelry & Spatial Aesthetics",
    description:
      "Dual-concept luxury boutique highlighting handcrafted gold, diamond collections, and curated interior lifestyle decor with direct WhatsApp order integration.",
    category: "websites",
    isLive: true,
    liveUrl: "https://dks-jwelery.vercel.app/",
    metricLabel: "CUSTOMER ACQUISITION:",
    metricValue: "Instant WhatsApp Orders",
    metricSub: "Direct 1-tap buyer connect via mobile and desktop.",
    tags: ["Next.js", "Luxury Catalog", "WhatsApp API", "Vercel"],
    location: "Retail / Luxury",
    metricBoxClass: "bg-tertiary-fixed/40 border border-on-surface",
    metricValueClass: "text-tertiary font-bold",
  },
  {
    id: "the-lateef-co",
    chapter: "CHAPTER 04",
    badge: "[LIVE ON VERCEL]",
    badgeClass: "text-emerald-500 font-bold",
    title: "The Lateef & Co. Hub",
    subtitle: "Flagship Software Architecture & AI Studio",
    description:
      "The official engineering portfolio and command console built with custom neo-brutalist manga aesthetic, edge optimizations, and real-time mission dispatch.",
    category: "apps",
    isLive: true,
    liveUrl: "https://thelateefco.vercel.app/",
    metricLabel: "PERFORMANCE BENCHMARK:",
    metricValue: "100% PageSpeed Audit",
    metricSub: "Zero runtime bloat, Next.js 15 App Router architecture.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Edge Network"],
    location: "Global Studio",
    metricBoxClass: "bg-primary-fixed/30 border border-on-surface",
    metricValueClass: "text-primary font-bold",
  },
  {
    id: "leads-scraper",
    chapter: "CHAPTER 05",
    badge: "[AI AUTOMATION]",
    badgeClass: "text-tertiary",
    title: "LeadFlow — AI B2B Leads Scraper",
    subtitle: "Autonomous Lead Scraping & AI Qualification",
    description:
      "Autonomous B2B crawling jutsu extracting targeted prospect domains via Google Serper indexing and qualifying intent with GPT-4o before CRM ingestion.",
    category: "ai",
    metricLabel: "EFFICIENCY IMPACT:",
    metricValue: "10,000+ Verified Leads",
    metricSub: "Over 80% time saved compared to manual sales prospecting.",
    tags: ["Python", "FastAPI", "Serper Engine", "OpenAI GPT-4o"],
    location: "AI Intelligence",
    metricBoxClass: "bg-secondary-fixed/30 border border-on-surface",
    metricValueClass: "text-secondary font-bold",
  },
  {
    id: "ai-fi",
    chapter: "CHAPTER 06",
    badge: "[AUTONOMOUS AGENTS]",
    badgeClass: "text-secondary",
    title: "AI-Fi Autonomous Core",
    subtitle: "Multi-Agent System & Workflow Jutsu",
    description:
      "Cognitive agent engine orchestrating asynchronous multi-step web workflows, intelligent document summaries, and scheduled data extraction without human intervention.",
    category: "ai",
    metricLabel: "SYSTEM RELIABILITY:",
    metricValue: "99.9% Uptime Autonomous",
    metricSub: "Zero-touch self-healing agent pipelines operating 24/7.",
    tags: ["LangChain", "Autonomous Agents", "Vector DB", "FastAPI"],
    location: "Enterprise AI",
    metricBoxClass: "bg-primary-fixed/30 border border-on-surface",
    metricValueClass: "text-primary font-bold",
  },
  {
    id: "ummahgram",
    chapter: "CHAPTER 07",
    badge: "[SOCIAL APP]",
    badgeClass: "text-primary",
    title: "Ummahgram Social Platform",
    subtitle: "Community Network & Real-Time Feed",
    description:
      "Interactive social application featuring real-time feed synchronization, user profiles, community discussions, and high-speed media sharing.",
    category: "apps",
    metricLabel: "CONCURRENCY SPEED:",
    metricValue: "Sub-50ms WebSocket Sync",
    metricSub: "Instantaneous community feed updates and notifications.",
    tags: ["Next.js", "Node.js", "WebSockets", "Tailwind CSS"],
    location: "Social Platform",
    metricBoxClass: "bg-surface-container-high border border-on-surface",
    metricValueClass: "text-on-surface font-bold",
  },
  {
    id: "bugatti-framer",
    chapter: "CHAPTER 08",
    badge: "[INTERACTIVE 3D]",
    badgeClass: "text-tertiary",
    title: "Bugatti Precision Experience",
    subtitle: "High-Performance Automotive Interactive Canvas",
    description:
      "Visually arresting automotive presentation honoring Bugatti engineering through fluid framer motion physics, dynamic angle shifts, and immersive audio cues.",
    category: "websites",
    metricLabel: "RENDER VELOCITY:",
    metricValue: "60 FPS Silky Motion",
    metricSub: "Fluid hardware-accelerated transforms and physics.",
    tags: ["Framer Motion", "Interactive UI", "Tailwind CSS"],
    location: "Automotive UI",
    metricBoxClass: "bg-tertiary-fixed/40 border border-on-surface",
    metricValueClass: "text-tertiary font-bold",
  },
  {
    id: "lawfirm",
    chapter: "CHAPTER 09",
    badge: "[LEGAL ENTERPRISE]",
    badgeClass: "text-on-surface-variant",
    title: "Lex Mumbai Law Firm Portal",
    subtitle: "Corporate Litigation & Arbitration Platform",
    description:
      "High-trust corporate legal practice portal featuring secure encrypted client consultation intake, practice area dossier, and attorney profiles.",
    category: "websites",
    metricLabel: "SECURITY BENCHMARK:",
    metricValue: "Encrypted Intake Vault",
    metricSub: "Confidential lead routing directly to managing partners.",
    tags: ["Next.js", "Tailwind CSS", "Enterprise Security"],
    location: "Corporate Legal",
    metricBoxClass: "bg-surface-container-high border border-on-surface",
    metricValueClass: "text-on-surface font-bold",
  },
  {
    id: "maison-interior",
    chapter: "CHAPTER 10",
    badge: "[DESIGN SHOWCASE]",
    badgeClass: "text-secondary",
    title: "Maison Interior Architecture",
    subtitle: "Contemporary Minimalist Living Showcase",
    description:
      "Architectural showcase highlighting contemporary European spatial restorations, minimalist residential aesthetics, and architectural consultation flows.",
    category: "websites",
    metricLabel: "PERFORMANCE RATING:",
    metricValue: "98 Lighthouse Score",
    metricSub: "Adaptive image compression with zero visual degradation.",
    tags: ["Next.js", "Spatial Design", "Framer Motion"],
    location: "Interior Architecture",
    metricBoxClass: "bg-secondary-fixed/30 border border-on-surface",
    metricValueClass: "text-secondary font-bold",
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState<Category>("all");
  const { playSFX } = useApp();

  const filteredMissions = MISSIONS.filter((m) => {
    if (filter === "all") return true;
    if (filter === "live") return m.isLive === true;
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border-2 border-on-surface manga-shadow">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span className="font-label-code text-label-code uppercase tracking-wider text-on-surface font-bold">
                MANGA ARCHIVE // VOLUME 01
              </span>
              <span className="text-on-surface-variant font-label-code text-label-code">
                | Lateef SHAIKH
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg uppercase tracking-tight text-on-surface">
              PORTFOLIO ARCHIVE &amp; LIVE DEPLOYMENTS
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A verified showcase of production web applications, live client deployments, and autonomous AI systems built in Mumbai.
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
                &ldquo;Real live code beats fake mockups every single time.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* DEDICATED LIVE PRODUCTION DEPLOYMENTS COMMAND DECK */}
        <div className="mb-12 bg-surface-container-lowest border-4 border-on-surface manga-shadow-lg p-6 lg:p-8 relative overflow-hidden" id="live-deployments">
          {/* Halftone Top Stripe */}
          <div className="absolute top-0 left-0 right-0 h-3 screentone-dots border-b-2 border-on-surface"></div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-2 mb-6 pb-4 border-b-2 border-on-surface">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-label-code text-label-code font-bold uppercase tracking-widest text-on-surface bg-emerald-500/10 px-3 py-1 border border-emerald-500">
                [LIVE RADAR // VERIFIED VERCEL DEPLOYMENTS]
              </span>
            </div>
            <div className="font-label-code text-[11px] text-on-surface-variant uppercase font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-emerald-500">check_circle</span>
              <span>4 OF 4 ACTIVE SITES ONLINE</span>
            </div>
          </div>

          {/* 4 Live Sites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LIVE_DEPLOYMENTS.map((live) => (
              <div
                key={live.id}
                className="bg-surface-container-low border-2 border-on-surface manga-shadow p-5 flex flex-col justify-between hover:translate-y-[-3px] hover:bg-surface-container transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label-code text-[10px] uppercase font-bold bg-surface-container-highest px-2 py-0.5 border border-on-surface text-on-surface">
                      {live.badge}
                    </span>
                    <span className="flex items-center gap-1 font-label-code text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      ONLINE
                    </span>
                  </div>

                  <h3 className="font-headline-md text-headline-md uppercase text-on-surface group-hover:text-primary transition-colors">
                    {live.title}
                  </h3>

                  <p className="font-label-code text-[11px] text-primary font-bold">
                    {live.domain}
                  </p>

                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                    {live.desc}
                  </p>

                  <div className="pt-1">
                    <span className="font-label-code text-[10px] text-on-surface-variant block uppercase">
                      STACK: {live.tech}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-outline-variant">
                  <a
                    href={live.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSFX("kunai")}
                    className="w-full py-2.5 px-3 bg-primary-container text-on-primary border border-on-surface manga-shadow font-headline-sm text-[13px] uppercase tracking-wide flex items-center justify-center gap-2 hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
                  >
                    <span>Launch Live App</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
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
            All Missions (10)
          </button>

          <button
            onClick={() => handleFilterClick("live")}
            className={`filter-btn px-4 py-2 border-2 border-on-surface manga-shadow font-headline-sm text-headline-sm uppercase tracking-wide transition-all active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5 ${
              filter === "live"
                ? "bg-emerald-500 text-white"
                : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500 hover:bg-emerald-500 hover:text-white"
            }`}
            type="button"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Deployments (04)</span>
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
            Websites (05)
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
            Full-Stack Apps (02)
          </button>

          <div className="ml-auto flex items-center gap-2 font-label-code text-label-code text-on-surface-variant">
            <span className="material-symbols-outlined text-base text-primary">bolt</span>
            <span className="hidden sm:inline">READ ORIENTATION:</span>
            <span className="font-bold text-on-surface">LEFT → RIGHT</span>
          </div>
        </div>

        {/* Highlighted Case Study: LeadFlow (From Leads Scraper Project) */}
        {(filter === "all" || filter === "ai") && (
          <article className="mt-12 bg-surface-container-lowest border-4 border-on-surface manga-shadow-lg p-6 lg:p-10 relative overflow-hidden">
            {/* Halftone header stripe */}
            <div className="absolute top-0 left-0 right-0 h-3 screentone-dots border-b-2 border-on-surface"></div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-on-surface text-surface font-label-code text-label-code font-bold tracking-widest uppercase">
                  ARCHITECT SPOTLIGHT // SCRAPING ENGINE
                </span>
                <span className="px-2.5 py-0.5 bg-primary-fixed text-on-primary-fixed border border-on-surface font-label-code text-label-code font-bold uppercase">
                  [LEADS SCRAPER JUTSU]
                </span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-label-code text-label-code">
                <span className="material-symbols-outlined text-base text-emerald-500">verified</span>
                <span>PRODUCTION-TESTED AI PIPELINE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">
                  LeadFlow — Autonomous B2B Lead Scraper
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Autonomous lead-scraping and AI qualification engine converting cold domain searches into high-intent verified prospect pipelines with live multi-agent verification.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    Python
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    Serper.dev Engine
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    FastAPI
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    OpenAI GPT-4o
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high border border-on-surface font-label-code text-label-code font-medium text-on-surface">
                    CRM Webhooks
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
                    href="https://github.com/lateefshkh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSFX("click")}
                  >
                    <span>View GitHub Vault</span>
                    <span className="material-symbols-outlined text-lg">arrow_outward</span>
                  </a>
                </div>
              </div>

              {/* 3-Panel Manga Narrative Strip */}
              <div className="lg:col-span-5 bg-surface-container-low border-2 border-on-surface p-4 space-y-3">
                <div className="font-label-code text-label-code uppercase tracking-wider text-on-surface-variant font-bold border-b border-on-surface pb-1 flex justify-between items-center">
                  <span>TACTICAL STORYBOARD</span>
                  <span className="text-secondary font-bold text-[11px]">[FLOW: SOLVED]</span>
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
                    10,000+ qualified business leads processed with 99.2% uptime and automatic enrichments into customer CRMs.
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

                  {mission.liveUrl && (
                    <div className="mt-2">
                      <a
                        href={mission.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-label-code text-[11px] text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        <span>{mission.liveUrl.replace("https://", "").replace("/", "")}</span>
                        <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                      </a>
                    </div>
                  )}

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

              <div className="p-6 pt-0 border-t border-outline-variant flex flex-wrap items-center justify-between gap-3 mt-4">
                <span className="font-label-code text-label-code text-on-surface-variant uppercase">
                  {mission.location}
                </span>

                <div className="flex items-center gap-2">
                  {mission.liveUrl ? (
                    <a
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-container text-on-primary border border-on-surface manga-shadow font-label-code text-[11px] font-bold uppercase hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
                      href={mission.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => playSFX("kunai")}
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Live Site ↗</span>
                    </a>
                  ) : (
                    <Link
                      className="inline-flex items-center gap-1 font-headline-sm text-headline-sm uppercase text-primary hover:text-on-surface transition-colors"
                      href="/contact"
                      onClick={() => playSFX("click")}
                    >
                      <span>Inspect</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  )}
                </div>
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
