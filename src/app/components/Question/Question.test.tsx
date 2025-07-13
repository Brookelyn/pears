import { screen, render, fireEvent } from "@testing-library/react";
import { Question } from "./Question";

const mockHandleSelectAnswer = jest.fn();

const defaultProps = {
  currentStep: 2,
  handleSelectAnswer: mockHandleSelectAnswer,
  id: "my-id",
  step: 2,
  text: "Do you like ice cream?",
};

const setup = (propOverrides = {}) =>
  render(<Question {...defaultProps} {...propOverrides} />);

it("renders", () => {
  setup();

  expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Yes" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "No" })).toBeInTheDocument();
  expect(screen.queryAllByText("Continue")).toHaveLength(0);
});

it('allows the user to select and submit a "yes" answer', () => {
  setup();

  fireEvent.click(screen.getByRole("button", { name: "Yes" }));

  expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Continue" }));
  expect(mockHandleSelectAnswer).toHaveBeenCalledTimes(1);
  expect(mockHandleSelectAnswer).toHaveBeenCalledWith({
    answer: { "my-id": true },
    step: 2,
  });
});

it('allows the user to select and submit a "no" answer', () => {
  setup();

  fireEvent.click(screen.getByRole("button", { name: "No" }));

  expect(screen.getByRole("button", { name: "Continue" })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Continue" }));
  expect(mockHandleSelectAnswer).toHaveBeenCalledTimes(1);
  expect(mockHandleSelectAnswer).toHaveBeenCalledWith({
    answer: { "my-id": false },
    step: 2,
  });
});

it("does not display if the step does not match the currentStep", () => {
  setup({ currentStep: 4 });

	expect(screen.queryAllByText(defaultProps.text)).toHaveLength(0)
	  expect(screen.queryAllByRole("button", { name: "Yes" })).toHaveLength(0);
  expect(screen.queryAllByRole("button", { name: "No" })).toHaveLength(0);
});
