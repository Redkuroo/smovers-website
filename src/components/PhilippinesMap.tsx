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
  Dipolog: { x: 640, y: 1110 },      
};


// Final alignment constants (adjust if needed)
const BASE_SCALE_X = 1;
const BASE_SCALE_Y = 1;
const BASE_OFFSET_X = 0;
const BASE_OFFSET_Y = 0;

// Island outlines removed per request

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

  // Derive only the active route path (if any) so we can hide others
  const activeRoute = useMemo(() => {
    if (!selected) return null;
    return prepared.find(r => r.origin === selected.origin && r.destination === selected.destination) || null;
  }, [prepared, selected]);

  // Island highlighting logic removed

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
        {/* Routes & ports overlay */}
        <g transform={`translate(${BASE_OFFSET_X} ${BASE_OFFSET_Y}) scale(${BASE_SCALE_X} ${BASE_SCALE_Y})`}>
          {/* Placeholder pulse when no route selected */}
          {!selected && (
            <g aria-hidden="true" className="pointer-events-none select-none">
              <circle cx={ports.Manila.x} cy={ports.Manila.y} r={10} className="fill-blue-600" />
              <circle cx={ports.Manila.x} cy={ports.Manila.y} r={12} className="fill-transparent stroke-blue-600">
                <animate attributeName="r" values="12;85" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <circle cx={ports.Manila.x} cy={ports.Manila.y} r={12} className="fill-transparent stroke-blue-600">
                <animate attributeName="r" values="12;85" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0" begin="1.2s" dur="2.4s" repeatCount="indefinite" />
              </circle>
              <text
                x={ports.Manila.x}
                y={ports.Manila.y - 110}
                textAnchor="middle"
                className="font-medium text-[26px] fill-slate-700 opacity-60"
              >Select a lane</text>
              <text
                x={ports.Manila.x}
                y={ports.Manila.y - 78}
                textAnchor="middle"
                className="text-[16px] fill-slate-600 opacity-60 tracking-wide"
              >to display route</text>
            </g>
          )}
          {/* Active route arc only (rendered after selection) */}
          {activeRoute && (
            <g className="pointer-events-none">
              <path
                key={activeRoute.id}
                d={activeRoute.d}
                className="stroke-blue-600"
                strokeWidth={6}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                markerEnd={'url(#routeArrow)'}
                style={{ opacity: 0.95, transition: 'stroke 250ms, opacity 250ms, stroke-width 250ms' }}
                aria-label={`Route ${activeRoute.origin} to ${activeRoute.destination}`}
              />
            </g>
          )}
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
