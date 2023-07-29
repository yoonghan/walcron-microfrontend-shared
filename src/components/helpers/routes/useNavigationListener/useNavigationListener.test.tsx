import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook } from "@testing-library/react";
import useNavigatorListener from ".";

describe("useNavigatorListener", () => {
  const appName = "test-app";
  const containerName = "test-container";
  const appListenerFn = vi.fn();

  beforeEach(() => {
    window.addEventListener(`[${appName}] navigated`, appListenerFn);
  });

  afterEach(() => {
    window.removeEventListener(`[${appName}] navigated`, appListenerFn);
  });

  const createNavigatorListener = (navigate = vi.fn()) => {
    return renderHook(useNavigatorListener, {
      initialProps: {
        appName,
        containerName,
        props: {
          pathname: "/current",
          navigate,
        },
      },
    });
  };

  it("should app is triggered upon load", async () => {
    createNavigatorListener();
    expect(appListenerFn).toHaveBeenCalledWith(new CustomEvent(""));
  });

  it("should app should trigger navigation if a dispatch event it called", async () => {
    const navigateListenerFn = vi.fn();
    createNavigatorListener(navigateListenerFn);
    window.dispatchEvent(
      new CustomEvent(`[${containerName}] navigated`, { detail: "/child" })
    );
    expect(navigateListenerFn).toHaveBeenCalledWith("/child");
  });

  it("should not navigate when it's already in the path", async () => {
    const navigateListenerFn = vi.fn();
    createNavigatorListener(navigateListenerFn);
    window.dispatchEvent(
      new CustomEvent(`[${containerName}] navigated`, { detail: "/current" })
    );
    expect(navigateListenerFn).not.toHaveBeenCalled();
  });

  it("unmount should remove the listener", async () => {
    const navigateListenerFn = vi.fn();
    const { unmount } = createNavigatorListener(navigateListenerFn);
    unmount();
    window.dispatchEvent(
      new CustomEvent(`[${containerName}] navigated`, { detail: "/child" })
    );
    expect(navigateListenerFn).not.toHaveBeenCalled();
  });
});
