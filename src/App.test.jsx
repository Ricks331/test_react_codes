import { describe, expect, it } from "vitest";
// render react coponents and fetch the  elements
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  // it("checking if H1 exist inside the component", () => {
  //   render(<App />);
  //   const PageHeader = screen.getByRole("heading", {
  //     name: "Hello 1",
  //   });
  //   expect(PageHeader).toBeInTheDocument();
  //
  //   expect(screen.getByText("Hello 2"))
  // });

  // it("checking if span exist inside the component", () => {
  //   render(<App />);
  //   expect(screen.getByTestId("span")).toBeInTheDocument();
  // });

  it("User Interaction", async () => {
    userEvent.setup();
    render(<App />);
    const beforeIncrement = screen.getByTestId("span");
    expect(beforeIncrement).toHaveTextContent(0);

    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const afterIncrement = screen.getByTestId("span");
    expect(afterIncrement).toHaveTextContent(1);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "10");
    expect(input).toHaveValue();
  });
});

// expect(screen.getByRole("heading")).toHaveTextContent("Hello");
