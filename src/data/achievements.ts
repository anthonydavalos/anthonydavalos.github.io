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

export interface QuantitativeRecord {
  id: string;
  title: string;
  status: string;
  summary: string;
  professionalReading: string;
  methodology: string;
  facts: Array<{ label: string; value: string }>;
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
      "USD 5,000 y una beca; bolsa total superior a USD 20,000. El retiro exigía operar 500 lotes",
    summary:
      "Anthony Davalos, bajo el alias Softhony, encabezó la clasificación archivada de Tutores FX con una equity de 446,040.08 sobre 100,000 iniciales. El resultado equivale al retorno histórico publicado de 346 %.",
    professionalReading:
      "De acuerdo con el propietario, la cuenta real vinculada al premio de USD 5,000 creció hasta alrededor de USD 40,000 en pocos meses. Myfxbook registra un máximo de USD 45,099.87, 556 lotes operados y USD 45,000 en retiros: una experiencia que combina ejecución cuantitativa, cumplimiento de volumen y gestión posterior del capital.",
    discrepancy:
      "La ficha actual de Myfxbook agrega depósitos y operaciones posteriores al torneo, por lo que su porcentaje acumulado no representa el cierre competitivo. Según el propietario, la caída visible del balance corresponde al retiro realizado y el volumen elevado requerido se completó en un periodo de pocos meses. El registro público del caso documenta el requisito de 500 lotes y confirma finalmente la recepción del dinero del premio.",
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
        status: "verified-third-party",
        checkedAt,
        availability:
          "Disponible; seguimiento de la cuenta real vinculada al premio con actividad posterior al torneo",
        supports: [
          "nombre de la cuenta",
          "alias Softhony",
          "AvaTrade",
          "cuenta real",
          "máximo de USD 45,099.87",
          "556 lotes",
          "USD 45,000 en retiros",
        ],
      },
      {
        label: "Registro público del premio y su resolución",
        url: "https://www.forexpeacearmy.com/community/threads/denuncia-contra-avatrade-por-supuesta-estafa-resolved.67222/",
        status: "public-owner-record",
        checkedAt,
        availability: "Disponible públicamente",
        supports: [
          "primer lugar",
          "premio de USD 5,000",
          "beca de trading",
          "bases históricas del concurso",
          "requisito de 500 lotes para retirar",
          "confirmación final de recepción del dinero",
        ],
      },
      {
        label: "Snapshot archivado de la clasificación de Tutores FX",
        url: "https://web.archive.org/web/20220528042525/http://tutores-fx.com/lp/torneo-grand-prix/#qx-section-39264",
        status: "archived-document",
        checkedAt,
        availability:
          "Snapshot del 28 de mayo de 2022 disponible en Internet Archive",
        supports: [
          "primer lugar",
          "alias Softhony",
          "Perú",
          "equity final de 446,040.08",
          "capital inicial de 100,000",
          "bolsa superior a USD 20,000",
        ],
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
    organizer: "FXStreet y 24Option",
    position: "Primer lugar",
    alias: "AD_711",
    competitionType: "Competencia demo",
    period: "17 de marzo al 12 de abril de 2019",
    returnValue: "245,741 %",
    participants: "No informado; registro histórico FX Blue 925",
    prize:
      "USD 5,000 como depósito en efectivo en una cuenta real de 24Option; bolsa total de USD 10,000",
    summary:
      "La página oficial de FXStreet identifica a AD_711 en el primer lugar y le asigna un depósito en efectivo de USD 5,000. El registro profesional histórico consigna un retorno de 245,741 % durante el periodo del concurso.",
    professionalReading:
      "La competencia demo exigió adaptar tamaño, ritmo y exposición dentro de un periodo corto. El primer lugar convirtió ese desempeño competitivo en un premio acreditable a una cuenta real, sin presentar el resultado como expectativa de inversión futura.",
    discrepancy:
      "FXStreet continúa verificando públicamente el primer lugar, el alias, las fechas y el premio. El retorno de 245,741 % se conserva en el registro público del propietario y su copia archivada, mientras que el antiguo track record 925 de FX Blue ya no devuelve una ficha estable. Las fuentes respaldan campos complementarios.",
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
        label: "Página oficial del concurso en FXStreet",
        url: "https://www.fxstreet.com/info/contest",
        status: "verified-third-party",
        checkedAt,
        availability: "Disponible públicamente",
        supports: [
          "primer lugar",
          "alias AD_711",
          "competencia demo",
          "periodo del 17 de marzo al 12 de abril",
          "premio de USD 5,000",
          "depósito en cuenta real",
          "bolsa total de USD 10,000",
          "24Option",
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
      "La descripción histórica destaca una estrategia técnica, incrementos graduales del volumen y control de exposición durante la competencia. El resultado reconocido corresponde al instante preciso en que terminó el torneo; la presentación actual lo separa de cualquier operación procesada después del cierre.",
    discrepancy:
      "La controversia se limita al momento de medición: tras terminar el concurso se incorporaron operaciones posteriores en la cuenta asociada. El resultado oficial de primer lugar considera la rentabilidad cercana a 3,000 % registrada en el instante preciso del cierre. Myfxbook muestra actualmente 2,163.20 %, con última actualización registrada el 10 de marzo de 2021; es una fotografía posterior y no reemplaza la cifra de cierre.",
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

export const currentQuantitativeRecord: QuantitativeRecord = {
  id: "gestion-cuantitativa-ebc-2026",
  title: "Gestión cuantitativa actual · EBC Financial Group",
  status: "Cuenta real · seguimiento activo en 2026",
  summary:
    "Cuenta real en USD gestionada manualmente con enfoque técnico. La instantánea consultada muestra actividad durante 2025 y 2026, con 259 operaciones acumuladas y actualización reciente.",
  professionalReading:
    "El flujo externo de capital está equilibrado: USD 1,092.40 depositados equivalen a USD 1,092.36 retirados más USD 0.04 de saldo. Bajo esta lectura de caja, el capital neto aportado y aún expuesto es USD 0.00.",
  methodology:
    "El flujo externo neto de USD 0.00 no equivale a una rentabilidad operativa de 0 %. Myfxbook muestra un profit de -USD 124.05, interest de -USD 7.12, gain de -99.90 % y drawdown de 99.92 %. El gain utiliza retorno ponderado por tiempo para aislar depósitos y retiros; el drawdown conserva la mayor caída observada de balance, equity o crecimiento. Cada indicador responde a una pregunta diferente.",
  facts: [
    {
      label: "Seguimiento",
      value:
        "Actividad visible en 2025 y 2026 · consultada el 2 de agosto de 2026",
    },
    {
      label: "Modalidad",
      value: "Real (USD) · técnica · manual · MetaTrader 4 · 1:500",
    },
    {
      label: "Flujo neto de capital",
      value:
        "USD 1,092.36 retirados + USD 0.04 de saldo - USD 1,092.40 depositados = USD 0.00",
    },
    {
      label: "Actividad acumulada",
      value: "259 operaciones · 4.54 lotes",
    },
    {
      label: "Instantánea de 2026",
      value: "78 operaciones · USD 64.17 de resultado en el año",
    },
    {
      label: "Métricas de Myfxbook",
      value:
        "Profit -USD 124.05 · interest -USD 7.12 · gain -99.90 % · gain absoluto -10.20 % · drawdown 99.92 %",
    },
  ],
  sources: [
    {
      label: "Cuenta EBC Financial Group en Myfxbook",
      url: "https://www.myfxbook.com/members/Softhony/ebc-financial-group/11404510",
      status: "current-snapshot-differs",
      checkedAt,
      availability: "Disponible y actualizada durante la consulta",
      supports: [
        "cuenta real",
        "EBC Financial Group",
        "modalidad manual",
        "depósitos",
        "retiros",
        "saldo",
        "actividad 2025-2026",
        "259 operaciones",
        "profit e interest",
        "métricas de gain y drawdown",
      ],
    },
    {
      label: "Metodología oficial de gain de Myfxbook",
      url: "https://www.myfxbook.com/help/knowledge-base/gain/",
      status: "verified-third-party",
      checkedAt,
      availability: "Disponible públicamente",
      supports: [
        "uso del retorno ponderado por tiempo",
        "tratamiento de depósitos y retiros",
      ],
    },
    {
      label: "Metodología oficial de drawdown de Myfxbook",
      url: "https://www.myfxbook.com/help/knowledge-base/drawdown/",
      status: "verified-third-party",
      checkedAt,
      availability: "Disponible públicamente",
      supports: [
        "drawdown intradía",
        "drawdown al cierre",
        "drawdown de crecimiento",
        "conservación del mayor valor observado",
      ],
    },
  ],
};
