import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// react-owl-carousel is a jQuery plugin that can't mount under jsdom; stub it
// so the app tree renders. (The carousel only appears in the Gallery view anyway.)
vi.mock("react-owl-carousel", () => ({
  default: ({ children }) => <div data-testid="owl-carousel">{children}</div>,
}));

import App from "./App";

describe("App", () => {
  it("mounts and renders the Trueno navbar", () => {
    render(<App />);
    expect(screen.getByText("TRUENO")).toBeInTheDocument();
  });
});
