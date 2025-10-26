import React from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
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

export default function TeamSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="site-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900">
          Our Team
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8">
          {team.map((member) => {
            return (
              <article
                key={member.name}
                className="group relative flex h-80 flex-col justify-end overflow-hidden rounded-[26px] border border-slate-900/20 bg-slate-900 text-white shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:h-96"
              >
                <div className="absolute inset-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 25vw"
                    className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute -inset-6 rounded-[36px] border border-white/10 opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                </div>

                <div className="relative flex flex-col gap-4 p-6 sm:p-8">
                  <div className="space-y-1.5 text-left">
                    <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-[0.32em] text-white/80 sm:text-xs">
                      {member.role}
                    </p>
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