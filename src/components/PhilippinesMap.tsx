"use client";
import React, { useMemo } from "react";

interface Lane { origin: string; destination: string; }
interface Selected { origin: string; destination: string; }

interface PhilippinesMapProps {
  lanes: Lane[];
  selected: Selected | null;
}

const ports: Record<string, { x: number; y: number }> = {
  Manila: { x: 470, y: 360 },
  Cebu: { x: 560, y: 640 },
  Davao: { x: 720, y: 980 },
  Gensan: { x: 690, y: 1090 },
  Butuan: { x: 640, y: 820 },
  Cagayan: { x: 610, y: 870 },
  Zamboanga: { x: 470, y: 940 },
  Iloilo: { x: 520, y: 600 },
  Bacolod: { x: 505, y: 585 },
  Tagbilaran: { x: 560, y: 670 },
  Tacloban: { x: 600, y: 550 },
  Palawan: { x: 300, y: 640 },
  Dipolog: { x: 520, y: 880 },
};

// Map ports to island group for highlighting
const islandMap: Record<string, 'luzon' | 'visayas' | 'mindanao' | 'palawan'> = {
  Manila: 'luzon',
  Palawan: 'palawan',
  Cebu: 'visayas',
  Tagbilaran: 'visayas',
  Iloilo: 'visayas',
  Bacolod: 'visayas',
  Tacloban: 'visayas',
  Davao: 'mindanao',
  Gensan: 'mindanao',
  Butuan: 'mindanao',
  Cagayan: 'mindanao',
  Zamboanga: 'mindanao',
  Dipolog: 'mindanao'
};

// Simplified island outline paths (placeholder approximations)
// These can be replaced later with accurate coastline vectors.
const islandPaths: { id: 'luzon' | 'visayas' | 'mindanao' | 'palawan'; d: string }[] = [
  { id: 'luzon', d: 'M400 250 Q470 190 530 260 Q560 310 550 380 Q520 450 460 430 Q410 410 370 360 Q360 300 400 250 Z' },
  { id: 'visayas', d: 'M470 540 Q520 520 560 560 Q600 600 590 640 Q580 680 550 700 Q520 710 490 680 Q460 640 470 600 Q465 560 470 540 Z' },
  { id: 'mindanao', d: 'M520 780 Q600 760 660 800 Q720 860 730 930 Q730 990 700 1040 Q660 1100 600 1080 Q560 1070 530 1030 Q500 980 500 900 Q500 830 520 780 Z' },
  { id: 'palawan', d: 'M260 520 Q300 500 320 560 Q340 620 330 700 Q320 760 300 820 Q280 800 270 760 Q260 700 250 640 Q250 580 260 520 Z' },
];

function arcPath(a: { x: number; y: number }, b: { x: number; y: number }, intensity = 0.18) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const nx = -dy;
  const ny = dx;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const normX = nx / len;
  const normY = ny / len;
  const cx = mx + normX * len * intensity;
  const cy = my + normY * len * intensity;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

export const PhilippinesMap: React.FC<PhilippinesMapProps> = ({ lanes, selected }) => {
  const prepared = useMemo(() => {
    const seen = new Set<string>();
    const result: { id: string; origin: string; destination: string; d: string }[] = [];
    for (const lane of lanes) {
      const key = `${lane.origin}__${lane.destination}`;
      if (seen.has(key)) continue;
      const o = ports[lane.origin];
      const d = ports[lane.destination];
      if (!o || !d) continue;
      seen.add(key);
      result.push({ id: key, origin: lane.origin, destination: lane.destination, d: arcPath(o, d) });
    }
    return result;
  }, [lanes]);

  const activeIslands = useMemo(() => {
    if (!selected) return new Set<string>();
    const s = new Set<string>();
    const o = islandMap[selected.origin];
    const d = islandMap[selected.destination];
    if (o) s.add(o);
    if (d) s.add(d);
    return s;
  }, [selected]);

  return (
    <div className="w-full h-full relative">
      <svg viewBox="0 0 1000 1400" role="img" aria-label="Philippines route map" className="w-full h-full">
        <title>Philippines Routes</title>
        <desc>Shipping routes between major Philippine ports.</desc>
        <defs>
          <marker id="routeArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-blue-600" />
          </marker>
        </defs>
        {/* Island groups */}
        <g>
          {islandPaths.map(p => {
            const active = activeIslands.has(p.id);
            return (
              <path
                key={p.id}
                d={p.d}
                className={`transition-colors duration-300 ${active ? 'fill-blue-50 stroke-blue-300' : 'fill-slate-100 stroke-slate-300'}`}
                strokeWidth={active ? 2 : 1}
              />
            );
          })}
        </g>
        {/* Route arcs */}
        <g className="pointer-events-none">
          {prepared.map(r => {
            const active = selected && selected.origin === r.origin && selected.destination === r.destination;
            return (
              <path
                key={r.id}
                d={r.d}
                className={active ? 'stroke-blue-600' : 'stroke-blue-300'}
                strokeWidth={active ? 6 : 3}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                markerEnd={active ? 'url(#routeArrow)' : undefined}
                style={{ opacity: active ? 0.95 : 0.55, transition: 'stroke 250ms, opacity 250ms, stroke-width 250ms' }}
                aria-label={`Route ${r.origin} to ${r.destination}`}
              />
            );
          })}
        </g>
        {/* Ports */}
        <g>
          {Object.entries(ports).map(([name, pt]) => {
            const isSelectedPort = selected && (selected.origin === name || selected.destination === name);
            return (
              <g key={name}>
                <circle cx={pt.x} cy={pt.y} r={isSelectedPort ? 10 : 7} className={isSelectedPort ? 'fill-blue-600' : 'fill-blue-500'} />
                <text x={pt.x + 12} y={pt.y + 4} className="fill-slate-700 text-[22px] font-medium select-none">
                  {name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default PhilippinesMap;
