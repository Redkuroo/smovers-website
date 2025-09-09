"use client";
import React, { useState } from "react";
import Image from "next/image";

const team = [
  { name: "Engr. John Gilbert Olnmoguez", role: "Proprietor", image: "/ceo.jpg" },
  { name: "Lydie Grace Rocero", role: "General Manager", image: "/team2.jpg" },
  { name: "Jenny Reyes", role: "Operation Manager", image: "/team3.jpg" },
  { name: "Mark Melvin Dullas", role: "Cargo Releasing Team Leader", image: "/team3.jpg" },
  { name: "Teressa Conde", role: "Finance / Admin Staff", image: "/team3.jpg" },
  { name: "Genevieve Andales", role: "Human Resource Relation TL", image: "/team3.jpg" },
];

const MEMBERS_PER_PAGE = 3;

export default function TeamSection() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(team.length / MEMBERS_PER_PAGE);
  const paginatedTeam = team.slice(
    (page - 1) * MEMBERS_PER_PAGE,
    page * MEMBERS_PER_PAGE
  );

  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {paginatedTeam.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center w-64">
              <Image src={member.image} alt={member.name} width={96} height={96} className="rounded-full mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`w-9 h-9 rounded-full font-bold border-2 border-blue-900 ${
                page === idx + 1
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900 hover:bg-blue-100"
              } transition`}
              aria-current={page === idx + 1 ? "page" : undefined}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}