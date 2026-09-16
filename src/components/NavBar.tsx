type Screen = "home" | "map" | "alerts" | "impact" | "profile";

const NAV_ITEMS: { id: Screen; label: string; icon: (active: boolean) => JSX.Element }[] = [
  {
    id: "home",
    label: "Home",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#06b6d4" : "none"} stroke={active ? "#06b6d4" : "#6b7fa3"} strokeWidth="1.8">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" strokeLinejoin="round" />
        <path d="M9 21V12h6v9" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "map",
    label: "Mapa",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#06b6d4" : "#6b7fa3"} strokeWidth="1.8">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" strokeLinejoin="round" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    id: "alerts",
    label: "Alertas",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#06b6d4" : "#6b7fa3"} strokeWidth="1.8">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" strokeLinejoin="round" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    id: "impact",
    label: "Impacto",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#06b6d4" : "#6b7fa3"} strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Perfil",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#06b6d4" : "#6b7fa3"} strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

interface NavBarProps {
  active: Screen;
  onChange: (s: Screen) => void;
  alertCount?: number;
}

export default function NavBar({ active, onChange, alertCount = 3 }: NavBarProps) {
  return (
    <nav
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(8,13,26,0.96)",
        backdropFilter: "blur(20px)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        display: "flex",
        padding: "10px 8px 24px",
        zIndex: 100,
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = item.id === active;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "6px 4px",
              position: "relative",
              transition: "transform 0.15s",
            }}
          >
            <span style={{ position: "relative" }}>
              {item.icon(isActive)}
              {item.id === "alerts" && alertCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: -3,
                    right: -5,
                    background: "#ef4444",
                    color: "white",
                    fontSize: 9,
                    fontWeight: 700,
                    fontFamily: "Outfit",
                    borderRadius: 99,
                    minWidth: 15,
                    height: 15,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 3px",
                  }}
                >
                  {alertCount}
                </span>
              )}
            </span>
            <span
              style={{
                fontSize: 10,
                fontFamily: "Outfit",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#06b6d4" : "#6b7fa3",
                letterSpacing: 0.2,
              }}
            >
              {item.label}
            </span>
            {isActive && (
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 28,
                  height: 2,
                  background: "linear-gradient(90deg, #06b6d4, #0891b2)",
                  borderRadius: 99,
                }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}

export type { Screen };
