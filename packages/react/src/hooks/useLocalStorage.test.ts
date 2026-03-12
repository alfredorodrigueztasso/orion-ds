import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useLocalStorage, useSessionStorage } from "./useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => localStorage.clear());

  it("returns initial value on first render", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));
    expect(result.current[0]).toBe("initial");
  });

  it("reads from localStorage if value exists", () => {
    localStorage.setItem("testKey", JSON.stringify("stored"));
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));
    expect(result.current[0]).toBe("stored");
  });

  it("setValue updates state and localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    act(() => result.current[1]("updated"));

    expect(result.current[0]).toBe("updated");
    expect(localStorage.getItem("testKey")).toBe(JSON.stringify("updated"));
  });

  it("removeValue removes from localStorage and resets to initial", () => {
    localStorage.setItem("testKey", JSON.stringify("stored"));
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    act(() => result.current[2]());

    expect(result.current[0]).toBe("initial");
    expect(localStorage.getItem("testKey")).toBeNull();
  });

  it("supports custom serializer and deserializer", () => {
    const { result } = renderHook(() =>
      useLocalStorage(
        "testKey",
        { count: 0 },
        {
          serializer: JSON.stringify,
          deserializer: JSON.parse,
        },
      ),
    );

    act(() => result.current[1]({ count: 5 }));

    expect(result.current[0]).toEqual({ count: 5 });
    expect(localStorage.getItem("testKey")).toContain("5");
  });
});

describe("useSessionStorage", () => {
  beforeEach(() => sessionStorage.clear());

  it("reads from sessionStorage instead of localStorage", () => {
    sessionStorage.setItem("testKey", JSON.stringify("stored"));
    const { result } = renderHook(() =>
      useSessionStorage("testKey", "initial"),
    );
    expect(result.current[0]).toBe("stored");
  });

  it("setValue writes to sessionStorage", () => {
    const { result } = renderHook(() =>
      useSessionStorage("testKey", "initial"),
    );

    act(() => result.current[1]("updated"));

    expect(sessionStorage.getItem("testKey")).toBe(JSON.stringify("updated"));
  });
});
