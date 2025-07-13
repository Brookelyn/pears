import { screen, render, fireEvent } from "@testing-library/react";
import { Question } from "./Question";

const mockHandleSelectAnswer = jest.fn();

const defaultProps = {
  handleSelectAnswer: mockHandleSelectAnswer,
  id: "my-id",
  text: "Do you like ice cream?",
};

const setup = (propOverrides = {}) =>
  render(<Question {...defaultProps} {...propOverrides} />);

it("renders", () => {
  setup();

  expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Yes" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "No" })).toBeInTheDocument();
});

it('sends the expected information when the "Yes" button is selected', () => {
  setup();

  fireEvent.click(screen.getByRole("button", { name: "Yes" }));

  expect(mockHandleSelectAnswer).toHaveBeenCalledTimes(1);
  expect(mockHandleSelectAnswer).toHaveBeenCalledWith({ "my-id": true });
});

it('sends the expected information when the "No" button is selected', () => {
  setup();

  fireEvent.click(screen.getByRole("button", { name: "No" }));

  expect(mockHandleSelectAnswer).toHaveBeenCalledTimes(1);
  expect(mockHandleSelectAnswer).toHaveBeenCalledWith({ "my-id": false });
});
