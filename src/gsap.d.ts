// src/types/gsap.d.ts
declare module "gsap/dist/ScrollTrigger" {
    export interface ScrollTriggerInstance {
      kill(): void;
      refresh(): void;
    }
  
    export interface ScrollTriggerStatic {
      create(vars: Record<string, unknown>): ScrollTriggerInstance;
      getAll(): ScrollTriggerInstance[];
      refresh(hard?: boolean): void;
    }
  
    export const ScrollTrigger: ScrollTriggerStatic;
    export default ScrollTrigger;
  }