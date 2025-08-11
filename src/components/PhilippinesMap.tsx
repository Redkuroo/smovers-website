"use client";
import React, { useMemo } from "react";

interface Lane { origin: string; destination: string; }
interface Selected { origin: string; destination: string; }

interface PhilippinesMapProps {
  lanes: Lane[];
  selected: Selected | null;
}

const ports: Record<string, { x: number; y: number }> = {
  Manila: { x: 440, y: 560 },        // Luzon - Western coast, kept as reference point
  Cebu: { x: 700, y: 930 },          // Moved slightly east, Cebu is more central in Visayas
  Davao: { x: 840, y: 1250 },         // Moved west, Davao is on eastern Mindanao but not that far east
  Gensan: { x: 810, y: 1330 },       // Moved west, General Santos is on southern Mindanao's western side
  Butuan: { x: 850, y: 1080 },        // Moved east, Butuan is on northeastern Mindanao
  Cagayan: { x: 760, y: 1120 },       // Assuming Cagayan de Oro, moved east - it's on northern Mindanao's coast
  Zamboanga: { x: 520, y: 1250 },     // Moved west, Zamboanga is on western Mindanao peninsula
  Iloilo: { x: 570, y: 910 },        // Moved slightly west and south, Iloilo is on Panay Island
  Bacolod: { x: 600, y: 920 },       // Moved east slightly, Bacolod is on Negros Island
  Tagbilaran: { x: 690, y: 1000 },    // Moved east, Tagbilaran is on Bohol Island
  Tacloban: { x: 780, y: 850 },      // Moved east, Tacloban is on eastern Leyte
  Palawan: { x: 180, y: 1030 },       // Moved further west and south - Palawan is the westernmost major island
  Dipolog: { x: 640, y: 1110 },       // Moved west, Dipolog is on northwestern Mindanao
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

// Final alignment constants (adjust if needed)
const BASE_SCALE_X = 1;
const BASE_SCALE_Y = 1;
const BASE_OFFSET_X = 0;
const BASE_OFFSET_Y = 0;

// Toggle to show simplified vector island overlays atop the raster map (can aid alignment while calibrating)
const SHOW_VECTOR_OUTLINE = true;

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
        {/* Background raster map image (ensure file exists in /public). The space is URL-encoded. */}
        <image
          href="/ph%20map.jpg"
          x={0}
          y={0}
          width={1000}
          height={1400}
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.9 }}
        />
  {/* Vector overlays (wrapped in calibration transform) */}
  <g transform={`translate(${BASE_OFFSET_X} ${BASE_OFFSET_Y}) scale(${BASE_SCALE_X} ${BASE_SCALE_Y})`}>
          {SHOW_VECTOR_OUTLINE && (
            <g>
              {islandPaths.map(p => {
                const active = activeIslands.has(p.id);
                return (
                  <path
                    key={p.id}
                    d={p.d}
                    className={`transition-colors duration-300 mix-blend-multiply ${active ? 'fill-blue-50 stroke-blue-300' : 'fill-slate-100/70 stroke-slate-300/70'}`}
                    strokeWidth={active ? 2 : 1}
                  />
                );
              })}
            </g>
          )}
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
                  {/* Optional debug anchor point overlay */}
                  <text x={pt.x + 12} y={pt.y + 4} className="fill-slate-700 text-[22px] font-medium select-none drop-shadow-sm [paint-order:stroke] stroke-white stroke-[6px]">
                    {name}
                  </text>
                </g>
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PhilippinesMap;
