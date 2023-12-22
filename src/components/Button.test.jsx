import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "./Button";

describe("App", () => {
  it("props", () => {
    render(<Button type="button" title="Submit" />);
    expect(screen.getByRole("button")).toHaveTextContent("Submit");
  });
});
