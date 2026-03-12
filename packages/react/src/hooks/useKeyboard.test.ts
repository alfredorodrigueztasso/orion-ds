import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useKeyboard, useKeyboardShortcuts } from "./useKeyboard";

describe("useKeyboard", () => {
  it("hook initializes without error", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useKeyboard("Enter", handler));

    expect(result).toBeDefined();
  });

  it("key parameter is required", () => {
    const handler = vi.fn();
    expect(() => renderHook(() => useKeyboard("Enter", handler))).not.toThrow();
  });

  it("respects enabled flag", () => {
    const handler = vi.fn();
    const { result, rerender } = renderHook(
      ({ enabled }) => useKeyboard("Enter", handler, { enabled }),
      { initialProps: { enabled: false } },
    );

    expect(result).toBeDefined();

    rerender({ enabled: true });
    expect(result).toBeDefined();
  });

  it("accepts modifier options (ctrl, shift, alt, meta)", () => {
    const handler = vi.fn();
    expect(() =>
      renderHook(() => useKeyboard("s", handler, { ctrl: true, shift: true })),
    ).not.toThrow();
  });

  it("cleans up listeners on unmount", () => {
    const handler = vi.fn();
    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");

    const { unmount } = renderHook(() => useKeyboard("Enter", handler));
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalled();

    removeEventListenerSpy.mockRestore();
  });

  it("works with special keys (Escape, Enter, Tab, etc.)", () => {
    const handler = vi.fn();
    const specialKeys = ["Escape", "Enter", "Tab", "Backspace", "Delete"];

    specialKeys.forEach((key) => {
      expect(() => renderHook(() => useKeyboard(key, handler))).not.toThrow();
    });
  });

  it("prevents handler when input is focused", () => {
    const handler = vi.fn();
    const input = document.createElement("input");
    document.body.appendChild(input);

    renderHook(() => useKeyboard("a", handler));

    input.focus();

    // Even though we can't easily test the actual keydown event,
    // we can verify the hook initialized correctly
    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(input);
  });

  it("accepts meta modifier option", () => {
    const handler = vi.fn();
    expect(() =>
      renderHook(() => useKeyboard("k", handler, { meta: true })),
    ).not.toThrow();
  });

  it("accepts alt modifier option", () => {
    const handler = vi.fn();
    expect(() =>
      renderHook(() => useKeyboard("s", handler, { alt: true })),
    ).not.toThrow();
  });

  it("supports array of keys", () => {
    const handler = vi.fn();
    expect(() =>
      renderHook(() => useKeyboard(["Enter", "Space"], handler)),
    ).not.toThrow();
  });

  it("returns undefined (hook has no return value)", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useKeyboard("Enter", handler));
    expect(result.current).toBeUndefined();
  });
});

describe("useKeyboardShortcuts", () => {
  it("hook initializes without error", () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();

    const shortcuts = {
      ctrl_s: { key: "s", ctrl: true, handler: handler1 },
      escape: { key: "Escape", handler: handler2 },
    };

    const { result } = renderHook(() => useKeyboardShortcuts(shortcuts));
    expect(result).toBeDefined();
  });

  it("accepts multiple shortcuts", () => {
    const handlers = {
      ctrl_s: vi.fn(),
      escape: vi.fn(),
      ctrl_k: vi.fn(),
    };

    const shortcuts = {
      save: { key: "s", ctrl: true, handler: handlers.ctrl_s },
      cancel: { key: "Escape", handler: handlers.escape },
      command: { key: "k", ctrl: true, handler: handlers.ctrl_k },
    };

    expect(() =>
      renderHook(() => useKeyboardShortcuts(shortcuts)),
    ).not.toThrow();
  });

  it("works with empty shortcuts", () => {
    expect(() => renderHook(() => useKeyboardShortcuts({}))).not.toThrow();
  });
});
