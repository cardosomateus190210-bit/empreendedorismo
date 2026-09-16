import { useState } from "react";

interface LoginProps {
  onLogin: () => void;
  onSignup: () => void;
}

export default function Login({ onLogin, onSignup }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <div
      className="screen"
      style={{
        background: "var(--background)",
        padding: "0 28px",
        paddingBottom: 40,
      }}
    >
      {/* Top decoration */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo */}
      <div style={{ paddingTop: 72, paddingBottom: 40, textAlign: "center", animation: "fadeIn 0.5s ease" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 18,
            background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(8,145,178,0.25))",
            border: "1px solid rgba(6,182,212,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
            <path d="M24 8C16 8 10 16 10 24c0 4 1.5 7.5 4 10l10-10" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M24 8c8 0 14 8 14 16 0 4-1.5 7.5-4 10L24 24" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="24" cy="24" r="4" fill="#06b6d4" />
          </svg>
        </div>
        <div
          style={{
            fontFamily: "Outfit",
            fontWeight: 700,
            fontSize: 22,
            color: "var(--foreground)",
            letterSpacing: -0.5,
          }}
        >
          PlaneTech
        </div>
      </div>

      {/* Title */}
      <div style={{ marginBottom: 32, animation: "fadeIn 0.5s 0.1s ease both", opacity: 0 }}>
        <h1
          style={{
            fontFamily: "Outfit",
            fontWeight: 700,
            fontSize: 28,
            color: "var(--foreground)",
            letterSpacing: -0.5,
            marginBottom: 6,
          }}
        >
          Bem-vindo de volta!
        </h1>
        <p style={{ fontFamily: "Inter", fontSize: 14, color: "var(--muted-foreground)" }}>
          Faça login para continuar monitorando.
        </p>
      </div>

      {/* Form */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14, animation: "fadeIn 0.5s 0.2s ease both", opacity: 0 }}>
        <div>
          <label style={{ fontFamily: "Outfit", fontSize: 13, fontWeight: 500, color: "#94a3b8", display: "block", marginBottom: 8 }}>
            E-mail
          </label>
          <input
            className="input-field"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label style={{ fontFamily: "Outfit", fontSize: 13, fontWeight: 500, color: "#94a3b8", display: "block", marginBottom: 8 }}>
            Senha
          </label>
          <div style={{ position: "relative" }}>
            <input
              className="input-field"
              type={showPass ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingRight: 48 }}
            />
            <button
              onClick={() => setShowPass(!showPass)}
              style={{
                position: "absolute",
                right: 14,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "var(--muted-foreground)",
                cursor: "pointer",
                padding: 4,
              }}
            >
              {showPass ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div style={{ textAlign: "right", marginTop: -4 }}>
          <button style={{ background: "none", border: "none", color: "#06b6d4", fontFamily: "Inter", fontSize: 13, cursor: "pointer" }}>
            Esqueci minha senha
          </button>
        </div>

        <button className="btn-primary" onClick={onLogin} style={{ marginTop: 6 }}>
          Entrar
        </button>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }}>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
          <span style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)" }}>ou continue com</span>
          <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
        </div>

        {/* Social logins */}
        <div style={{ display: "flex", gap: 10 }}>
          {[
            {
              label: "Google",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              ),
            },
            {
              label: "Apple",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--foreground)">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              ),
            },
            {
              label: "Microsoft",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <rect x="1" y="1" width="10" height="10" fill="#f25022" />
                  <rect x="13" y="1" width="10" height="10" fill="#7fba00" />
                  <rect x="1" y="13" width="10" height="10" fill="#00a4ef" />
                  <rect x="13" y="13" width="10" height="10" fill="#ffb900" />
                </svg>
              ),
            },
          ].map((s) => (
            <button
              key={s.label}
              className="btn-secondary"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px" }}
            >
              {s.icon}
              <span style={{ fontSize: 13 }}>{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sign up */}
      <div style={{ textAlign: "center", marginTop: 32, animation: "fadeIn 0.5s 0.4s ease both", opacity: 0 }}>
        <span style={{ fontFamily: "Inter", fontSize: 14, color: "var(--muted-foreground)" }}>
          Não tem conta?{" "}
        </span>
        <button
          onClick={onSignup}
          style={{ background: "none", border: "none", color: "#06b6d4", fontFamily: "Inter", fontSize: 14, fontWeight: 600, cursor: "pointer" }}
        >
          Criar conta
        </button>
      </div>
    </div>
  );
}
