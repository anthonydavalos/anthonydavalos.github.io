export type EvidenceStatus =
  | "verified-third-party"
  | "public-owner-record"
  | "archived-document"
  | "source-unavailable"
  | "current-snapshot-differs";

export interface AchievementSource {
  label: string;
  url?: string;
  status: EvidenceStatus;
  checkedAt: string;
  availability: string;
  supports: string[];
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  organizer: string;
  position: string;
  alias: string;
  competitionType: string;
  period: string;
  returnValue: string;
  participants: string;
  prize: string;
  summary: string;
  professionalReading: string;
  discrepancy?: string;
  sources: AchievementSource[];
}

const checkedAt = "2 de agosto de 2026";

export const achievements: Achievement[] = [
  {
    id: "grand-prix-trading-copa-avatrade-2017",
    year: "2017",
    title: "Grand Prix Trading Copa AvaTrade",
    organizer: "Tutores FX y AvaTrade",
    position: "Primer lugar",
    alias: "Softhony",
    competitionType: "Competencia de mercados financieros",
    period: "Octubre de 2017",
    returnValue: "346 %",
    participants: "742",
    prize:
      "Premio anunciado de USD 5,000 y una beca; bolsa total anunciada superior a USD 20,000",
    summary:
      "Anthony Davalos, bajo el alias Softhony, encabezó una clasificación en la que participantes peruanos ocuparon los tres primeros lugares. El resultado histórico publicado fue de 346 %.",
    professionalReading:
      "Este reconocimiento refleja ejecución cuantitativa bajo reglas de competencia, seguimiento disciplinado de una estrategia y capacidad para sostener decisiones en un entorno de alta presión.",
    discrepancy:
      "La cuenta directa de Myfxbook conserva el nombre del torneo, el alias y AvaTrade, pero incluye operaciones posteriores a 2017. Sus métricas actuales no representan el cierre de la competencia y se muestran únicamente como una referencia de identidad y continuidad de la cuenta.",
    sources: [
      {
        label: "Perfil público de LinkedIn",
        url: "https://pe.linkedin.com/in/anthonydavalos",
        status: "public-owner-record",
        checkedAt,
        availability: "Disponible públicamente",
        supports: [
          "primer lugar",
          "alias Softhony",
          "retorno de 346 %",
          "742 participantes",
          "organizadores",
          "bolsa total superior a USD 20,000",
        ],
      },
      {
        label: "Cuenta Grand Prix 2017 en Myfxbook",
        url: "https://www.myfxbook.com/members/Softhony/grand-prix-del-trading-2017/7416291",
        status: "current-snapshot-differs",
        checkedAt,
        availability: "Disponible; contiene actividad posterior al torneo",
        supports: [
          "nombre de la cuenta",
          "alias Softhony",
          "AvaTrade",
          "cuenta real",
        ],
      },
      {
        label: "Registro público del propietario y bases adjuntas",
        url: "https://www.forexpeacearmy.com/community/threads/denuncia-contra-avatrade-por-supuesta-estafa-resolved.67222/",
        status: "public-owner-record",
        checkedAt,
        availability: "Disponible públicamente",
        supports: [
          "primer lugar",
          "premio anunciado de USD 5,000",
          "beca de trading",
          "bases históricas del concurso",
        ],
      },
      {
        label: "Clasificación histórica de Tutores FX",
        url: "https://tutores-fx.com/lp/torneo-grand-prix/#qx-section-39264",
        status: "source-unavailable",
        checkedAt,
        availability:
          "El enlace histórico ya no ofrece una verificación estable",
        supports: ["clasificación y resultados históricos"],
      },
      {
        label: "Exportación archivada del perfil profesional",
        status: "archived-document",
        checkedAt,
        availability: "Copia privada conservada; no publicada",
        supports: [
          "cronología",
          "posición",
          "retorno",
          "participantes",
          "bolsa total",
        ],
      },
    ],
  },
  {
    id: "fxstreet-winter-trading-competition-2019",
    year: "2019",
    title: "FXStreet Winter Trading Competition",
    organizer: "FXStreet",
    position: "Primer lugar",
    alias: "AD_711",
    competitionType: "Competencia demo",
    period: "17 de marzo al 12 de abril de 2019",
    returnValue: "245,741 %",
    participants: "No informado; registro histórico FX Blue 925",
    prize: "No informado en las fuentes conservadas",
    summary:
      "Con el alias AD_711, Anthony Davalos obtuvo el primer lugar de la competencia demo de FXStreet. El registro profesional histórico consigna un retorno de 245,741 % durante el periodo del concurso.",
    professionalReading:
      "La competencia exigió adaptar tamaño, ritmo y exposición dentro de un periodo corto. El resultado se presenta como desempeño de concurso demo, separado de cualquier expectativa de inversión real.",
    discrepancy:
      "Los enlaces originales de FXStreet y del registro 925 de FX Blue se conservan por trazabilidad, aunque actualmente no permiten recuperar de forma estable la clasificación histórica completa. La cifra permanece respaldada por el registro público del propietario y su copia archivada.",
    sources: [
      {
        label: "Perfil público de LinkedIn",
        url: "https://pe.linkedin.com/in/anthonydavalos",
        status: "public-owner-record",
        checkedAt,
        availability: "Disponible públicamente",
        supports: [
          "primer lugar",
          "alias AD_711",
          "modalidad demo",
          "periodo",
          "retorno de 245,741 %",
          "registro FX Blue 925",
        ],
      },
      {
        label: "Registro histórico FX Blue 925",
        url: "https://www.fxblue.com/competitions/ViewCompetition.aspx?id=925",
        status: "source-unavailable",
        checkedAt,
        availability: "El enlace histórico no devuelve la ficha verificable",
        supports: ["track record de la competencia"],
      },
      {
        label: "Página histórica del concurso en FXStreet",
        url: "https://www.fxstreet.com/info/contest",
        status: "source-unavailable",
        checkedAt,
        availability: "La ruta histórica ya no publica el concurso de 2019",
        supports: ["organizador y convocatoria"],
      },
      {
        label: "Exportación archivada del perfil profesional",
        status: "archived-document",
        checkedAt,
        availability: "Copia privada conservada; no publicada",
        supports: [
          "primer lugar",
          "alias",
          "modalidad",
          "periodo",
          "retorno",
          "URL histórica de FX Blue",
        ],
      },
    ],
  },
  {
    id: "copa-america-demo-trading-equiti-2020",
    year: "2020",
    title: "Copa América Demo Trading Equiti LATAM",
    organizer: "Equiti LATAM",
    position: "Primer lugar",
    alias: "Anthony · Perú",
    competitionType: "Competencia demo latinoamericana",
    period:
      "15 de noviembre al 4 de diciembre de 2020; resultados publicados el 15 de diciembre",
    returnValue: "Cerca de 3,000 %",
    participants: "Más de 2,000",
    prize: "Reconocimiento de primer lugar; premio económico no informado",
    summary:
      "Anthony, representante de Perú, obtuvo el primer lugar entre más de 2,000 participantes de Latinoamérica. La publicación histórica sitúa el beneficio final cerca de 3,000 %.",
    professionalReading:
      "La descripción histórica destaca una estrategia técnica, incrementos graduales del volumen y control de exposición durante la competencia. La presentación actual prioriza el contexto y separa el cierre publicado de las métricas posteriores de la cuenta.",
    discrepancy:
      "Myfxbook muestra actualmente 2,163.20 % para la cuenta demo asociada, con última actualización registrada el 10 de marzo de 2021. La publicación histórica reporta un cierre cercano a 3,000 %. Son fotografías de momentos distintos y no se tratan como cifras equivalentes.",
    sources: [
      {
        label: "Perfil público de LinkedIn",
        url: "https://pe.linkedin.com/in/anthonydavalos",
        status: "public-owner-record",
        checkedAt,
        availability: "Disponible públicamente",
        supports: [
          "primer lugar",
          "representación de Perú",
          "más de 2,000 participantes",
          "resultado cercano a 3,000 %",
          "cronología",
        ],
      },
      {
        label: "Cuenta demo asociada en Myfxbook",
        url: "https://www.myfxbook.com/members/Softhony/torneo-copa-am%C3%A9rica-demo-trading/7499210",
        status: "current-snapshot-differs",
        checkedAt,
        availability:
          "Disponible; última actualización registrada en marzo de 2021",
        supports: [
          "alias Softhony",
          "cuenta demo",
          "Equiti",
          "ganancia actual de 2,163.20 %",
        ],
      },
      {
        label: "Publicación histórica de PCM Finance",
        url: "https://www.facebook.com/pcmfinance/posts/2069305426537612",
        status: "source-unavailable",
        checkedAt,
        availability:
          "El enlace se conserva, pero no ofrece acceso público estable",
        supports: ["resultados finales y participantes"],
      },
      {
        label: "Exportación archivada del perfil profesional",
        status: "archived-document",
        checkedAt,
        availability: "Copia privada conservada; no publicada",
        supports: [
          "posición",
          "país",
          "participantes",
          "resultado histórico",
          "cronología",
        ],
      },
    ],
  },
];
