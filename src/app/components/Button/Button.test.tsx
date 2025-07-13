import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

const mockOnClick = jest.fn();

const defaultProps = {
  displayText: "A button",
  handleClick: mockOnClick,
};

const setup = (propOverrides = {}) =>
  render(<Button {...defaultProps} {...propOverrides} />);

it("renders", () => {
  setup();

  const btn = screen.getByRole("button", { name: "A button" });

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveAttribute("type", "button");
});

it("calls the on click handler when clicked", () => {
  setup();

  fireEvent.click(screen.getByRole("button", { name: "A button" }));

  expect(mockOnClick).toHaveBeenCalledTimes(1);
});

it("allows the button type to be changed", () => {
  setup({ buttonType: "reset" });

  expect(screen.getByRole("button", { name: "A button" })).toHaveAttribute(
    "type",
    "reset"
  );
});

it('has the expected classes when the type is primary', () => {
	setup()

	expect(screen.getByRole("button", { name: "A button" })).toHaveClass('bg-sky-700')
})

it('has the expected classes when the type is secondary', () => {
	setup({ type: 'secondary' })

	expect(screen.getByRole("button", { name: "A button" })).toHaveClass('bg-white')
})
