import glightboxStylesheet from "glightbox/dist/css/glightbox.min.css?url";

import { prefersReducedMotion } from "./motion";
import { loadStylesheet } from "./styles";

export const initLightbox = async (): Promise<void> => {
  const triggers = document.querySelectorAll<HTMLElement>("[data-glightbox]");

  if (triggers.length === 0) {
    return;
  }

  const [{ default: GLightbox }] = await Promise.all([
    import("glightbox"),
    loadStylesheet(glightboxStylesheet, "glightbox"),
  ]);
  const reduceMotion = prefersReducedMotion();
  let activeTrigger: HTMLElement | null = null;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      activeTrigger = trigger;
    });
  });

  const lightbox = GLightbox({
    selector: "[data-glightbox]",
    touchNavigation: true,
    keyboardNavigation: true,
    closeOnOutsideClick: true,
    openEffect: reduceMotion ? "none" : "fade",
    closeEffect: reduceMotion ? "none" : "fade",
    slideEffect: reduceMotion ? "none" : "slide",
    moreText: "Ver más",
  });

  lightbox.on("close", () => activeTrigger?.focus());
};
