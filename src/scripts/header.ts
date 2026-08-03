export const initHeader = (): void => {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const toggle = header?.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const navigation = header?.querySelector<HTMLElement>(
    "[data-primary-navigation]",
  );

  if (!header || !toggle || !navigation || header.dataset.enhanced === "true") {
    return;
  }

  header.dataset.enhanced = "true";
  const desktopQuery = window.matchMedia("(min-width: 62rem)");

  const setOpen = (isOpen: boolean): void => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar navegación" : "Abrir navegación",
    );
    navigation.dataset.open = String(isOpen);
    document.body.dataset.navOpen = String(isOpen);
  };

  const updateScrollState = (): void => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      event.target instanceof Node &&
      !header.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  desktopQuery.addEventListener("change", () => setOpen(false));
  window.addEventListener("scroll", updateScrollState, { passive: true });

  setOpen(false);
  updateScrollState();
};
