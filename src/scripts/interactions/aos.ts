import aosStylesheet from "aos/dist/aos.css?url";

import { prefersReducedMotion } from "./motion";
import { loadStylesheet } from "./styles";

export const initAos = async (): Promise<void> => {
  if (prefersReducedMotion()) {
    return;
  }

  const [{ default: AOS }] = await Promise.all([
    import("aos"),
    loadStylesheet(aosStylesheet, "aos"),
  ]);

  AOS.init({
    duration: 480,
    easing: "ease-out-cubic",
    offset: 32,
    once: true,
    mirror: false,
  });
  document.documentElement.classList.add("aos-enabled");
};
