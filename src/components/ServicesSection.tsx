"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
	{
		title: "Containerized Cargo",
		description:
			"We cater 10 footer, 20 footer, 40 footer containers for all types of goods or general cargo.",
		image: "/service/1.jpg",
		alt: "Stacked shipping containers",
		modes: [
			{ label: "Pier to Pier", pill: "Pier", desc: "Pickup & drop-off at port terminals." },
			{ label: "Yard to Yard", pill: "Yard", desc: "From our yard / warehouse to consignee yard." },
			{ label: "Door to Door", pill: "Door", desc: "Full origin pickup to final delivery." },
		],
	},
	{
		title: "Flat Rack Container",
		description: "We cater oversized or heavy cargo from one place to another.",
		image: "/service/2.jpeg",
		alt: "Flat rack container with oversized cargo",
	},
	{
		title: "LCL (Less than Container Load)",
		description: "We do consolidation for LCL goods.",
		image: "/service/3.jpg",
		alt: "Mixed cartons prepared for consolidation",
	},
	{
		title: "Breakbulk Cargo",
		description:
			"We cater heavy equipment or any breakbulk cargos that need to be shipped from one place to another.",
		image: "/service/4.jpg",
		alt: "Heavy equipment loaded as breakbulk cargo",
	},
];

export default function ServicesSection() {
	// Track which mode tooltip is open per service (by service title)
	const [openMode, setOpenMode] = useState<{ service?: string; index?: number }>({});
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (!containerRef.current) return;
			if (!containerRef.current.contains(e.target as Node)) {
				setOpenMode({});
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const toggleMode = (service: string, index: number) => {
		setOpenMode((prev) =>
			prev.service === service && prev.index === index ? {} : { service, index }
		);
	};

	return (
		<section className="py-16 px-4 bg-gray-50" id="services" ref={containerRef}>
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
					Our Main Services
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((s) => (
						<div
							key={s.title}
							className="group bg-white rounded-xl shadow hover:shadow-xl transition border border-gray-100 relative"
						>
							<div className="relative h-40 sm:h-44 rounded-t-xl">
								<div className="absolute inset-0 rounded-t-xl overflow-hidden">
									<Image
										src={s.image}
										alt={s.alt}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
								</div>
								{/* Modes pills (accessible & animated) */}
								{s.modes && (
									<div className="absolute bottom-2 left-0 right-0 flex flex-col items-center gap-1 px-3 z-40">
										<span className="text-[10px] tracking-wide uppercase bg-black/40 backdrop-blur rounded px-2 py-0.5 text-white/80 border border-white/10">
											Modes
										</span>
										<div className="flex gap-2">
											{s.modes.map((m, i) => {
												const isOpen = openMode.service === s.title && openMode.index === i;
												const tooltipId = `${s.title.replace(/\s+/g, "-").toLowerCase()}-mode-${i}`;
												return (
													<div key={m.label} className="relative" style={{ transitionDelay: `${i * 40}ms` }}>
														<button
															type="button"
															className={`text-[11px] font-medium rounded-full px-3 py-1.5 border focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition shadow-sm ${
																isOpen
																	? "bg-blue-600 text-white border-blue-600"
																	: "bg-black/55 text-white border-white/15 hover:bg-black/70"
															}`}
															aria-expanded={isOpen}
															aria-describedby={isOpen ? tooltipId : undefined}
															onClick={(e) => {
																e.preventDefault();
																toggleMode(s.title, i);
															}}
															onKeyDown={(e) => {
																if (e.key === "Escape") {
																	setOpenMode({});
																}
															}}
														>
															{m.pill || m.label}
														</button>
														<div
															id={tooltipId}
															role="tooltip"
															className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 text-[11px] leading-snug rounded-md border border-white/10 bg-black text-white px-3 py-2 shadow-lg transition transform origin-bottom ${
																isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1 pointer-events-none"
															}`}
														>
															<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black" />
															<p className="font-semibold uppercase tracking-wide mb-1">{m.label}</p>
															<p className="opacity-80">{m.desc}</p>
														</div>
													</div>
												);
											})}
										</div>
									</div>
								)}
							</div>
							<div className="p-5 flex flex-col gap-3">
								<h3 className="text-lg font-semibold text-blue-800 leading-snug">
									{s.title}
								</h3>
								<p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
									{s.description}
								</p>
							</div>
						</div>
					))}
				</div>
				<p className="text-center text-xs text-gray-400 mt-8">
					* Images are placeholders. Replace with actual service photos.
				</p>
			</div>
		</section>
	);
}
