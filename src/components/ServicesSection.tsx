import React from "react";
import Image from "next/image";

const services = [
	{
		title: "Containerized Cargo",
		description:
			"We cater 10 footer, 20 footer, 40 footer containers for all types of goods or general cargo.",
		image: "/service/1.jpg",
		alt: "Stacked shipping containers",
		modes: [
			{ label: "Pier to Pier", desc: "Pickup & drop-off at port terminals." },
			{ label: "Yard to Yard", desc: "From our yard / warehouse to consignee yard." },
			{ label: "Door to Door", desc: "Full origin pickup to final delivery." },
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
	return (
		<section className="py-16 px-4 bg-gray-50" id="services">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
					Our Main Services
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((s) => (
						<div
							key={s.title}
							className="group bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden border border-gray-100"
						>
							<div className="relative h-40 sm:h-44">
								<Image
									src={s.image}
									alt={s.alt}
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-105"
									sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
								{/* Tooltip above image */}
								{s.modes && (
									<div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-30">
										<div className="relative bg-black text-white rounded-md px-3 py-2 shadow-lg text-[10px] leading-tight border border-white/10 min-w-[140px]">
											<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black" />
											<p className="font-semibold mb-1 tracking-wide uppercase">
												Modes
											</p>
											<ul className="space-y-1">
												{s.modes.map((m) => (
													<li key={m.label} className="flex items-center gap-1">
														<span className="inline-block w-1 h-1 bg-white rounded-full" />
														{m.label}
													</li>
												))}
											</ul>
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
