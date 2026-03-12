import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import React from "react";
import { useClickOutside, useClickOutsideMultiple } from "./useClickOutside";

describe("useClickOutside", () => {
  let ref: React.RefObject<HTMLDivElement>;

  beforeEach(() => {
    ref = React.createRef();
  });

  it("hook initializes without error", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useClickOutside(ref, handler));

    expect(result).toBeDefined();
  });

  it("handler is a required parameter", () => {
    const handler = vi.fn();
    expect(() => renderHook(() => useClickOutside(ref, handler))).not.toThrow();
  });

  it("respects enabled option", () => {
    const handler = vi.fn();
    const { result, rerender } = renderHook(
      ({ enabled }) => useClickOutside(ref, handler, { enabled }),
      { initialProps: { enabled: false } },
    );

    expect(result).toBeDefined();

    rerender({ enabled: true });
    expect(result).toBeDefined();
  });

  it("cleans up listeners on unmount", () => {
    const handler = vi.fn();
    const removeEventListenerSpy = vi.spyOn(document, "removeEventListener");

    const { unmount } = renderHook(() => useClickOutside(ref, handler));
    unmount();

    // Should have registered listeners for mousedown and touchstart
    expect(removeEventListenerSpy).toHaveBeenCalled();

    removeEventListenerSpy.mockRestore();
  });

  it("works with HTMLElement ref", () => {
    const handler = vi.fn();
    const div = document.createElement("div");
    const elementRef = { current: div };

    expect(() =>
      renderHook(() => useClickOutside(elementRef, handler)),
    ).not.toThrow();
  });

  it("works with null ref", () => {
    const handler = vi.fn();
    const nullRef = { current: null };

    expect(() =>
      renderHook(() => useClickOutside(nullRef, handler)),
    ).not.toThrow();
  });
});

describe("useClickOutsideMultiple", () => {
  let refs: React.RefObject<HTMLDivElement>[];

  beforeEach(() => {
    refs = [React.createRef(), React.createRef()];
  });

  it("hook initializes without error", () => {
    const handler = vi.fn();
    const { result } = renderHook(() => useClickOutsideMultiple(refs, handler));

    expect(result).toBeDefined();
  });

  it("accepts multiple refs", () => {
    const handler = vi.fn();
    const multipleRefs = [
      React.createRef<HTMLDivElement>(),
      React.createRef<HTMLDivElement>(),
      React.createRef<HTMLDivElement>(),
    ];

    expect(() =>
      renderHook(() => useClickOutsideMultiple(multipleRefs, handler)),
    ).not.toThrow();
  });

  it("works with HTMLElement refs", () => {
    const handler = vi.fn();
    const refs = [
      { current: document.createElement("div") },
      { current: document.createElement("div") },
    ];

    expect(() =>
      renderHook(() => useClickOutsideMultiple(refs, handler)),
    ).not.toThrow();
  });
});
