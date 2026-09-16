const SECTIONS = [
  {
    title: "Minha conta",
    items: [
      { label: "Dados pessoais", icon: "👤" },
      { label: "Localização", icon: "📍" },
      { label: "Preferências", icon: "⚙️" },
    ],
  },
  {
    title: "Preferências",
    items: [
      { label: "Notificações", icon: "🔔", toggle: true },
      { label: "Alertas ambientais", icon: "⚠️", toggle: true },
      { label: "Unidades de medida", icon: "📏" },
      { label: "Tema", icon: "🌙" },
    ],
  },
  {
    title: "Privacidade",
    items: [
      { label: "Privacidade e segurança", icon: "🔒" },
      { label: "Termos de uso", icon: "📋" },
    ],
  },
];

export default function Profile() {
  return (
    <div className="screen" style={{ background: "var(--background)", paddingBottom: 96 }}>
      {/* Header background */}
      <div
        style={{
          background: "linear-gradient(160deg, rgba(6,182,212,0.06) 0%, transparent 60%)",
          padding: "52px 20px 24px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 24, color: "var(--foreground)", letterSpacing: -0.3 }}>
            Perfil
          </h1>
          <button
            style={{
              background: "var(--secondary)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "6px 12px",
              fontFamily: "Outfit",
              fontSize: 12,
              fontWeight: 500,
              color: "#06b6d4",
              cursor: "pointer",
            }}
          >
            Editar
          </button>
        </div>

        {/* User info */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 20 }}>
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 22,
              background: "linear-gradient(135deg, rgba(6,182,212,0.2), rgba(16,185,129,0.15))",
              border: "2px solid rgba(6,182,212,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Outfit",
              fontWeight: 700,
              fontSize: 26,
              color: "#06b6d4",
              flexShrink: 0,
            }}
          >
            MS
          </div>
          <div>
            <div style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 20, color: "var(--foreground)" }}>
              Mateus Silva
            </div>
            <div style={{ fontFamily: "Inter", fontSize: 13, color: "var(--muted-foreground)", marginTop: 2 }}>
              mateus@email.com
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#06b6d4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              <span style={{ fontFamily: "Inter", fontSize: 12, color: "#06b6d4" }}>São Paulo, SP</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          {[
            { label: "Dias ativos", value: "47" },
            { label: "Alertas recebidos", value: "23" },
            { label: "CO₂ reduzido", value: "180kg" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                flex: 1,
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "10px 8px",
                textAlign: "center",
              }}
            >
              <div style={{ fontFamily: "JetBrains Mono", fontWeight: 500, fontSize: 16, color: "#06b6d4" }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: "Inter", fontSize: 10, color: "var(--muted-foreground)", marginTop: 2 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div style={{ padding: "20px" }}>
        {SECTIONS.map((section) => (
          <div key={section.title} style={{ marginBottom: 20 }}>
            <div
              style={{
                fontFamily: "Outfit",
                fontSize: 11,
                fontWeight: 600,
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 8,
              }}
            >
              {section.title}
            </div>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              {section.items.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    borderBottom: i < section.items.length - 1 ? "1px solid var(--border)" : "none",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 16 }}>{item.icon}</span>
                    <span style={{ fontFamily: "Inter", fontSize: 14, color: "var(--foreground)" }}>{item.label}</span>
                  </div>
                  {"toggle" in item ? (
                    <div
                      style={{
                        width: 40,
                        height: 22,
                        borderRadius: 99,
                        background: "rgba(6,182,212,0.2)",
                        border: "1px solid rgba(6,182,212,0.3)",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          right: 3,
                          top: 3,
                          width: 14,
                          height: 14,
                          borderRadius: "50%",
                          background: "#06b6d4",
                        }}
                      />
                    </div>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7fa3" strokeWidth="1.8">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <button
          style={{
            width: "100%",
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.15)",
            borderRadius: 14,
            padding: "14px",
            fontFamily: "Outfit",
            fontWeight: 600,
            fontSize: 15,
            color: "#ef4444",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" strokeLinecap="round" />
            <polyline points="16 17 21 12 16 7" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="21" y1="12" x2="9" y2="12" strokeLinecap="round" />
          </svg>
          Sair
        </button>

        <p style={{ fontFamily: "JetBrains Mono", fontSize: 10, color: "var(--muted-foreground)", textAlign: "center", marginTop: 16 }}>
          PlaneTech v2.4.1 · Build 2026.09
        </p>
      </div>
    </div>
  );
}
