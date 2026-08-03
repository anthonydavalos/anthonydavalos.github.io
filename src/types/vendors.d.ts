declare module "aos" {
  interface AosOptions {
    duration?: number;
    easing?: string;
    offset?: number;
    once?: boolean;
    mirror?: boolean;
  }

  const AOS: {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  };

  export default AOS;
}

declare module "@srexi/purecounterjs" {
  interface PureCounterOptions {
    selector?: string;
    duration?: number;
    once?: boolean;
  }

  export default class PureCounter {
    constructor(options?: PureCounterOptions);
  }
}

declare module "imagesloaded" {
  interface ImagesLoadedInstance {
    on(eventName: string, callback: () => void): ImagesLoadedInstance;
  }

  export default function imagesLoaded(
    element: Element,
    callback?: () => void,
  ): ImagesLoadedInstance;
}

declare module "isotope-layout" {
  interface IsotopeItem {
    element: Element;
  }

  interface IsotopeOptions {
    itemSelector: string;
    layoutMode?: string;
    percentPosition?: boolean;
    transitionDuration?: string;
  }

  export default class Isotope {
    constructor(element: Element, options: IsotopeOptions);
    arrange(options: { filter: string }): void;
    layout(): void;
    on(
      eventName: "arrangeComplete",
      callback: (items: IsotopeItem[]) => void,
    ): void;
  }
}
