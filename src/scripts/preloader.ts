export const initPreloader = (): void => {
  const preloader = document.querySelector<HTMLElement>("[data-preloader]");

  if (!preloader || preloader.dataset.enhanced === "true") {
    return;
  }

  preloader.dataset.enhanced = "true";
  let dismissed = false;

  const dismiss = (): void => {
    if (dismissed) {
      return;
    }

    dismissed = true;
    preloader.classList.add("is-hidden");
    window.setTimeout(() => preloader.remove(), 250);
  };

  const fallbackTimer = window.setTimeout(dismiss, 1500);
  const dismissAfterLoad = (): void => {
    window.clearTimeout(fallbackTimer);
    window.requestAnimationFrame(dismiss);
  };

  if (document.readyState === "complete") {
    dismissAfterLoad();
  } else {
    window.addEventListener("load", dismissAfterLoad, { once: true });
  }
};
