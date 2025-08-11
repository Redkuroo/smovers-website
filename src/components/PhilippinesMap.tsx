"use client";
import React, { useMemo, useState, useRef, useCallback } from "react";

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
  // Pan & Zoom State
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const dragRef = useRef<{x:number;y:number;tx:number;ty:number;active:boolean} | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const clampScale = (v:number) => Math.min(3, Math.max(0.8, v));

  const applyZoomAtPoint = useCallback((newScale:number, screenX:number, screenY:number) => {
    newScale = clampScale(newScale);
    // Maintain point under cursor: screen = scale * p + t
    // p = (screen - t)/scale; t' = (scale - newScale)*p + t
    const pX = (screenX - tx)/scale;
    const pY = (screenY - ty)/scale;
    const nextTx = (scale - newScale)*pX + tx;
    const nextTy = (scale - newScale)*pY + ty;
    setScale(newScale);
    setTx(nextTx);
    setTy(nextTy);
  }, [scale, tx, ty]);

  const handleWheel = useCallback((e: React.WheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    // Smooth interpolation
    applyZoomAtPoint(scale * zoomFactor, screenX, screenY);
  }, [applyZoomAtPoint, scale]);

  const startDrag = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { x: e.clientX, y: e.clientY, tx, ty, active: true };
  };
  const onDrag = (e: React.PointerEvent) => {
    if (!dragRef.current || !dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.x;
    const dy = e.clientY - dragRef.current.y;
    setTx(dragRef.current.tx + dx);
    setTy(dragRef.current.ty + dy);
  };
  const endDrag = (e: React.PointerEvent) => {
    if (dragRef.current) dragRef.current.active = false;
  };

  const zoomCenter = (factor:number) => {
    if (!svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    applyZoomAtPoint(scale * factor, rect.width/2, rect.height/2);
  };
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
  {/* Scaled geographic layer (image & geometry) */}
  <g transform={`translate(${tx} ${ty}) scale(${scale})`}>
          {/* Active route arc only (rendered after selection) */}
          {activeRoute && (
            <g className="pointer-events-none">
              <path
                key={activeRoute.id}
                d={activeRoute.d}
    className="stroke-blue-600"
                strokeWidth={6 / scale}
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                markerEnd={'url(#routeArrow)'}
    style={{ opacity: 0.95, transition: 'stroke 250ms, opacity 250ms, stroke-width 250ms' }}
    vectorEffect="non-scaling-stroke"
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
                  <circle cx={pt.x} cy={pt.y} r={(isSelectedPort ? 10 : 7) / scale} className={isSelectedPort ? 'fill-blue-600' : 'fill-blue-500'} />
                  {/* Optional debug anchor point overlay */}
                  <text x={pt.x + 12} y={pt.y + 4} className="fill-slate-700 font-medium select-none drop-shadow-sm [paint-order:stroke] stroke-white stroke-[6px]" style={{ fontSize: `${22 / scale}px` }}>
                    {name}
                  </text>
                </g>
              );
            })}
          </g>
        </g>
      </svg>
      {/* Zoom & Pan Controls */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => zoomCenter(1.15)}
          className="w-10 h-10 rounded-md bg-white/90 backdrop-blur text-blue-700 text-lg font-semibold shadow border border-blue-200 hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Zoom in"
        >+</button>
        <button
          type="button"
          onClick={() => zoomCenter(1/1.15)}
          className="w-10 h-10 rounded-md bg-white/90 backdrop-blur text-blue-700 text-lg font-semibold shadow border border-blue-200 hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Zoom out"
        >−</button>
        <button
          type="button"
          onClick={() => { setScale(1); setTx(0); setTy(0); }}
            className="w-10 h-10 rounded-md bg-white/90 backdrop-blur text-blue-700 text-xs font-medium shadow border border-blue-200 hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Reset view"
        >Reset</button>
      </div>
    </div>
  );
};

export default PhilippinesMap;
