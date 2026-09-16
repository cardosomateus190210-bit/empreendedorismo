const LEARNING_TOPICS = [
  {
    title: "O que é metano?",
    meta: "Explicação geral · 3 min",
    description:
      "O metano é um gás de efeito estufa muito potente, liberado por atividades humanas e também por alguns processos naturais. Ele tem grande influência no aquecimento do planeta quando liberado em grandes quantidades e por isso precisa ser monitorado com atenção.",
  },
  {
    title: "Principais causas",
    meta: "Origem e emissões · 4 min",
    description:
      "As maiores fontes de metano vêm da agricultura, do manejo de resíduos, de aterros sanitários, do esgoto, de vazamentos em petróleo e gás e de processos industriais. Quando há falhas na infraestrutura ou acúmulo de material orgânico, esse gás pode aumentar rapidamente.",
  },
  {
    title: "Consequências para o clima",
    meta: "Impacto ambiental · 4 min",
    description:
      "O metano contribui para o aumento do efeito estufa e prejudica a qualidade do ar. Em concentrações elevadas, ele pode agravar riscos para a saúde, especialmente em regiões com baixa ventilação ou com outros poluentes presentes ao mesmo tempo.",
  },
  {
    title: "Como reduzir as emissões",
    meta: "Ações práticas · 3 min",
    description:
      "Melhor gerenciamento de resíduos, monitoramento de vazamentos, uso de tecnologias mais eficientes e aproveitamento do biogás ajudam a controlar a liberação de metano. Quando a origem é identificada cedo, a ação corre mais rápido e o impacto fica menor.",
  },
  {
    title: "Por que acompanhar isso no app",
    meta: "Observação e decisão · 2 min",
    description:
      "Monitorar gases, temperatura, umidade e outros indicadores permite entender melhor o ambiente e responder antes que o risco aumente. Essa análise ajuda cidades, indústrias e comunidades a tomarem decisões mais informadas e responsáveis.",
  },
];

export default function Learning() {
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
          padding: "52px 20px 16px",
          background: "linear-gradient(180deg, rgba(6,182,212,0.04) 0%, transparent 100%)",
        }}
      >
        <div
          style={{
            fontFamily: "Inter",
            fontSize: 12,
            color: "var(--muted-foreground)",
            textTransform: "uppercase",
            letterSpacing: 1.2,
            marginBottom: 6,
          }}
        >
          Aprender
        </div>
        <h1
          style={{
            fontFamily: "Outfit",
            fontWeight: 700,
            fontSize: 24,
            color: "var(--foreground)",
            letterSpacing: -0.3,
            margin: 0,
          }}
        >
          Metano e qualidade do ar
        </h1>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: 13,
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
            marginTop: 10,
          }}
        >
          Entenda a origem, o impacto e as ações que ajudam a reduzir riscos ambientais e de saúde.
        </p>
      </div>

      <div style={{ padding: "12px 20px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {LEARNING_TOPICS.map((item) => (
            <div
              key={item.title}
              style={{
                background: "linear-gradient(180deg, rgba(15,22,40,0.92), rgba(15,22,40,0.82))",
                border: "1px solid rgba(148,163,184,0.15)",
                borderRadius: 16,
                padding: 14,
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
              <div
                style={{
                  fontFamily: "Outfit",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--foreground)",
                  marginBottom: 8,
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: 12,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
