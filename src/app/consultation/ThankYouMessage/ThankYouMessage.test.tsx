import { render, screen } from "@testing-library/react";
import { ThankYouMessage } from "./ThankYouMessage";
import { useConsultationContext } from "../context/ConsultationContext";
import { consultationQuestions } from "../context/consultationQuestions";

jest.mock("../context/ConsultationContext");

const mockUseConsultationContext = useConsultationContext as jest.Mock;

it("renders", () => {
  mockUseConsultationContext.mockReturnValue({
    currentStep: 6,
    questions: consultationQuestions,
  });
  render(<ThankYouMessage />);

  expect(screen.getByText("Thank you!")).toBeInTheDocument();
  expect(screen.getByTestId("thank-you-message-text")).toBeInTheDocument();
});

it('does not render when the current step lower than the number of steps', () => {
    mockUseConsultationContext.mockReturnValue({
    currentStep: 4,
    questions: consultationQuestions,
  });
  render(<ThankYouMessage />);

    expect(screen.queryAllByText("Thank you!")).toHaveLength(0);
  expect(screen.queryAllByTestId("thank-you-message-text")).toHaveLength(0);
})
