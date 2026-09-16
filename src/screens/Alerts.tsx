import { useState } from "react";

const FILTERS = ["Todos", "Críticos", "Atenção", "Resolvidos"];

interface Alert {
  level: "critical" | "attention" | "resolved";
  title: string;
  desc: string;
  time: string;
  location: string;
  resolved?: boolean;
}

const ALL_ALERTS: Alert[] = [
  {
    level: "critical",
    title: "Qualidade do ar elevada",
    desc: "Concentração elevada de poluentes na zona Norte. PM2.5 acima de 150 μg/m³. Evite atividades ao ar livre.",
    time: "Há 15 min",
    location: "Zona Norte, SP",
  },
  {
    level: "critical",
    title: "Índice UV extremo",
    desc: "Radiação ultravioleta em nível crítico entre 10h–14h. Use proteção solar FPS 50+.",
    time: "Há 1h",
    location: "São Paulo, SP",
  },
  {
    level: "attention",
    title: "Temperatura acima do normal",
    desc: "Temperatura 4°C acima da média histórica para setembro. Hidrate-se frequentemente.",
    time: "Há 2h",
    location: "Centro, SP",
  },
  {
    level: "attention",
    title: "Umidade baixa",
    desc: "Umidade relativa do ar abaixo de 30%. Risco de desconforto respiratório para grupos sensíveis.",
    time: "Há 3h",
    location: "Zona Sul, SP",
  },
  {
    level: "resolved",
    title: "Qualidade do ar voltou ao normal",
    desc: "Após emissão de alerta às 06h, os índices de poluição retornaram ao nível seguro.",
    time: "Há 4h",
    location: "Zona Leste, SP",
    resolved: true,
  },
  {
    level: "resolved",
    title: "Chuva dissipou poluentes",
    desc: "Precipitação de 18mm reduziu concentração de particulados na região.",
    time: "Há 8h",
    location: "Grande SP",
    resolved: true,
  },
];

const LEVEL_CONF = {
  critical: { color: "#ef4444", bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)", label: "CRÍTICO", dot: "🔴" },
  attention: { color: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", label: "ATENÇÃO", dot: "🟡" },
  resolved: { color: "#10b981", bg: "rgba(16,185,129,0.06)", border: "rgba(16,185,129,0.15)", label: "RESOLVIDO", dot: "🟢" },
};

export default function Alerts() {
  const [activeFilter, setActiveFilter] = useState(0);

  const filtered = ALL_ALERTS.filter((a) => {
    if (activeFilter === 0) return true;
    if (activeFilter === 1) return a.level === "critical";
    if (activeFilter === 2) return a.level === "attention";
    return a.level === "resolved";
  });

  const criticalCount = ALL_ALERTS.filter((a) => a.level === "critical").length;

  return (
    <div className="screen" style={{ background: "var(--background)", paddingBottom: 96 }}>
      {/* Header */}
      <div style={{ padding: "52px 20px 20px", borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h1 style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 24, color: "var(--foreground)", letterSpacing: -0.3 }}>
              Alertas
            </h1>
            <div style={{ marginTop: 4, display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.25)",
                  borderRadius: 20,
                  padding: "3px 10px",
                  fontFamily: "Outfit",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#ef4444",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#ef4444", animation: "pulse-ring 2s infinite" }} />
                {criticalCount} crítico{criticalCount !== 1 ? "s" : ""} agora
              </div>
            </div>
          </div>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 11, color: "var(--muted-foreground)" }}>
            {ALL_ALERTS.length} total
          </span>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          {FILTERS.map((f, i) => (
            <button
              key={f}
              onClick={() => setActiveFilter(i)}
              style={{
                background: activeFilter === i ? "rgba(6,182,212,0.12)" : "var(--secondary)",
                border: `1px solid ${activeFilter === i ? "rgba(6,182,212,0.3)" : "var(--border)"}`,
                borderRadius: 20,
                padding: "6px 14px",
                fontFamily: "Outfit",
                fontSize: 12,
                fontWeight: activeFilter === i ? 600 : 400,
                color: activeFilter === i ? "#06b6d4" : "var(--muted-foreground)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Alert list */}
      <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
        {filtered.map((alert, i) => {
          const conf = LEVEL_CONF[alert.level];
          return (
            <div
              key={i}
              style={{
                background: conf.bg,
                border: `1px solid ${conf.border}`,
                borderRadius: 16,
                padding: "16px",
                animation: `fadeIn 0.4s ${i * 0.06}s ease both`,
                opacity: 0,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      background: `${conf.color}20`,
                      border: `1px solid ${conf.color}40`,
                      borderRadius: 6,
                      padding: "2px 8px",
                      fontFamily: "Outfit",
                      fontSize: 10,
                      fontWeight: 700,
                      color: conf.color,
                      letterSpacing: 0.8,
                    }}
                  >
                    {conf.label}
                  </div>
                </div>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: 10, color: "var(--muted-foreground)" }}>
                  {alert.time}
                </span>
              </div>

              <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 15, color: "var(--foreground)", marginBottom: 6 }}>
                {alert.title}
              </div>
              <div style={{ fontFamily: "Inter", fontSize: 13, color: "var(--muted-foreground)", lineHeight: 1.5, marginBottom: 10 }}>
                {alert.desc}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill={conf.color} opacity={0.7}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  </svg>
                  <span style={{ fontFamily: "Inter", fontSize: 11, color: "var(--muted-foreground)" }}>{alert.location}</span>
                </div>

                {!alert.resolved && (
                  <button
                    style={{
                      background: "none",
                      border: `1px solid ${conf.border}`,
                      borderRadius: 8,
                      padding: "4px 10px",
                      fontFamily: "Outfit",
                      fontSize: 11,
                      fontWeight: 500,
                      color: conf.color,
                      cursor: "pointer",
                    }}
                  >
                    Ver detalhes
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
