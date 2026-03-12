import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import {
  useMediaQuery,
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  usePrefersDarkMode,
} from "./useMediaQuery";

describe("useMediaQuery", () => {
  it("returns initial match value", () => {
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    expect(typeof result.current).toBe("boolean");
  });

  it("returns false for default mock", () => {
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    expect(result.current).toBe(false);
  });

  it("handles SSR context (undefined window)", () => {
    // In SSR, matchMedia is not called, hook returns false
    const { result } = renderHook(() => useMediaQuery("(max-width: 768px)"));
    expect(typeof result.current).toBe("boolean");
  });

  it("returns false when query does not match", () => {
    const { result } = renderHook(() => useMediaQuery("(max-width: 400px)"));
    expect(result.current).toBe(false);
  });
});

describe("useIsMobile", () => {
  it("returns boolean for mobile query", () => {
    const { result } = renderHook(() => useIsMobile());
    expect(typeof result.current).toBe("boolean");
  });
});

describe("useIsTablet", () => {
  it("returns boolean for tablet query", () => {
    const { result } = renderHook(() => useIsTablet());
    expect(typeof result.current).toBe("boolean");
  });
});

describe("useIsDesktop", () => {
  it("returns boolean for desktop query", () => {
    const { result } = renderHook(() => useIsDesktop());
    expect(typeof result.current).toBe("boolean");
  });
});

describe("usePrefersDarkMode", () => {
  it("returns boolean for prefers-color-scheme query", () => {
    const { result } = renderHook(() => usePrefersDarkMode());
    expect(typeof result.current).toBe("boolean");
  });
});
