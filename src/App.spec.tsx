import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App tests", () => {
  test("main heading is visible", () => {
    render(<App />);
    const button = screen.getByRole("heading", {
      name: "Hello Carbon 👋",
      level: 1,
    });
    expect(button).toBeVisible();
  });
});
