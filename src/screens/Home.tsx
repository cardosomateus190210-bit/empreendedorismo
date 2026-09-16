import { useState } from "react";

const METRICS = [
  { label: "CO₂", value: "420", unit: "ppm", color: "#06b6d4", icon: "💨" },
  { label: "Temperatura", value: "28", unit: "°C", color: "#f59e0b", icon: "🌡" },
  { label: "Umidade", value: "65", unit: "%", color: "#3b82f6", icon: "💧" },
  { label: "Qualidade", value: "Boa", unit: "", color: "#10b981", icon: "✓" },
];

const SUMMARY = [
  { label: "PM2.5", value: "12 μg/m³", status: "normal" },
  { label: "NO₂", value: "28 μg/m³", status: "normal" },
  { label: "O₃", value: "54 μg/m³", status: "attention" },
  { label: "Pressão", value: "1013 hPa", status: "normal" },
  { label: "UV", value: "Moderado", status: "attention" },
  { label: "Vento", value: "12 km/h NE", status: "normal" },
];

const STATUS_COLORS: Record<string, string> = {
  normal: "#10b981",
  attention: "#f59e0b",
  critical: "#ef4444",
};

const TEXT_MATERIALS = [
  {
    title: "O que é metano?",
    meta: "Explicação geral · 3 min",
    description:
      "O metano é um gás que faz parte do grupo dos gases de efeito estufa e pode ser liberado por atividades humanas e processos naturais. Ele é muito mais poderoso que o CO₂ em termos de aquecimento em um período de tempo mais curto, por isso precisa ser monitorado com atenção.",
  },
  {
    title: "Principais causas do metano",
    meta: "Origem e emissões · 4 min",
    description:
      "As principais fontes de metano incluem agricultura, manejo de resíduos, vazamentos de petróleo e gás, aterros, esgoto e algumas atividades industriais. Em cidades e regiões produtivas, esse gás pode aumentar quando há falhas em infraestrutura ou quando o processo de decomposição é acelerado.",
  },
  {
    title: "Consequências para a saúde e o clima",
    meta: "Impacto ambiental · 4 min",
    description:
      "O metano contribui para o aquecimento global e pode piorar a qualidade do ar quando entra em contato com outros poluentes. Além disso, em concentrações mais altas, pode afetar a saúde humana, causar desconforto respiratório e aumentar riscos em áreas com pouca ventilação.",
  },
  {
    title: "Como reduzir as emissões",
    meta: "Ações práticas · 3 min",
    description:
      "A redução começa com melhor controle de vazamentos, gestão adequada de resíduos, aproveitamento de biogás, uso de tecnologia mais eficiente e acompanhamento constante dos indicadores. Quando a gente identifica a origem e monitoriza o problema, é possível agir antes que o impacto fique maior.",
  },
  {
    title: "Por que monitorar isso no app",
    meta: "Uso do sistema · 2 min",
    description:
      "Acompanhar metano, temperatura, umidade e outros indicadores ajuda a entender o que está acontecendo no ambiente e a tomar decisões mais rápidas. Isso é importante para cidades, indústrias, áreas rurais e qualquer lugar em que o risco de emissões aumente.",
  },
];

function AQIGauge({ value = 45, label = "Boa" }: { value?: number; label?: string }) {
  const size = 140;
  const r = 52;
  const cx = size / 2;
  const cy = size / 2 + 10;
  const circumference = Math.PI * r;
  const progress = (value / 200) * circumference;

  return (
    <svg width={size} height={size * 0.75} viewBox={`0 0 ${size} ${size * 0.75}`}>
      <defs>
        <linearGradient id="aqiGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke="url(#aqiGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${progress} ${circumference}`}
      />
      <text x={cx} y={cy - 8} textAnchor="middle" fill="#e8edf8" fontSize="30" fontWeight="700" fontFamily="Outfit">
        {value}
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="600" fontFamily="Outfit">
        {label}
      </text>
    </svg>
  );
}

export default function Home() {
  return (
    <div
      className="screen"
      style={{
        background: "var(--background)",
        paddingBottom: 96,
      }}
    >
      <div
        style={{
          padding: "52px 24px 20px",
          background: "linear-gradient(180deg, rgba(6,182,212,0.04) 0%, transparent 100%)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "Inter", fontSize: 13, color: "var(--muted-foreground)", marginBottom: 4 }}>
              Segunda, 14 Set 2026
            </div>
            <h1
              style={{
                fontFamily: "Outfit",
                fontWeight: 700,
                fontSize: 24,
                color: "var(--foreground)",
                letterSpacing: -0.3,
              }}
            >
              Olá, Mateus!
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#06b6d4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              <span style={{ fontFamily: "Inter", fontSize: 12, color: "#06b6d4" }}>
                São Paulo, SP · Centro
              </span>
            </div>
          </div>
          <button
            style={{
              width: 42,
              height: 42,
              borderRadius: 14,
              background: "var(--card)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.8">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
            <span
              style={{
                position: "absolute",
                top: 9,
                right: 9,
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#ef4444",
                border: "2px solid var(--background)",
              }}
            />
          </button>
        </div>
      </div>

      <div style={{ padding: "0 20px" }}>
        <div
          className="card"
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(15,22,40,0.92))",
            border: "1px solid rgba(6,182,212,0.18)",
            marginBottom: 16,
          }}
        >
          <div style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 15, color: "#7dd3fc", marginBottom: 10 }}>
            O que é metano?
          </div>
          <p style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.6, margin: 0, marginBottom: 12 }}>
            O metano é um gás de efeito estufa muito forte. Ele vem de agricultura, lixo, esgoto e vazamentos de petróleo e gás e ajuda a aquecer a atmosfera rapidamente.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <div style={{ background: "rgba(15,22,40,0.7)", border: "1px solid rgba(148,163,184,0.16)", borderRadius: 12, padding: "10px 10px" }}>
              <div style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 10, color: "#7dd3fc", marginBottom: 4 }}>Causas</div>
              <div style={{ fontFamily: "Inter", fontSize: 11, color: "var(--muted-foreground)", lineHeight: 1.5 }}>Resíduos, plantações e vazamentos.</div>
            </div>
            <div style={{ background: "rgba(15,22,40,0.7)", border: "1px solid rgba(148,163,184,0.16)", borderRadius: 12, padding: "10px 10px" }}>
              <div style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 10, color: "#7dd3fc", marginBottom: 4 }}>Impacto</div>
              <div style={{ fontFamily: "Inter", fontSize: 11, color: "var(--muted-foreground)", lineHeight: 1.5 }}>Aumenta o calor do planeta e piora o ar.</div>
            </div>
          </div>
        </div>

        <div
          className="card"
          style={{
            background: "linear-gradient(135deg, #0f1628 0%, #111e38 100%)",
            border: "1px solid rgba(6,182,212,0.15)",
            boxShadow: "0 0 40px rgba(6,182,212,0.06)",
            animation: "fadeIn 0.5s ease",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 16, color: "var(--foreground)" }}>
                Qualidade do Ar
              </div>
              <div style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>
                Atualizado há 2 min
              </div>
            </div>
            <div
              style={{
                background: "rgba(16,185,129,0.12)",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: 8,
                padding: "4px 10px",
                fontFamily: "Outfit",
                fontWeight: 600,
                fontSize: 12,
                color: "#10b981",
              }}
            >
              AQI · Boa
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <AQIGauge value={45} label="Boa" />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)", marginBottom: 8 }}>
                Índice atual
              </div>
              <div
                style={{
                  fontFamily: "JetBrains Mono",
                  fontWeight: 500,
                  fontSize: 40,
                  color: "#10b981",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                45
              </div>
              <div style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)" }}>
                de 200 · Bom
              </div>
              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {["Normal para atividades ao ar livre", "Sem risco para grupos sensíveis"].map((tip) => (
                  <div key={tip} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />
                    <span style={{ fontFamily: "Inter", fontSize: 11, color: "#6b7fa3" }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 15, color: "var(--foreground)", marginBottom: 12 }}>
          Indicadores
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className="card"
              style={{
                padding: "14px 16px",
                animation: `fadeIn 0.4s ${0.1 * i}s ease both`,
                opacity: 0,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <span style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)" }}>{m.label}</span>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: `${m.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                  }}
                >
                  {m.icon}
                </div>
              </div>
              <div style={{ fontFamily: "JetBrains Mono", fontWeight: 500, fontSize: 20, color: m.color }}>
                {m.value}
                <span style={{ fontSize: 12, fontFamily: "Inter", color: "var(--muted-foreground)", marginLeft: 3 }}>
                  {m.unit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 15, color: "var(--foreground)", marginBottom: 12 }}>
          Informações rápidas
        </div>

        <div
          className="card"
          style={{
            padding: 0,
            overflow: "hidden",
            background: "linear-gradient(180deg, rgba(7,23,36,0.96) 0%, rgba(15,22,40,0.94) 100%)",
            border: "1px solid rgba(6,182,212,0.18)",
          }}
        >
          <div
            style={{
              padding: "16px 16px 12px",
              background: "linear-gradient(135deg, rgba(6,182,212,0.08), rgba(16,185,129,0.04))",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 15, color: "var(--foreground)" }}>
              Metano e qualidade do ar
            </div>
            <div style={{ fontFamily: "Inter", fontSize: 11, color: "var(--muted-foreground)", marginTop: 4 }}>
              Entenda a origem, a intensidade e o impacto das emissões.
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: 14 }}>
            {TEXT_MATERIALS.slice(0, 3).map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(15,22,40,0.82)",
                  border: "1px solid rgba(148,163,184,0.15)",
                  borderRadius: 14,
                  padding: "14px 14px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(6,182,212,0.12)",
                    border: "1px solid rgba(6,182,212,0.22)",
                    borderRadius: 999,
                    padding: "4px 8px",
                    color: "#7dd3fc",
                    fontFamily: "Outfit",
                    fontWeight: 700,
                    fontSize: 10,
                    marginBottom: 8,
                  }}
                >
                  {item.meta}
                </div>
                <div style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 14, color: "var(--foreground)", marginBottom: 8 }}>
                  {item.title}
                </div>
                <p style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)", lineHeight: 1.6, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 15, color: "var(--foreground)", marginBottom: 12 }}>
          Resumo ambiental
        </div>
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          {SUMMARY.map((item, i) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "13px 16px",
                borderBottom: i < SUMMARY.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: STATUS_COLORS[item.status],
                  }}
                />
                <span style={{ fontFamily: "Inter", fontSize: 13, color: "var(--foreground)" }}>{item.label}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "JetBrains Mono", fontSize: 12, color: "var(--muted-foreground)" }}>
                  {item.value}
                </span>
                <div
                  style={{
                    background: `${STATUS_COLORS[item.status]}18`,
                    borderRadius: 6,
                    padding: "2px 7px",
                    fontFamily: "Outfit",
                    fontSize: 10,
                    fontWeight: 600,
                    color: STATUS_COLORS[item.status],
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {item.status === "normal" ? "Normal" : "Atenção"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
