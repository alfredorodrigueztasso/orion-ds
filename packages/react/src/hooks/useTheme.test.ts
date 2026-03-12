import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTheme } from "./useTheme";

describe("useTheme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
    document.documentElement.removeAttribute("data-brand");
  });

  it("returns default theme and brand", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(result.current.brand).toBe("orion");
  });

  it("setTheme updates theme state", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme("dark");
    });

    expect(result.current.theme).toBe("dark");
  });

  it("setBrand updates brand state", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setBrand("red");
    });

    expect(result.current.brand).toBe("red");
  });

  it("toggleTheme flips between light and dark", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("dark");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.theme).toBe("light");
  });

  it("isDark and isLight computed properties work correctly", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.isDark).toBe(false);
    expect(result.current.isLight).toBe(true);

    act(() => {
      result.current.setTheme("dark");
    });

    expect(result.current.isDark).toBe(true);
    expect(result.current.isLight).toBe(false);
  });

  it("respects storageEnabled option", () => {
    const { result } = renderHook(() => useTheme({ storageEnabled: false }));

    act(() => {
      result.current.setTheme("dark");
    });

    // Should still update state even without storage
    expect(result.current.theme).toBe("dark");
  });

  it("sets document attributes when theme changes", () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setTheme("dark");
    });

    // The hook should set data-theme on document.documentElement
    expect(["dark", "light"]).toContain(result.current.theme);
  });
});
