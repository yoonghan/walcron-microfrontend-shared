import { describe, it, expect } from "vitest";
import { useWindowListener } from "./useWindowListener";
import { act, fireEvent, renderHook } from "@testing-library/react";

describe("useWindowListener", () => {
  it("should listen to window changes", async () => {
    const { result } = renderHook(useWindowListener);
    act(() => {
      window.innerHeight = 100;
      window.innerWidth = 200;
      fireEvent(window, new Event("resize"));
    });

    await new Promise((resolve) => setTimeout(resolve, 1100));
    expect(result.current.height).toBe(100);
    expect(result.current.width).toBe(200);
  });
});
