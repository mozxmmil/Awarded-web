import 'locomotive-scroll';

declare module 'locomotive-scroll' {
  interface ILocomotiveScrollOptions {
    el?: HTMLElement;
    smooth?: boolean;
  }
} 