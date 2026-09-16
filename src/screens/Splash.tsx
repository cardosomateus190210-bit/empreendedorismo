import { useEffect } from "react";

interface SplashProps {
  onDone: () => void;
}

export default function Splash({ onDone }: SplashProps) {
  useEffect(() => {
    const t = setTimeout(onDone, 2800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(160deg, #080d1a 0%, #0a1628 50%, #061020 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          animation: "pulse-ring 3s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Logo area */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          animation: "fadeIn 0.8s ease both",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 28,
            background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(8,145,178,0.25))",
            border: "1px solid rgba(6,182,212,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 40px rgba(6,182,212,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Leaf + signal waves */}
            <path
              d="M24 8C16 8 10 16 10 24c0 4 1.5 7.5 4 10l10-10"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M24 8c8 0 14 8 14 16 0 4-1.5 7.5-4 10L24 24"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="24" cy="24" r="4" fill="#06b6d4" />
            <path d="M32 16c2.5 2.5 4 6 4 8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <path d="M36 12c4 4 6 9.5 6 12" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
          </svg>
        </div>

        {/* Brand */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "Outfit",
              fontWeight: 800,
              fontSize: 38,
              letterSpacing: -1,
              background: "linear-gradient(135deg, #e8edf8 30%, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            PlaneTech
          </div>
          <div
            style={{
              fontFamily: "Outfit",
              fontWeight: 400,
              fontSize: 13,
              color: "#6b7fa3",
              marginTop: 8,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            Environmental Intelligence
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "Inter",
            fontSize: 15,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 240,
            lineHeight: 1.6,
            animation: "fadeIn 1s 0.4s ease both",
            opacity: 0,
          }}
        >
          Tecnologia para entender o ambiente ao seu redor.
        </p>
      </div>

      {/* Loading indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          animation: "fadeIn 0.6s 1s ease both",
          opacity: 0,
        }}
      >
        <div
          style={{
            width: 40,
            height: 2,
            background: "var(--secondary)",
            borderRadius: 99,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #06b6d4, #10b981)",
              borderRadius: 99,
              animation: "loadBar 2s ease forwards",
            }}
          />
        </div>
        <span style={{ fontFamily: "JetBrains Mono", fontSize: 11, color: "#6b7fa3", letterSpacing: 1 }}>
          INICIALIZANDO...
        </span>
      </div>

      <style>{`
        @keyframes loadBar {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
