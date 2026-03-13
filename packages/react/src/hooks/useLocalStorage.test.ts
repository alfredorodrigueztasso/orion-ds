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

  it("supports functional updater (setValue with previous value)", () => {
    const { result } = renderHook(() => useLocalStorage("counter", 0));

    act(() => result.current[1]((prev) => prev + 1));
    expect(result.current[0]).toBe(1);

    act(() => result.current[1]((prev) => prev + 1));
    expect(result.current[0]).toBe(2);
    expect(localStorage.getItem("counter")).toBe(JSON.stringify(2));
  });

  it("falls back to initialValue when deserializer throws error", () => {
    localStorage.setItem("testKey", "invalid-json");
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "fallback", {
        deserializer: () => {
          throw new Error("Parse failed");
        },
      }),
    );

    expect(result.current[0]).toBe("fallback");
  });

  it("handles setItem error gracefully", () => {
    const setItemSpy = vi
      .spyOn(Storage.prototype, "setItem")
      .mockImplementationOnce(() => {
        throw new Error("QuotaExceededError");
      });

    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    // Attempt to set value when storage is full
    act(() => result.current[1]("updated"));

    // Should still update state even if setItem fails
    expect(result.current[0]).toBe("updated");

    setItemSpy.mockRestore();
  });

  it("syncs across tabs via storage event", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));
    expect(result.current[0]).toBe("initial");

    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "testKey",
          newValue: JSON.stringify("updated-from-other-tab"),
        }),
      );
    });

    expect(result.current[0]).toBe("updated-from-other-tab");
  });

  it("ignores storage events for different keys", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));

    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "differentKey",
          newValue: JSON.stringify("should-not-update"),
        }),
      );
    });

    expect(result.current[0]).toBe("initial");
  });

  it("handles null newValue in storage event (resets to initialValue)", () => {
    localStorage.setItem("testKey", JSON.stringify("stored"));
    const { result } = renderHook(() => useLocalStorage("testKey", "initial"));
    expect(result.current[0]).toBe("stored");

    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "testKey",
          newValue: null,
        }),
      );
    });

    expect(result.current[0]).toBe("initial");
  });

  it("respects syncAcrossTabs: false option", () => {
    const { result } = renderHook(() =>
      useLocalStorage("testKey", "initial", { syncAcrossTabs: false }),
    );

    const storageEventSpy = vi.fn();
    window.addEventListener("storage", storageEventSpy);

    act(() => {
      window.dispatchEvent(
        new StorageEvent("storage", {
          key: "testKey",
          newValue: JSON.stringify("updated"),
        }),
      );
    });

    // Should not update when syncAcrossTabs is false
    expect(result.current[0]).toBe("initial");

    window.removeEventListener("storage", storageEventSpy);
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

  it("supports functional updater in sessionStorage", () => {
    const { result } = renderHook(() => useSessionStorage("counter", 0));

    act(() => result.current[1]((prev) => prev + 1));
    expect(result.current[0]).toBe(1);

    act(() => result.current[1]((prev) => prev + 1));
    expect(result.current[0]).toBe(2);
    expect(sessionStorage.getItem("counter")).toBe(JSON.stringify(2));
  });

  it("removeValue removes from sessionStorage and resets to initial", () => {
    sessionStorage.setItem("testKey", JSON.stringify("stored"));
    const { result } = renderHook(() =>
      useSessionStorage("testKey", "initial"),
    );

    act(() => result.current[2]());

    expect(result.current[0]).toBe("initial");
    expect(sessionStorage.getItem("testKey")).toBeNull();
  });
});
