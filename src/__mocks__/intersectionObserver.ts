import { vi, afterEach, Mock } from "vitest";
export const observe = vi.fn();
const unobserve = vi.fn();
export const disconnect = vi.fn();
export let intersectionFn = vi.fn();

afterEach(() => {
  observe.mockReset();
  disconnect.mockReset();
});

class IntersectionObserver {
  threshold;

  constructor(
    intersection: Mock<unknown[], unknown>,
    { threshold }: { threshold: number[] }
  ) {
    intersectionFn = intersection;
    this.threshold = threshold;
  }

  observe = (elem: HTMLElement) => observe(elem, this.threshold);

  static unobserve = unobserve;

  disconnect = disconnect;
}

(window.IntersectionObserver as unknown) = IntersectionObserver;

(window.HTMLElement as any).prototype.scrollIntoViewIfNeeded = function () {
  /*empty mock*/
};

(window.scrollTo as unknown) = (x: number, y: number) => {
  window.scrollY = y;
  window.scrollX = x;
};
