import { screen, render } from "@testing-library/react";
import Consultation from "./page";

it.skip("renders", () => {
  render(<Consultation />);

  expect(screen.getByText("Consultation page")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
});
