import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCopyToClipboard } from "./useCopyToClipboard";

describe("useCopyToClipboard", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Mock navigator.clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns initial state", () => {
    const { result } = renderHook(() => useCopyToClipboard());

    expect(result.current.copied).toBe(false);
    expect(result.current.copiedText).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it("copies text to clipboard and sets copied state", async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copy("hello world");
    });

    expect(result.current.copied).toBe(true);
    expect(result.current.copiedText).toBe("hello world");
    expect(result.current.error).toBeNull();
  });

  it("resets copied state after copiedDuration", async () => {
    const { result } = renderHook(() =>
      useCopyToClipboard({ copiedDuration: 2000 }),
    );

    await act(async () => {
      await result.current.copy("hello");
    });

    expect(result.current.copied).toBe(true);

    act(() => vi.advanceTimersByTime(2000));

    expect(result.current.copied).toBe(false);
  });

  it("calls onSuccess callback on successful copy", async () => {
    const onSuccess = vi.fn();
    const { result } = renderHook(() => useCopyToClipboard({ onSuccess }));

    await act(async () => {
      await result.current.copy("test");
    });

    expect(onSuccess).toHaveBeenCalledWith("test");
  });

  it("sets error state when clipboard is not available", async () => {
    Object.assign(navigator, { clipboard: undefined });
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copy("test");
    });

    expect(result.current.copied).toBe(false);
    expect(result.current.error).toBeTruthy();
  });

  it("calls onError callback on copy failure", async () => {
    const onError = vi.fn();
    const testError = new Error("Copy failed");
    (navigator.clipboard.writeText as any).mockRejectedValueOnce(testError);

    const { result } = renderHook(() => useCopyToClipboard({ onError }));

    await act(async () => {
      await result.current.copy("test");
    });

    expect(onError).toHaveBeenCalledWith(testError);
    expect(result.current.error).toBe(testError);
  });

  it("reset() clears copied state and error", async () => {
    const { result } = renderHook(() => useCopyToClipboard());

    await act(async () => {
      await result.current.copy("test");
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.copied).toBe(false);
    expect(result.current.error).toBeNull();
  });
});
