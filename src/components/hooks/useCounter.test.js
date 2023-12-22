import { describe, expect, it } from "vitest";
import { useCounter } from "./useCounter";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("useCounter", () => {
  it("Render default count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it("Render initial count", () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it("increment count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.onIncrement());
    expect(result.current.count).toBe(1);
  });

  it("increment count", () => {
    // concept called arrange,act, assert

    // arrange
    const { result } = renderHook(useCounter);
    // act
    act(() => result.current.onIncrement());
    act(() => result.current.onIncrement());
    // assert
    expect(result.current.count).toBe(2);
  });

  it("decrement count", () => {
    const { result } = renderHook(useCounter);
    act(() => result.current.onDecrement());
    expect(result.current.count).toBe(-1);
  });
});
