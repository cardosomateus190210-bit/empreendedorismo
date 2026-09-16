import { useEffect, useState } from "react";
import NavBar, { type Screen } from "./components/NavBar";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Onboarding from "./screens/Onboarding";
import Home from "./screens/Home";
import MapScreen from "./screens/MapScreen";
import Alerts from "./screens/Alerts";
import Impact from "./screens/Impact";
import Profile from "./screens/Profile";
import { isFirebaseConfigured, subscribeToAuth } from "./lib/firebase";

type AppScreen =
  | "splash"
  | "login"
  | "signup"
  | "onboarding"
  | "home"
  | "map"
  | "alerts"
  | "impact"
  | "profile";

const MAIN_SCREENS: Screen[] = ["home", "map", "alerts", "impact", "profile"];

const FRAME_OPTIONS: { id: AppScreen; label: string }[] = [
  { id: "splash", label: "Splash" },
  { id: "login", label: "Login" },
  { id: "signup", label: "Signup" },
  { id: "onboarding", label: "Onboarding" },
  { id: "home", label: "Home" },
  { id: "map", label: "Mapa" },
  { id: "alerts", label: "Alertas" },
  { id: "impact", label: "Impacto" },
  { id: "profile", label: "Perfil" },
];

export default function App() {
  const [screen, setScreen] = useState<AppScreen>("splash");

  useEffect(() => {
    if (!isFirebaseConfigured) return;

    return subscribeToAuth((user) => {
      if (user) setScreen("home");
    });
  }, []);

  const isMainScreen = MAIN_SCREENS.includes(screen as Screen);

  const renderScreen = () => {
    switch (screen) {
      case "splash":
        return <Splash onDone={() => setScreen("login")} />;
      case "login":
        return (
          <Login
            onLogin={() => setScreen("onboarding")}
            onSignup={() => setScreen("signup")}
          />
        );
      case "signup":
        return (
          <Signup
            onDone={() => setScreen("onboarding")}
            onBack={() => setScreen("login")}
          />
        );
      case "onboarding":
        return <Onboarding onDone={() => setScreen("home")} />;
      case "home":
        return <Home />;
      case "map":
        return <MapScreen />;
      case "alerts":
        return <Alerts />;
      case "impact":
        return <Impact />;
      case "profile":
        return <Profile onLogout={() => setScreen("login")} />;
    }
  };

  return (
    <div className="app-frame">
      <div
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          zIndex: 200,
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          maxWidth: 250,
          justifyContent: "flex-end",
        }}
      >
        {FRAME_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => setScreen(option.id)}
            style={{
              border: option.id === screen ? "1px solid rgba(6,182,212,0.5)" : "1px solid rgba(255,255,255,0.08)",
              background: option.id === screen ? "rgba(6,182,212,0.14)" : "rgba(15,22,40,0.9)",
              color: option.id === screen ? "#e8edf8" : "#94a3b8",
              borderRadius: 999,
              padding: "5px 8px",
              fontSize: 10,
              fontFamily: "Outfit",
              fontWeight: option.id === screen ? 700 : 500,
              cursor: "pointer",
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      {renderScreen()}
      {isMainScreen && (
        <NavBar
          active={screen as Screen}
          onChange={(s) => setScreen(s)}
          alertCount={3}
        />
      )}
    </div>
  );
}
