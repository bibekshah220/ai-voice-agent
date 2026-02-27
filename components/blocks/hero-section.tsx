"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [50, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[150vh] bg-[#fdfdfd] flex flex-col items-center pt-24 perspective-[2000px] overflow-hidden"
        >
            {/* Background patterns */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>

            {/* Subtle radial gradients for the background to match reference */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 z-0 m-auto h-[400px] w-[600px] rounded-full bg-indigo-50/50 opacity-100 blur-[80px]"></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-sm font-medium text-indigo-500 mb-6 block tracking-tight">
                        Welcome to the future
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-[-0.03em] text-black"
                >
                    Welcome to the era of <span className="text-[#595cf4]">AI Agents</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-[17px] text-[#4b5563] max-w-[650px] mx-auto leading-relaxed font-medium"
                >
                    AI Agents are revolutionizing how we approach complex tasks and decision-making<br className="hidden md:block" />
                    processes, next evolution is here.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center"
                >
                    <Button size="lg" className="h-[46px] px-8 text-[15px] font-medium rounded-md bg-[#595cf4] hover:bg-[#4f52de] text-white shadow-sm transition-colors border-0">
                        Apply Now
                    </Button>
                    <Button variant="outline" size="lg" className="h-[46px] px-8 text-[15px] font-medium rounded-md border-[#e5e7eb] bg-[#fafafa] hover:bg-[#f3f4f6] text-[#030712] transition-colors shadow-sm">
                        Explore Academics
                    </Button>
                </motion.div>
            </div>

            {/* 3D Dashboard Kanban Mockup Container */}
            <div
                className="relative z-10 w-full max-w-[1300px] mx-auto mt-20 px-4 md:px-8 pointer-events-none"
                style={{ perspective: "1200px" }}
            >
                <motion.div
                    style={{
                        scale,
                        rotateX,
                        y,
                        opacity,
                        transformStyle: "preserve-3d",
                        transformOrigin: "top center"
                    }}
                    className="w-full rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-[2px] overflow-hidden"
                >
                    <div className="w-full h-[700px] rounded-[14px] overflow-hidden relative bg-white flex flex-col text-[#111827]">

                        {/* Application Header */}
                        <div className="w-full h-11 border-b border-[#e5e7eb] flex items-center justify-between px-3 shrink-0">
                            <div className="flex gap-2.5 items-center">
                                <div className="flex gap-1.5 ml-1">
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#fca5a5]"></div>
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#fde047]"></div>
                                    <div className="w-[11px] h-[11px] rounded-full bg-[#86efac]"></div>
                                </div>
                            </div>

                            {/* Search / Command Bar */}
                            <div className="flex-1 flex justify-center max-w-[500px]">
                                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#f3f4f6] w-[400px] border border-[#e5e7eb] text-[12px] text-[#9ca3af] shrink-0 font-medium">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                    Aceternity Core &gt; All issues
                                </div>
                            </div>

                            <div className="flex gap-2 items-center text-[#9ca3af]">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                            </div>
                        </div>

                        <div className="flex flex-1 overflow-hidden">
                            {/* Sidebar */}
                            <div className="w-[240px] border-r border-[#e5e7eb] flex flex-col bg-[#fafafa] shrink-0 pb-4">
                                <div className="p-3 flex items-center justify-between text-[13px] font-semibold">
                                    <div className="flex items-center gap-2">
                                        <div className="w-5 h-5 bg-black rounded shrink-0 flex items-center justify-center">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </div>
                                        Aceternity
                                    </div>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9ca3af]"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </div>

                                <div className="flex flex-col px-2 gap-0.5 mt-2">
                                    <div className="flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] text-[#4b5563] hover:bg-[#f3f4f6]">
                                        <div className="flex items-center gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><path d="M19 16v6" /><path d="M16 19h6" /></svg>
                                            Inbox
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] text-[#4b5563] hover:bg-[#f3f4f6]">
                                        <div className="flex items-center gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                            My issues
                                        </div>
                                        <span className="text-[11px] text-[#9ca3af]">30</span>
                                    </div>
                                </div>

                                <div className="mt-4 px-4 text-[11px] font-medium text-[#9ca3af]">Workspace</div>
                                <div className="flex flex-col px-2 gap-0.5 mt-1">
                                    <div className="flex items-center px-2 py-1.5 rounded-md text-[13px] text-[#4b5563] hover:bg-[#f3f4f6] gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg> Projects
                                    </div>
                                    <div className="flex items-center px-2 py-1.5 rounded-md text-[13px] text-[#4b5563] hover:bg-[#f3f4f6] gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg> Views
                                    </div>
                                    <div className="flex items-center px-2 py-1.5 rounded-md text-[13px] text-[#4b5563] hover:bg-[#f3f4f6] gap-2">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg> More
                                    </div>
                                </div>

                                <div className="mt-4 px-4 text-[11px] font-medium text-[#9ca3af] flex justify-between items-center">
                                    Your teams
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                </div>
                                <div className="flex flex-col px-2 gap-0.5 mt-1">
                                    <div className="flex items-center justify-between px-2 py-1.5 rounded-md text-[13px] font-medium text-[#111827] bg-[#f3f4f6]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded bg-green-500/20 flex items-center justify-center border border-green-500/30 text-green-500 text-[8px] font-bold">A</div>
                                            Aceternity Core
                                        </div>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9ca3af]"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                    <div className="pl-6 flex flex-col gap-0.5 mt-0.5">
                                        <div className="flex items-center px-2 py-1.5 rounded-md text-[13px] font-medium text-[#111827] bg-[#f3f4f6] gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9ca3af]"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg> Issues
                                        </div>
                                        <div className="flex items-center px-2 py-1.5 rounded-md text-[13px] text-[#4b5563] hover:bg-[#f3f4f6] gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9ca3af]"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg> Projects
                                        </div>
                                        <div className="flex items-center px-2 py-1.5 rounded-md text-[13px] text-[#4b5563] hover:bg-[#f3f4f6] gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9ca3af]"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg> Views
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between px-2 py-1.5 mt-1 rounded-md text-[13px] font-medium text-[#4b5563]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-500 text-[8px] font-bold">M</div>
                                            Manu's personal works...
                                        </div>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9ca3af] -rotate-90"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1 flex flex-col bg-white">
                                {/* View Header */}
                                <div className="px-6 py-4 flex items-center justify-between border-b border-[#e5e7eb] shrink-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-md bg-[#f3f4f6] flex items-center justify-center border border-[#e5e7eb]">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                                        </div>
                                        <h2 className="text-[16px] font-semibold text-[#111827]">Aceternity Core</h2>
                                        <div className="text-[13px] text-[#6b7280] font-medium px-2 py-1 rounded bg-[#f3f4f6]">All issues</div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="text-[13px] font-medium text-[#4b5563] flex items-center gap-1.5 border border-[#e5e7eb] rounded-md px-2 py-1 hover:bg-[#f3f4f6] cursor-pointer">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                            Display
                                        </div>
                                    </div>
                                </div>

                                {/* Filter Bar */}
                                <div className="px-6 py-2 flex items-center gap-3 text-[13px] text-[#6b7280] font-medium border-b border-[#e5e7eb]">
                                    <div className="flex items-center gap-1.5 hover:text-[#111827] cursor-pointer">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                                        Filter
                                    </div>
                                </div>

                                {/* Kanban Board Area */}
                                <div className="flex-1 overflow-x-auto p-6 flex gap-6">

                                    {/* Column: Backlog */}
                                    <div className="flex flex-col w-[280px] shrink-0">
                                        <div className="flex items-center justify-between mb-3 text-[13px] font-medium text-[#4b5563]">
                                            <div className="flex items-center gap-2">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
                                                Backlog <span className="text-[#9ca3af]">33</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-[#9ca3af]">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <KanbanCard id="ACE-179" title="Acebuilder v2" tag="Document" tagColor="red" avatar="bg-red-500" />
                                            <KanbanCard id="ACE-148" title="Easiest way to get clients (READ DESCRIPTION)" tag="Wisdom" tagColor="green" avatar="bg-blue-500" />
                                            <KanbanCard id="ACE-213" title="Change pricing for aceternity ui -- free / pro / custom. Keep bigger pricings on..." avatar="bg-yellow-500" />
                                            <KanbanCard id="ACE-208" title="Aceternity UI Component" tags={[{ label: "Task", color: "blue" }, { label: "UI", color: "purple" }]} avatar="bg-indigo-500" />
                                            <KanbanCard id="ACE-120" title="Reels recording" tags={[{ label: "Task - Content", color: "orange" }]} avatar="bg-gray-500" />
                                            <KanbanCard id="ACE-232" title="Revamp algochurn" avatar="bg-green-500" />
                                        </div>
                                    </div>

                                    {/* Column: Todo */}
                                    <div className="flex flex-col w-[280px] shrink-0">
                                        <div className="flex items-center justify-between mb-3 text-[13px] font-medium text-[#4b5563]">
                                            <div className="flex items-center gap-2">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>
                                                Todo <span className="text-[#9ca3af]">4</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-[#9ca3af]">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <KanbanCard id="ACE-228" title="Optimize for chatgpt" tags={[{ label: "Improvement", color: "blue" }]} avatar="bg-yellow-400" />
                                            <KanbanCard id="ACE-199" title="Youtube Recording" tags={[{ label: "Task - Content", color: "purple" }]} avatar="bg-blue-400" />
                                            <KanbanCard id="ACE-235" title="Start Suri Electricals" avatar="bg-rose-500" />
                                            <KanbanCard id="ACE-225" title="CLIENTS: Private Equity Firms, Law Firms, Venture Capitalists, Real Estate." tags={[{ label: "Long term", color: "yellow" }, { label: "Wisdom", color: "green" }]} avatar="bg-indigo-400" />
                                        </div>
                                    </div>

                                    {/* Column: In Progress */}
                                    <div className="flex flex-col w-[280px] shrink-0">
                                        <div className="flex items-center justify-between mb-3 text-[13px] font-medium text-[#4b5563]">
                                            <div className="flex items-center gap-2">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                                In Progress <span className="text-[#9ca3af]">5</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-[#9ca3af]">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <KanbanCard id="ACE-243" title="List of component blocks for Aceternity UI Pro" avatar="bg-green-600" alert={true} />
                                            <KanbanCard id="ACE-250" title="Add 4 new components everyday to Pro Aceternity." avatar="bg-teal-500" />
                                            <KanbanCard id="ACE-249" title="Acebuilder launch checklist" avatar="bg-purple-500" />
                                            <KanbanCard id="ACE-245" title="Add description to all the components in Aceternity Pro" avatar="bg-orange-500" />
                                            <KanbanCard id="ACE-244" title="Add purchase stripe links directly on the website" avatar="bg-blue-600" />
                                        </div>
                                    </div>

                                    {/* Hidden Columns Panel */}
                                    <div className="flex flex-col w-[220px] shrink-0 ml-4 pt-1">
                                        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#000] mb-3">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="m9 18 6-6-6-6" /></svg>
                                            Hidden columns
                                        </div>

                                        <div className="flex flex-col gap-1 text-[13px] font-medium text-[#4b5563]">
                                            <div className="flex items-center justify-between py-1.5 px-2 hover:bg-[#f3f4f6] rounded-md">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-3.5 h-3.5 rounded-full bg-[#595cf4] text-white flex items-center justify-center">
                                                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                    </div>
                                                    Done
                                                </div>
                                                <span className="text-[#9ca3af]">133</span>
                                            </div>

                                            <div className="flex items-center justify-between py-1.5 px-2 hover:bg-[#f3f4f6] rounded-md">
                                                <div className="flex items-center gap-2">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                                                    Canceled
                                                </div>
                                                <span className="text-[#9ca3af]">8</span>
                                            </div>

                                            <div className="flex items-center justify-between py-1.5 px-2 hover:bg-[#f3f4f6] rounded-md">
                                                <div className="flex items-center gap-2">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                                    Duplicate
                                                </div>
                                                <span className="text-[#9ca3af]">0</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Helper components for the Kanban Mockup
function KanbanCard({ id, title, tag, tagColor, tags, avatar, alert }: any) {
    const getTagColor = (color: string) => {
        switch (color) {
            case 'red': return 'bg-red-100 text-red-700 border-red-200';
            case 'green': return 'bg-green-100 text-green-700 border-green-200';
            case 'blue': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'purple': return 'bg-purple-100 text-purple-700 border-purple-200';
            case 'yellow': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'orange': return 'bg-orange-100 text-orange-800 border-orange-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="bg-white border border-[#e5e7eb] rounded-lg p-3 shadow-sm flex flex-col gap-2 hover:shadow-md transition-shadow cursor-default">
            <div className="flex justify-between items-start">
                <div className="text-[11px] font-medium text-[#9ca3af]">{id}</div>
                <div className={`w-5 h-5 rounded-full ${avatar} border border-white shrink-0 shadow-sm overflow-hidden flex items-center justify-center text-[10px] text-white font-bold`}>
                    M
                </div>
            </div>
            <div className="text-[13px] font-medium text-[#111827] leading-tight">
                {title}
            </div>
            <div className="flex items-center gap-2 pt-1 mt-auto">
                {alert && (
                    <div className="w-4 h-4 rounded bg-red-100 flex items-center justify-center text-[10px] text-red-500 font-bold border border-red-200">!</div>
                )}
                <div className="flex items-center gap-1.5 flex-wrap">
                    {tag && (
                        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${getTagColor(tagColor)}`}>
                            <span className="mr-1 inline-block w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
                            {tag}
                        </span>
                    )}
                    {tags && tags.map((t: any, i: number) => (
                        <span key={i} className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${getTagColor(t.color)}`}>
                            <span className="mr-1 inline-block w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
                            {t.label}
                        </span>
                    ))}
                    {!tag && !tags && (
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border bg-gray-50 text-gray-400 border-gray-200 border-dashed">
                            ...
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
