import React from "react";
import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const socialIconMap = {
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
} as const;

type SocialPlatform = keyof typeof socialIconMap;

type SocialLink = {
  platform: SocialPlatform;
  href: string;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials?: SocialLink[];
};

const team: TeamMember[] = [
  {
    name: "Engr. John Gilbert Olnmoguez",
    role: "Proprietor",
    image: "/team3.jpg",
  },
  {
    name: "Lydie Grace Rocero",
    role: "General Manager",
    image: "/ceo.jpg",
  },
  {
    name: "Jenny Reyes",
    role: "Operation Manager",
    image: "/team3.jpg",
  },
  {
    name: "Mark Melvin Dullas",
    role: "Cargo Releasing Team Leader",
    image: "/team3.jpg",
  },
  {
    name: "Teressa Conde",
    role: "Finance / Admin Staff",
    image: "/team3.jpg",
  },
  {
    name: "Genevieve Andales",
    role: "Human Resource Relation TL",
    image: "/team3.jpg",
  },
];

const gradients = [
  "from-blue-900 via-blue-700 to-emerald-700",
  "from-amber-500 via-rose-500 to-violet-600",
  "from-slate-900 via-slate-800 to-blue-700",
  "from-emerald-700 via-teal-600 to-blue-800",
];

const defaultSocials: SocialLink[] = [
  { platform: "linkedin", href: "#" },
  { platform: "instagram", href: "#" },
  { platform: "twitter", href: "#" },
];

export default function TeamSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="site-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900">
          Our Team
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8">
          {team.map((member, index) => {
            const gradient = gradients[index % gradients.length];

            return (
              <article
                key={member.name}
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-[26px] border border-white/10 bg-slate-900 text-white shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:h-96"
              >
                <div className="absolute inset-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 25vw"
                    className="object-cover opacity-80 mix-blend-luminosity transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95 transition duration-500 group-hover:opacity-90`}
                  />
                  <div className="absolute -inset-6 rounded-[36px] border border-white/10 opacity-40" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_60%)]" />
                </div>

                <div className="relative flex flex-col gap-4 p-6 sm:p-8">
                  <div className="space-y-1.5 text-left">
                    <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-[0.32em] text-white/70 sm:text-xs">
                      {member.role}
                    </p>
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    {(member.socials ?? defaultSocials).map(({ platform, href }) => {
                      const Icon = socialIconMap[platform];
                      if (!Icon) return null;

                      return (
                        <a
                          key={platform}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition duration-300 hover:bg-white hover:text-slate-900"
                          aria-label={`${member.name}'s ${platform} profile`}
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}