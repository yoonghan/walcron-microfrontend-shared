import { vi, afterEach } from "vitest";
export const observe = vi.fn();
const unobserve = vi.fn();
export const disconnect = vi.fn();
export let intersectionFn = vi.fn();

afterEach(() => {
  observe.mockReset();
  disconnect.mockReset();
});

class IntersectionObserver {
  constructor(intersection: any) {
    intersectionFn = intersection;
  }

  observe = observe;

  static unobserve = unobserve;

  disconnect = disconnect;
}

(window.IntersectionObserver as any) = IntersectionObserver;

(window.HTMLElement.prototype as any).scrollIntoViewIfNeeded = function () {
  /*empty mock*/
};

(window.scrollTo as any) = (x: number, y: number) => {
  window.scrollY = y;
  window.scrollX = x;
};
