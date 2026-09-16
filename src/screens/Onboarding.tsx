import { useState } from "react";

interface OnboardingProps {
  onDone: () => void;
}

const SLIDES = [
  {
    title: "Mapa acessível",
    text: "Visualize as condições ambientais da sua região de forma simples e intuitiva.",
    color: "#06b6d4",
    illustration: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* Map grid */}
        <rect x="20" y="20" width="160" height="120" rx="12" fill="rgba(6,182,212,0.06)" stroke="rgba(6,182,212,0.15)" strokeWidth="1" />
        {/* Grid lines */}
        {[52, 84, 116, 148].map((x) => (
          <line key={x} x1={x} y1="20" x2={x} y2="140" stroke="rgba(6,182,212,0.08)" strokeWidth="1" />
        ))}
        {[60, 100].map((y) => (
          <line key={y} x1="20" y1={y} x2="180" y2={y} stroke="rgba(6,182,212,0.08)" strokeWidth="1" />
        ))}
        {/* Risk zones */}
        <ellipse cx="80" cy="75" rx="28" ry="20" fill="rgba(16,185,129,0.15)" />
        <ellipse cx="130" cy="90" rx="22" ry="16" fill="rgba(245,158,11,0.15)" />
        <ellipse cx="60" cy="110" rx="18" ry="13" fill="rgba(239,68,68,0.12)" />
        {/* Location pins */}
        <circle cx="80" cy="75" r="5" fill="#10b981" />
        <circle cx="130" cy="90" r="4" fill="#f59e0b" />
        <circle cx="60" cy="110" r="4" fill="#ef4444" />
        {/* Main pin */}
        <path d="M100 50c-8 0-14 6-14 13 0 10 14 22 14 22s14-12 14-22c0-7-6-13-14-13z" fill="#06b6d4" />
        <circle cx="100" cy="63" r="5" fill="white" />
        {/* Labels */}
        <rect x="88" y="100" width="24" height="12" rx="4" fill="rgba(6,182,212,0.2)" />
        <rect x="118" y="80" width="20" height="10" rx="3" fill="rgba(245,158,11,0.2)" />
      </svg>
    ),
  },
  {
    title: "Monitoramento rápido",
    text: "Acompanhe os principais indicadores ambientais em tempo real.",
    color: "#10b981",
    illustration: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* Phone */}
        <rect x="65" y="10" width="70" height="130" rx="14" fill="rgba(15,22,40,0.8)" stroke="rgba(6,182,212,0.2)" strokeWidth="1.5" />
        <rect x="72" y="22" width="56" height="90" rx="6" fill="rgba(6,182,212,0.06)" />
        {/* Dashboard content */}
        <rect x="76" y="26" width="48" height="16" rx="4" fill="rgba(6,182,212,0.12)" />
        <circle cx="100" cy="34" r="6" fill="none" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="100" y="37" textAnchor="middle" fill="#06b6d4" fontSize="5" fontFamily="JetBrains Mono">45</text>
        {/* Metric cards */}
        {[0, 1, 2].map((i) => (
          <rect key={i} x={76 + i * 18} y="50" width="14" height="20" rx="3" fill={["rgba(16,185,129,0.15)", "rgba(6,182,212,0.15)", "rgba(245,158,11,0.15)"][i]} />
        ))}
        {/* Line chart */}
        <polyline
          points="76,100 88,90 96,95 108,82 118,86 124,78"
          stroke="#06b6d4"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="76,100 88,90 96,95 108,82 118,86 124,78"
          stroke="url(#grad)"
          strokeWidth="6"
          fill="none"
          opacity="0.1"
        />
        {/* Decorative elements */}
        <circle cx="40" cy="40" r="12" fill="none" stroke="rgba(16,185,129,0.2)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="160" cy="110" r="16" fill="none" stroke="rgba(6,182,212,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="40" y1="30" x2="65" y2="40" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Diminua emissões",
    text: "Entenda seu impacto e descubra maneiras de tornar suas escolhas mais sustentáveis.",
    color: "#10b981",
    illustration: (
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* City silhouette */}
        <rect x="20" y="100" width="160" height="40" fill="rgba(15,22,40,0.6)" />
        {[30, 50, 70, 90, 110, 130, 150].map((x, i) => {
          const h = [40, 60, 35, 70, 45, 55, 30][i];
          return <rect key={x} x={x} y={100 - h} width="16" height={h} fill="rgba(19,28,53,0.9)" />;
        })}
        {/* Tree */}
        <ellipse cx="160" cy="95" rx="16" ry="18" fill="rgba(16,185,129,0.25)" />
        <rect x="157" y="110" width="6" height="15" fill="rgba(16,185,129,0.2)" />
        <ellipse cx="40" cy="95" rx="12" ry="14" fill="rgba(16,185,129,0.2)" />
        {/* Sun/glow */}
        <circle cx="100" cy="50" r="20" fill="rgba(16,185,129,0.08)" />
        <circle cx="100" cy="50" r="13" fill="rgba(16,185,129,0.12)" />
        <circle cx="100" cy="50" r="8" fill="rgba(16,185,129,0.2)" />
        {/* CO2 reduction arrows */}
        <path d="M70 70 Q80 55 90 60" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
        <path d="M110 60 Q120 55 130 70" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
        {/* Floating leaves */}
        <path d="M55 60 C55 55 62 55 62 60 C62 65 55 65 55 60" fill="rgba(16,185,129,0.3)" />
        <path d="M135 65 C135 60 142 60 142 65 C142 70 135 70 135 65" fill="rgba(16,185,129,0.25)" />
        {/* Bike icon */}
        <circle cx="85" cy="85" r="6" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <circle cx="105" cy="85" r="6" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <path d="M91 85 L95 78 L105 78" stroke="#10b981" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Onboarding({ onDone }: OnboardingProps) {
  const [current, setCurrent] = useState(0);

  const slide = SLIDES[current];
  const isLast = current === SLIDES.length - 1;

  const next = () => {
    if (isLast) onDone();
    else setCurrent((c) => c + 1);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 32px 48px",
        position: "relative",
      }}
    >
      {/* Skip */}
      <button
        onClick={onDone}
        style={{
          position: "absolute",
          top: 56,
          right: 28,
          background: "none",
          border: "none",
          color: "var(--muted-foreground)",
          fontFamily: "Inter",
          fontSize: 14,
          cursor: "pointer",
        }}
      >
        Pular
      </button>

      {/* Illustration */}
      <div
        key={current}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeIn 0.4s ease",
        }}
      >
        <div
          style={{
            width: 240,
            height: 200,
            borderRadius: 28,
            background: "var(--card)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 0 60px ${slide.color}18`,
          }}
        >
          {slide.illustration}
        </div>
      </div>

      {/* Content */}
      <div key={`content-${current}`} style={{ width: "100%", textAlign: "center", animation: "fadeIn 0.4s ease" }}>
        <h2
          style={{
            fontFamily: "Outfit",
            fontWeight: 700,
            fontSize: 26,
            color: "var(--foreground)",
            letterSpacing: -0.5,
            marginBottom: 12,
          }}
        >
          {slide.title}
        </h2>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: 15,
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
            maxWidth: 280,
            margin: "0 auto",
          }}
        >
          {slide.text}
        </p>
      </div>

      {/* Progress dots */}
      <div style={{ display: "flex", gap: 8, margin: "32px 0 24px" }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: 99,
              background: i === current ? slide.color : "var(--muted)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* CTA */}
      <button
        className="btn-primary"
        onClick={next}
        style={{
          width: "100%",
          background: `linear-gradient(135deg, ${slide.color}, ${current === 1 ? "#059669" : "#0891b2"})`,
        }}
      >
        {isLast ? "Começar" : "Continuar"}
      </button>
    </div>
  );
}
