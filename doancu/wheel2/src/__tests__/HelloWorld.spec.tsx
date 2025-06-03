import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { HelloWorldCounter } from "../HelloWorld";

test("increments counter when button is clicked", async () => {
  // Arrange: render the component
  render(<HelloWorldCounter />);

  // Assert: button starts at 0
  const button = screen.getByRole("button", { name: /count is/i });
  expect(button.textContent).toContain("count is 0");

  // Act: click the button
  await userEvent.click(button);

  // Assert: button now shows 1
  expect(button.textContent).toContain("count is 1");
});
