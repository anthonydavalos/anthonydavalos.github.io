export type ProjectStatus = "featured" | "draft" | "archived";

export interface Project {
  id: string;
  title: string;
  summary: string;
  category: string;
  status: ProjectStatus;
  filters: string[];
  monogram: string;
}

export const projects: Project[] = [
  {
    id: "streamliner-ai",
    title: "Streamliner AI",
    summary:
      "Automatización de flujos y asistencia operativa enfocada en procesos claros y repetibles.",
    category: "Automatización",
    status: "featured",
    filters: ["filter-featured", "filter-automation"],
    monogram: "SA",
  },
  {
    id: "autopilot",
    title: "Autopilot",
    summary:
      "Sistema de automatización orientado a tareas repetitivas, trazabilidad y control operativo.",
    category: "Automatización",
    status: "featured",
    filters: ["filter-featured", "filter-automation"],
    monogram: "AP",
  },
  {
    id: "qr-code-component",
    title: "QR Code Component",
    summary:
      "Componente de interfaz para integrar la generación de códigos QR en productos web.",
    category: "Software y APIs",
    status: "archived",
    filters: ["filter-software", "filter-archived"],
    monogram: "QR",
  },
  {
    id: "subastas-backend",
    title: "Subastas Backend",
    summary:
      "Backend en borrador; su publicación queda pendiente del saneamiento completo del repositorio.",
    category: "Software y APIs",
    status: "draft",
    filters: ["filter-software", "filter-draft"],
    monogram: "SB",
  },
  {
    id: "betsniper",
    title: "BetSniper",
    summary:
      "Proyecto en borrador que permanece fuera de destacados hasta completar su revisión.",
    category: "Revisión en curso",
    status: "draft",
    filters: ["filter-draft"],
    monogram: "BS",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.status === "featured",
);

export const projectFilters = [
  { label: "Todos", value: "*" },
  { label: "Destacados", value: ".filter-featured" },
  { label: "Software y APIs", value: ".filter-software" },
  { label: "Automatización", value: ".filter-automation" },
  { label: "Borradores", value: ".filter-draft" },
  { label: "Archivados", value: ".filter-archived" },
];
