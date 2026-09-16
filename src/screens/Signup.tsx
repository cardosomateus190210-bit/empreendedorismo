import { useState } from "react";
import { getAuthErrorMessage, registerUser } from "../lib/firebase";

interface SignupProps {
  onDone: () => void;
  onBack: () => void;
}

export default function Signup({ onDone, onBack }: SignupProps) {
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    setError("");

    if (!name.trim() || !email.trim() || !password || !passwordConfirmation) {
      setError("Preencha todos os campos.");
      return;
    }
    if (password !== passwordConfirmation) {
      setError("As senhas não são iguais.");
      return;
    }
    if (!agreed) {
      setError("Aceite os termos para criar sua conta.");
      return;
    }

    setIsLoading(true);
    try {
      await registerUser(name.trim(), email.trim(), password);
      onDone();
    } catch (signupError) {
      setError(getAuthErrorMessage(signupError));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="screen" style={{ background: "var(--background)", padding: "0 28px 48px" }}>
      {/* Header */}
      <div style={{ paddingTop: 56, display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
        <button
          onClick={onBack}
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "var(--secondary)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8edf8" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div>
          <h1 style={{ fontFamily: "Outfit", fontWeight: 700, fontSize: 24, color: "var(--foreground)", letterSpacing: -0.5 }}>
            Criar sua conta
          </h1>
          <p style={{ fontFamily: "Inter", fontSize: 13, color: "var(--muted-foreground)" }}>Comece a monitorar agora</p>
        </div>
      </div>

      {/* Decorative illustration */}
      <div
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: 20,
          padding: 20,
          marginBottom: 28,
          display: "flex",
          alignItems: "center",
          gap: 16,
          animation: "fadeIn 0.5s ease",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.1))",
            border: "1px solid rgba(16,185,129,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="6" fill="rgba(16,185,129,0.3)" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="10" stroke="rgba(16,185,129,0.2)" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="16" cy="16" r="14" stroke="rgba(6,182,212,0.1)" strokeWidth="1.5" strokeDasharray="2 4" />
            <circle cx="16" cy="16" r="2.5" fill="#10b981" />
          </svg>
        </div>
        <div>
          <div style={{ fontFamily: "Outfit", fontWeight: 600, fontSize: 14, color: "var(--foreground)" }}>
            Monitoramento em tempo real
          </div>
          <div style={{ fontFamily: "Inter", fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>
            Acesse dados ambientais da sua região instantaneamente.
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { label: "Nome completo", placeholder: "Mateus Silva", type: "text", value: name, setValue: setName },
          { label: "E-mail", placeholder: "mateus@email.com", type: "email", value: email, setValue: setEmail },
          { label: "Senha", placeholder: "••••••••", type: "password", value: password, setValue: setPassword },
          { label: "Confirmar senha", placeholder: "••••••••", type: "password", value: passwordConfirmation, setValue: setPasswordConfirmation },
        ].map((field) => (
          <div key={field.label}>
            <label
              style={{
                fontFamily: "Outfit",
                fontSize: 13,
                fontWeight: 500,
                color: "#94a3b8",
                display: "block",
                marginBottom: 8,
              }}
            >
              {field.label}
            </label>
            <input
              className="input-field"
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onChange={(event) => field.setValue(event.target.value)}
            />
          </div>
        ))}

        {/* Terms */}
        <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 12,
            cursor: "pointer",
            marginTop: 4,
          }}
        >
          <div
            onClick={() => setAgreed(!agreed)}
            style={{
              width: 20,
              height: 20,
              borderRadius: 6,
              border: `2px solid ${agreed ? "#06b6d4" : "rgba(255,255,255,0.15)"}`,
              background: agreed ? "rgba(6,182,212,0.15)" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.2s",
              marginTop: 1,
            }}
          >
            {agreed && (
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <span style={{ fontFamily: "Inter", fontSize: 13, color: "var(--muted-foreground)", lineHeight: 1.5 }}>
            Aceito os{" "}
            <span style={{ color: "#06b6d4" }}>Termos de Uso</span> e a{" "}
            <span style={{ color: "#06b6d4" }}>Política de Privacidade</span>
          </span>
        </label>

        {error && (
          <p style={{ color: "#f87171", fontFamily: "Inter", fontSize: 13 }} role="alert">
            {error}
          </p>
        )}

        <button className="btn-primary" onClick={handleSignup} disabled={isLoading} style={{ marginTop: 8 }}>
          {isLoading ? "Criando..." : "Criar conta"}
        </button>

        <div style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "Inter", fontSize: 14, color: "var(--muted-foreground)" }}>
            Já tem conta?{" "}
          </span>
          <button
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              color: "#06b6d4",
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
