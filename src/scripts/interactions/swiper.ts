import swiperA11yStylesheet from "swiper/css/a11y?url";
import swiperPaginationStylesheet from "swiper/css/pagination?url";
import swiperStylesheet from "swiper/css?url";

import { loadStylesheet } from "./styles";

export const initSwipers = async (): Promise<void> => {
  const carousels = document.querySelectorAll<HTMLElement>("[data-swiper]");

  if (carousels.length === 0) {
    return;
  }

  const [{ default: Swiper }, { A11y, Autoplay, Keyboard, Pagination }] =
    await Promise.all([
      import("swiper"),
      import("swiper/modules"),
      loadStylesheet(swiperStylesheet, "swiper"),
      loadStylesheet(swiperA11yStylesheet, "swiper-a11y"),
      loadStylesheet(swiperPaginationStylesheet, "swiper-pagination"),
    ]);

  carousels.forEach((carousel) => {
    if (carousel.dataset.enhanced === "true") {
      return;
    }

    const pagination = carousel
      .closest<HTMLElement>(".project-carousel")
      ?.querySelector<HTMLElement>("[data-swiper-pagination]");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    carousel.dataset.enhanced = "true";
    new Swiper(carousel, {
      modules: [A11y, Autoplay, Keyboard, Pagination],
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
      ...(pagination
        ? {
            pagination: {
              clickable: true,
              el: pagination,
            },
          }
        : {}),
      ...(!reduceMotion
        ? {
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },
          }
        : {}),
      a11y: {
        enabled: true,
        containerMessage: carousel.getAttribute("aria-label") ?? "Carrusel",
        firstSlideMessage: "Esta es la primera diapositiva",
        lastSlideMessage: "Esta es la última diapositiva",
        nextSlideMessage: "Diapositiva siguiente",
        prevSlideMessage: "Diapositiva anterior",
        slideLabelMessage: "{{index}} de {{slidesLength}}",
      },
    });
  });
};
