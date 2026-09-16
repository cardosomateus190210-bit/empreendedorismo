import { useState } from "react";

const FILTERS = ["Qualidade do ar", "Temperatura", "Umidade", "Emissões", "Risco"];
const LEGEND = [
  { color: "#10b981", label: "Normal" },
  { color: "#f59e0b", label: "Atenção" },
  { color: "#f97316", label: "Moderado" },
  { color: "#ef4444", label: "Crítico" },
];

// Map zones with mock data
const ZONES = [
  { cx: 100, cy: 140, rx: 50, ry: 38, color: "#10b981", opacity: 0.15, label: "AQI 42", status: "normal" },
  { cx: 220, cy: 180, rx: 40, ry: 30, color: "#f59e0b", opacity: 0.15, label: "AQI 85", status: "attention" },
  { cx: 280, cy: 280, rx: 45, ry: 35, color: "#f97316", opacity: 0.15, label: "AQI 112", status: "moderate" },
  { cx: 150, cy: 300, rx: 55, ry: 38, color: "#10b981", opacity: 0.12, label: "AQI 38", status: "normal" },
  { cx: 310, cy: 150, rx: 35, ry: 28, color: "#ef4444", opacity: 0.15, label: "AQI 168", status: "critical" },
  { cx: 80, cy: 260, rx: 38, ry: 30, color: "#10b981", opacity: 0.12, label: "AQI 45", status: "normal" },
];

const PINS = [
  { x: 100, y: 140, color: "#10b981", label: "Centro" },
  { x: 220, y: 180, color: "#f59e0b", label: "Leste" },
  { x: 280, y: 280, color: "#f97316", label: "Sul" },
  { x: 310, y: 150, color: "#ef4444", label: "Norte" },
];

export default function MapScreen() {
  const [activeFilter, setActiveFilter] = useState(0);
  const [selectedPin, setSelectedPin] = useState<number | null>(null);

  return (
    <div style={{ width: "100%", height: "100%", background: "var(--background)", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* Header */}
      <div
        style={{
          padding: "52px 20px 16px",
          background: "rgba(8,13,26,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid var(--border)",
          zIndex: 10,
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div>
            <h1 style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 22, color: "var(--foreground)", letterSpacing: -0.3 }}>
              Mapa de Risco
            </h1>
            <div style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>
              São Paulo, SP · Tempo real
            </div>
          </div>
          <div
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: 20,
              padding: "4px 12px",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", animation: "pulse-ring 2s infinite" }} />
            <span style={{ fontFamily: "Outfit", fontSize: 12, fontWeight: 600, color: "#10b981" }}>AO VIVO</span>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 2 }}>
          {FILTERS.map((f, i) => (
            <button
              key={f}
              onClick={() => setActiveFilter(i)}
              style={{
                flexShrink: 0,
                background: activeFilter === i ? "rgba(6,182,212,0.15)" : "var(--secondary)",
                border: `1px solid ${activeFilter === i ? "rgba(6,182,212,0.4)" : "var(--border)"}`,
                borderRadius: 20,
                padding: "6px 14px",
                fontFamily: "Outfit",
                fontSize: 12,
                fontWeight: activeFilter === i ? 600 : 400,
                color: activeFilter === i ? "#06b6d4" : "var(--muted-foreground)",
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Map */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <svg width="390" height="100%" viewBox="0 0 390 400" style={{ position: "absolute", inset: 0 }}>
          {/* Base map */}
          <rect width="390" height="400" fill="#0a1020" />

          {/* Grid */}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="390" y2={i * 40} stroke="rgba(6,182,212,0.04)" strokeWidth="1" />
          ))}
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`v${i}`} x1={i * 43} y1="0" x2={i * 43} y2="400" stroke="rgba(6,182,212,0.04)" strokeWidth="1" />
          ))}

          {/* Streets */}
          <line x1="0" y1="200" x2="390" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
          <line x1="195" y1="0" x2="195" y2="400" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
          <line x1="0" y1="120" x2="390" y2="200" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          <line x1="0" y1="280" x2="390" y2="180" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

          {/* Blocks */}
          {[
            [30, 60, 60, 50], [105, 60, 70, 50], [200, 60, 80, 50], [300, 60, 70, 50],
            [30, 130, 55, 55], [105, 130, 80, 55], [210, 130, 70, 55], [305, 130, 65, 55],
            [30, 220, 60, 60], [115, 220, 65, 60], [205, 220, 75, 60], [305, 220, 65, 60],
            [30, 310, 70, 55], [120, 310, 60, 55], [205, 310, 80, 55], [310, 310, 60, 55],
          ].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="rgba(19,28,53,0.7)" rx="2" />
          ))}

          {/* Risk zones */}
          {ZONES.map((z, i) => (
            <ellipse key={i} cx={z.cx} cy={z.cy} rx={z.rx} ry={z.ry} fill={z.color} opacity={z.opacity} />
          ))}

          {/* User location */}
          <circle cx="195" cy="200" r="12" fill="rgba(6,182,212,0.15)" />
          <circle cx="195" cy="200" r="6" fill="#06b6d4" />
          <circle cx="195" cy="200" r="4" fill="white" />

          {/* Pins */}
          {PINS.map((pin, i) => (
            <g key={i} onClick={() => setSelectedPin(i === selectedPin ? null : i)} style={{ cursor: "pointer" }}>
              <circle cx={pin.x} cy={pin.y} r="10" fill={`${pin.color}22`} />
              <circle cx={pin.x} cy={pin.y} r="5" fill={pin.color} />
              {selectedPin === i && (
                <g>
                  <rect
                    x={pin.x - 25}
                    y={pin.y - 30}
                    width={50}
                    height={18}
                    rx="6"
                    fill="rgba(8,13,26,0.9)"
                    stroke={pin.color}
                    strokeWidth="1"
                  />
                  <text x={pin.x} y={pin.y - 18} textAnchor="middle" fill={pin.color} fontSize="9" fontFamily="JetBrains Mono">
                    {ZONES[i]?.label}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>

        {/* My location button */}
        <button
          style={{
            position: "absolute",
            right: 16,
            top: 16,
            width: 44,
            height: 44,
            borderRadius: 14,
            background: "rgba(8,13,26,0.9)",
            backdropFilter: "blur(10px)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.8">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M1 12h4M19 12h4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Legend */}
      <div
        style={{
          padding: "12px 20px",
          background: "rgba(8,13,26,0.95)",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid var(--border)",
          paddingBottom: 100,
        }}
      >
        <div style={{ fontFamily: "Outfit", fontSize: 12, fontWeight: 500, color: "var(--muted-foreground)", marginBottom: 10 }}>
          LEGENDA
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {LEGEND.map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.color }} />
              <span style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)" }}>{l.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
