import type { CollectionEntry } from "astro:content";

export type AchievementRecord = CollectionEntry<"achievements">["data"];
export type Achievement = Extract<AchievementRecord, { kind: "competition" }>;
export type QuantitativeRecord = Extract<
  AchievementRecord,
  { kind: "current-record" }
>;
export type AchievementSource = AchievementRecord["sources"][number];
export type EvidenceStatus = AchievementSource["status"];
