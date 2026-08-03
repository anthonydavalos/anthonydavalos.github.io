export const initProjectFilters = async (): Promise<void> => {
  const grid = document.querySelector<HTMLElement>("[data-project-grid]");
  const buttons = document.querySelectorAll<HTMLButtonElement>(
    "[data-project-filter]",
  );
  const status = document.querySelector<HTMLElement>(
    "[data-project-filter-status]",
  );

  if (!grid || buttons.length === 0 || grid.dataset.enhanced === "true") {
    return;
  }

  const [{ default: Isotope }, { default: imagesLoaded }] = await Promise.all([
    import("isotope-layout"),
    import("imagesloaded"),
  ]);
  grid.dataset.enhanced = "true";

  const isotope = new Isotope(grid, {
    itemSelector: ".project-grid__item",
    layoutMode: "fitRows",
    percentPosition: true,
    transitionDuration: "0.25s",
  });

  imagesLoaded(grid, () => isotope.layout());

  isotope.on("arrangeComplete", (items) => {
    if (status) {
      const count = items.length;
      status.textContent =
        count === 1
          ? "Se muestra 1 proyecto."
          : `Se muestran ${count} proyectos.`;
    }
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.projectFilter ?? "*";

      buttons.forEach((candidate) => {
        candidate.setAttribute("aria-pressed", String(candidate === button));
      });
      isotope.arrange({ filter });
    });
  });
};
