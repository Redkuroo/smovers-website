import type { Service } from "@/types/content";

export const SERVICES: Service[] = [
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
    image: "/service/flat.png",
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
