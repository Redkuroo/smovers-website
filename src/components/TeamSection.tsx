import React from "react";
import Image from "next/image";

const team = [
  { name: "Engr. John Gilbert Olnmoguez", role: "Proprietor", image: "/team3.jpg" },
  { name: "Lydie Grace Rocero", role: "General Manager", image: "/ceo.jpg" },
  { name: "Jenny Reyes", role: "Operation Manager", image: "/team3.jpg" },
  { name: "Mark Melvin Dullas", role: "Cargo Releasing Team Leader", image: "/team3.jpg" },
  { name: "Teressa Conde", role: "Finance / Admin Staff", image: "/team3.jpg" },
  { name: "Genevieve Andales", role: "Human Resource Relation TL", image: "/team3.jpg" },
];

export default function TeamSection() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="site-container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900">Our Team</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-3xl border border-blue-900/10 bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-28 sm:w-28">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 15vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 sm:text-xl">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-600 sm:text-base">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}