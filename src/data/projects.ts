import type { CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">["data"];

export const projectFilters = [
  { label: "Todos", value: "*" },
  { label: "Destacados", value: ".filter-featured" },
  { label: "Software y APIs", value: ".filter-software" },
  { label: "Automatización", value: ".filter-automation" },
  { label: "Borradores", value: ".filter-draft" },
  { label: "Archivados", value: ".filter-archived" },
];
