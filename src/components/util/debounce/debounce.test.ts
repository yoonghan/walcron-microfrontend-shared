import { describe, it, expect, vi, afterAll, beforeAll } from "vitest";
import { debounce } from ".";

describe("debounce", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("should change only after timeout is reached", async () => {
    const mockFn = vi.fn();
    debounce(mockFn, 1000)();
    vi.advanceTimersByTime(500);
    expect(mockFn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(500);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should change reset on every new debounce trigger", async () => {
    const mockFn = vi.fn();
    const initDebounce = debounce(mockFn, 1000);
    initDebounce();
    vi.advanceTimersByTime(500);
    initDebounce();
    vi.advanceTimersByTime(600);
    expect(mockFn).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1000);
    expect(mockFn).toHaveBeenCalled();
  });
});
