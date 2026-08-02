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
