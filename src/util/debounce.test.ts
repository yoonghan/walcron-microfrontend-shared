import { describe, it, expect, vi } from "vitest";
import { debounce } from "./debounce";

describe("debounce", () => {
  it("should change only after timeout is reached", async () => {
    const mockFn = vi.fn();
    debounce(mockFn, 1000)();
    await new Promise((resolve) => setTimeout(resolve, 500));
    expect(mockFn).not.toHaveBeenCalled();
    await new Promise((resolve) => setTimeout(resolve, 500));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should change reset on every new debounce trigger", async () => {
    const mockFn = vi.fn();
    const initDebounce = debounce(mockFn, 1000);
    initDebounce();
    await new Promise((resolve) => setTimeout(resolve, 500));
    initDebounce();
    await new Promise((resolve) => setTimeout(resolve, 600));
    expect(mockFn).not.toHaveBeenCalled();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(mockFn).toHaveBeenCalled();
  });
});
