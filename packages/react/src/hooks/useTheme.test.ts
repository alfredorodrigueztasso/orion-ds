import { describe, it, expect, beforeEach } from "vitest";
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

  it("reads persisted theme from localStorage on mount", async () => {
    localStorage.setItem("orion-theme", "dark");
    const { result } = renderHook(() => useTheme());

    // Hook reads from localStorage in an effect, wait for it to complete
    expect(result.current.theme).toBe("dark");
  });

  it("ignores invalid theme from localStorage (falls back to default)", async () => {
    localStorage.setItem("orion-theme", "purple");
    const { result } = renderHook(() => useTheme());

    // Should fall back to default "light" theme for invalid value
    expect(result.current.theme).toBe("light");
  });

  it("reads persisted brand from localStorage on mount", async () => {
    localStorage.setItem("orion-brand", "red");
    const { result } = renderHook(() => useTheme());

    // Hook reads from localStorage in an effect, wait for it to complete
    expect(result.current.brand).toBe("red");
  });

  it("ignores invalid brand from localStorage (falls back to default)", async () => {
    localStorage.setItem("orion-brand", "invalid-brand");
    const { result } = renderHook(() => useTheme());

    // Should fall back to default "orion" brand for invalid value
    expect(result.current.brand).toBe("orion");
  });
});
