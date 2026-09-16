const CARDS = [
  { label: "CO₂ Emitido", value: "12.450", unit: "kg", color: "#06b6d4", delta: "-8%", positive: true, icon: "💨" },
  { label: "Energia", value: "342", unit: "kWh", color: "#f59e0b", delta: "-12%", positive: true, icon: "⚡" },
  { label: "Deslocamentos", value: "89", unit: "km/sem", color: "#8b5cf6", delta: "+5%", positive: false, icon: "🚴" },
  { label: "Água", value: "1.8", unit: "m³", color: "#3b82f6", delta: "-3%", positive: true, icon: "💧" },
];

const CHART_DATA = [
  { label: "Abr", value: 72 },
  { label: "Mai", value: 65 },
  { label: "Jun", value: 80 },
  { label: "Jul", value: 58 },
  { label: "Ago", value: 70 },
  { label: "Set", value: 45 },
];

const ACHIEVEMENTS = [
  { emoji: "🌱", title: "Reduziu emissões", desc: "–8% de CO₂ em relação ao mês anterior", color: "#10b981" },
  { emoji: "♻️", title: "Hábitos sustentáveis", desc: "7 dias seguidos com escolhas conscientes", color: "#06b6d4" },
  { emoji: "🚲", title: "Mobilidade consciente", desc: "Escolheu bicicleta em 60% dos deslocamentos", color: "#8b5cf6" },
];

function BarChart() {
  const max = Math.max(...CHART_DATA.map((d) => d.value));
  const chartH = 100;

  return (
    <svg width="100%" height={chartH + 24} viewBox={`0 0 ${CHART_DATA.length * 50} ${chartH + 24}`} preserveAspectRatio="xMidYMid meet">
      {CHART_DATA.map((d, i) => {
        const barH = (d.value / max) * chartH;
        const isLast = i === CHART_DATA.length - 1;
        const x = i * 50 + 8;
        return (
          <g key={d.label}>
            <rect
              x={x}
              y={chartH - barH}
              width={34}
              height={barH}
              rx="6"
              fill={isLast ? "url(#barGrad)" : "rgba(6,182,212,0.15)"}
            />
            <text
              x={x + 17}
              y={chartH + 16}
              textAnchor="middle"
              fill="#6b7fa3"
              fontSize="10"
              fontFamily="Inter"
            >
              {d.label}
            </text>
            {isLast && (
              <text
                x={x + 17}
                y={chartH - barH - 6}
                textAnchor="middle"
                fill="#06b6d4"
                fontSize="10"
                fontFamily="JetBrains Mono"
                fontWeight="500"
              >
                {d.value}
              </text>
            )}
          </g>
        );
      })}
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Impact() {
  return (
    <div className="screen" style={{ background: "var(--background)", paddingBottom: 96 }}>
      {/* Header */}
      <div style={{ padding: "52px 20px 20px", borderBottom: "1px solid var(--border)" }}>
        <h1 style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 24, color: "var(--foreground)", letterSpacing: -0.3 }}>
          Impacto Ambiental
        </h1>
        <p style={{ fontFamily: "Inter", fontSize: 13, color: "var(--muted-foreground)", marginTop: 4 }}>
          Seu rastro ambiental nos últimos 30 dias
        </p>
      </div>

      <div style={{ padding: "20px" }}>
        {/* Hero stat */}
        <div
          className="card"
          style={{
            background: "linear-gradient(135deg, #0f1628, #111e38)",
            border: "1px solid rgba(6,182,212,0.15)",
            textAlign: "center",
            padding: "28px 20px",
            marginBottom: 16,
            animation: "fadeIn 0.5s ease",
          }}
        >
          <div style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>
            CO₂ monitorado
          </div>
          <div
            style={{
              fontFamily: "Outfit",
              fontWeight: 800,
              fontSize: 44,
              letterSpacing: -2,
              background: "linear-gradient(135deg, #e8edf8, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            12.450 kg
          </div>
          <div style={{ fontFamily: "Inter", fontSize: 13, color: "var(--muted-foreground)", marginTop: 8 }}>
            Equivalente a{" "}
            <span style={{ color: "#10b981", fontWeight: 600 }}>57 árvores</span> plantadas este mês
          </div>
        </div>

        {/* Metric cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {CARDS.map((c, i) => (
            <div
              key={c.label}
              className="card"
              style={{
                padding: "14px",
                animation: `fadeIn 0.4s ${i * 0.08}s ease both`,
                opacity: 0,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontSize: 18 }}>{c.icon}</span>
                <span
                  style={{
                    fontFamily: "Outfit",
                    fontSize: 11,
                    fontWeight: 600,
                    color: c.positive ? "#10b981" : "#ef4444",
                    background: c.positive ? "rgba(16,185,129,0.1)" : "rgba(239,68,68,0.1)",
                    borderRadius: 6,
                    padding: "2px 6px",
                  }}
                >
                  {c.delta}
                </span>
              </div>
              <div style={{ fontFamily: "JetBrains Mono", fontWeight: 500, fontSize: 18, color: c.color }}>
                {c.value}
                <span style={{ fontSize: 11, fontFamily: "Inter", color: "var(--muted-foreground)", marginLeft: 3 }}>
                  {c.unit}
                </span>
              </div>
              <div style={{ fontFamily: "Inter", fontSize: 11, color: "var(--muted-foreground)", marginTop: 2 }}>
                {c.label}
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="card" style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 14, color: "var(--foreground)" }}>
              Seu impacto nos últimos 30 dias
            </div>
            <span style={{ fontFamily: "JetBrains Mono", fontSize: 10, color: "#06b6d4" }}>kg CO₂</span>
          </div>
          <BarChart />
        </div>

        {/* Achievements */}
        <div>
          <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 15, color: "var(--foreground)", marginBottom: 12 }}>
            Suas conquistas
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={a.title}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 16px",
                  borderLeft: `3px solid ${a.color}`,
                  animation: `fadeIn 0.4s ${i * 0.1}s ease both`,
                  opacity: 0,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: `${a.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {a.emoji}
                </div>
                <div>
                  <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 14, color: "var(--foreground)" }}>
                    {a.title}
                  </div>
                  <div style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>
                    {a.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
