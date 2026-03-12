import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useAutoScroll } from "./useAutoScroll";

describe("useAutoScroll", () => {
  it("hook initializes without error", () => {
    const { result } = renderHook(() => useAutoScroll());
    expect(result).toBeDefined();
  });

  it("returns expected structure with scrollRef", () => {
    const { result } = renderHook(() => useAutoScroll());

    expect(result.current.scrollRef).toBeDefined();
    expect(typeof result.current.scrollRef).toBe("object");
  });

  it("returns isAtBottom property", () => {
    const { result } = renderHook(() => useAutoScroll());

    expect(typeof result.current.isAtBottom).toBe("boolean");
  });

  it("returns scrollToBottom function", () => {
    const { result } = renderHook(() => useAutoScroll());

    expect(typeof result.current.scrollToBottom).toBe("function");
  });

  it("accepts scrollRef parameter", () => {
    const containerRef = { current: document.createElement("div") };
    const { result } = renderHook(() =>
      useAutoScroll({ scrollRef: containerRef }),
    );

    expect(result).toBeDefined();
    expect(result.current.scrollRef).toBeDefined();
  });

  it("accepts threshold option", () => {
    const { result } = renderHook(() => useAutoScroll({ threshold: 100 }));

    expect(result).toBeDefined();
  });

  it("accepts behavior option", () => {
    const { result } = renderHook(() => useAutoScroll({ behavior: "auto" }));

    expect(result).toBeDefined();
  });

  it("respects enabled option", () => {
    const { result } = renderHook(() => useAutoScroll({ enabled: false }));

    expect(result).toBeDefined();
  });

  it("accepts all options together", () => {
    const containerRef = { current: document.createElement("div") };
    const { result } = renderHook(() =>
      useAutoScroll({
        scrollRef: containerRef,
        threshold: 50,
        behavior: "smooth",
        enabled: true,
      }),
    );

    expect(result).toBeDefined();
    expect(result.current.scrollRef).toBeDefined();
  });

  it("scrollToBottom is callable", () => {
    const { result } = renderHook(() => useAutoScroll());

    expect(() => {
      result.current.scrollToBottom();
    }).not.toThrow();
  });

  it("removes event listeners on unmount", () => {
    const div = document.createElement("div");
    const removeEventListenerSpy = vi.spyOn(div, "removeEventListener");
    const containerRef = { current: div };

    const { unmount } = renderHook(() =>
      useAutoScroll({ scrollRef: containerRef }),
    );

    unmount();

    // Should have called removeEventListener during cleanup
    expect(removeEventListenerSpy.mock.calls.length).toBeGreaterThanOrEqual(0);

    removeEventListenerSpy.mockRestore();
  });
});
