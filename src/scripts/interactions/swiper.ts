import swiperA11yStylesheet from "swiper/css/a11y?url";
import swiperStylesheet from "swiper/css?url";
import swiperNavigationStylesheet from "swiper/css/navigation?url";

import { loadStylesheet } from "./styles";

export const initSwipers = async (): Promise<void> => {
  const carousels = document.querySelectorAll<HTMLElement>("[data-swiper]");

  if (carousels.length === 0) {
    return;
  }

  const [{ default: Swiper }, { A11y, Keyboard, Navigation }] =
    await Promise.all([
      import("swiper"),
      import("swiper/modules"),
      loadStylesheet(swiperStylesheet, "swiper"),
      loadStylesheet(swiperA11yStylesheet, "swiper-a11y"),
      loadStylesheet(swiperNavigationStylesheet, "swiper-navigation"),
    ]);

  carousels.forEach((carousel) => {
    if (carousel.dataset.enhanced === "true") {
      return;
    }

    const controlsScope =
      carousel.closest<HTMLElement>(".project-carousel") ?? carousel;
    const previous = controlsScope.querySelector<HTMLElement>(
      "[data-swiper-previous]",
    );
    const next = controlsScope.querySelector<HTMLElement>("[data-swiper-next]");

    carousel.dataset.enhanced = "true";
    new Swiper(carousel, {
      modules: [A11y, Keyboard, Navigation],
      slidesPerView: 1,
      spaceBetween: 24,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
      rewind: true,
      watchOverflow: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      a11y: {
        enabled: true,
        containerMessage: carousel.getAttribute("aria-label") ?? "Carrusel",
        firstSlideMessage: "Esta es la primera diapositiva",
        lastSlideMessage: "Esta es la última diapositiva",
        nextSlideMessage: "Diapositiva siguiente",
        prevSlideMessage: "Diapositiva anterior",
        slideLabelMessage: "{{index}} de {{slidesLength}}",
      },
      ...(previous && next
        ? {
            navigation: {
              prevEl: previous,
              nextEl: next,
            },
          }
        : {}),
    });
  });
};
