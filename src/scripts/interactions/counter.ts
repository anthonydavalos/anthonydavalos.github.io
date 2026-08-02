import { prefersReducedMotion } from "./motion";

export const initCounters = async (): Promise<void> => {
  if (prefersReducedMotion()) {
    return;
  }

  const counters = document.querySelectorAll<HTMLElement>(
    "[data-purecounter-end]",
  );

  if (counters.length === 0) {
    return;
  }

  const { default: PureCounter } = await import("@srexi/purecounterjs");

  new PureCounter({
    selector: "[data-purecounter-end]",
    duration: 1,
    once: true,
  });
};
