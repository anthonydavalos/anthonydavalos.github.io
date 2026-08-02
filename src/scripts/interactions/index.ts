export const initVisualInteractions = async (): Promise<void> => {
  const initializers: Promise<void>[] = [];

  if (document.querySelector("[data-aos]")) {
    initializers.push(import("./aos").then(({ initAos }) => initAos()));
  }

  if (document.querySelector("[data-swiper]")) {
    initializers.push(
      import("./swiper").then(({ initSwipers }) => initSwipers()),
    );
  }

  if (document.querySelector("[data-glightbox]")) {
    initializers.push(
      import("./lightbox").then(({ initLightbox }) => initLightbox()),
    );
  }

  if (document.querySelector("[data-purecounter-end]")) {
    initializers.push(
      import("./counter").then(({ initCounters }) => initCounters()),
    );
  }

  await Promise.allSettled(initializers);
};
