export const loadStylesheet = (href: string, key: string): Promise<void> => {
  const existing = document.querySelector<HTMLLinkElement>(
    `link[data-vendor-style="${key}"]`,
  );

  if (existing) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = href;
    stylesheet.dataset.vendorStyle = key;
    stylesheet.addEventListener("load", () => resolve(), { once: true });
    stylesheet.addEventListener(
      "error",
      () => reject(new Error(`No se pudo cargar la hoja de estilos: ${key}`)),
      { once: true },
    );
    document.head.append(stylesheet);
  });
};
