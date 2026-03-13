import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
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

  it("calls handler when clicking outside ref", () => {
    const handler = vi.fn();
    const div = document.createElement("div");
    document.body.appendChild(div);
    const testRef = { current: div };

    renderHook(() => useClickOutside(testRef, handler));

    fireEvent.mouseDown(document.body);
    expect(handler).toHaveBeenCalled();

    document.body.removeChild(div);
  });

  it("does not call handler when clicking inside ref", () => {
    const handler = vi.fn();
    const div = document.createElement("div");
    document.body.appendChild(div);
    const testRef = { current: div };

    renderHook(() => useClickOutside(testRef, handler));

    fireEvent.mouseDown(div);
    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(div);
  });

  it("does not call handler when enabled is false", () => {
    const handler = vi.fn();
    const div = document.createElement("div");
    document.body.appendChild(div);
    const testRef = { current: div };

    renderHook(() => useClickOutside(testRef, handler, false));

    fireEvent.mouseDown(document.body);
    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(div);
  });

  it("calls handler on touchstart event", () => {
    const handler = vi.fn();
    const div = document.createElement("div");
    document.body.appendChild(div);
    const testRef = { current: div };

    renderHook(() => useClickOutside(testRef, handler));

    fireEvent.touchStart(document.body);
    expect(handler).toHaveBeenCalled();

    document.body.removeChild(div);
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

  it("calls handler when clicking outside all refs", () => {
    const handler = vi.fn();
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    const testRefs = [{ current: div1 }, { current: div2 }];

    renderHook(() => useClickOutsideMultiple(testRefs, handler));

    fireEvent.mouseDown(document.body);
    expect(handler).toHaveBeenCalled();

    document.body.removeChild(div1);
    document.body.removeChild(div2);
  });

  it("does not call handler when clicking inside one of the refs", () => {
    const handler = vi.fn();
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    const testRefs = [{ current: div1 }, { current: div2 }];

    renderHook(() => useClickOutsideMultiple(testRefs, handler));

    fireEvent.mouseDown(div1);
    expect(handler).not.toHaveBeenCalled();

    fireEvent.mouseDown(div2);
    expect(handler).not.toHaveBeenCalled();

    document.body.removeChild(div1);
    document.body.removeChild(div2);
  });
});
