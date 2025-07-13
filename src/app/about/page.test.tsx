import { screen, render } from "@testing-library/react";
import About from "./page";

it("renders", () => {
  render(<About />);

  expect(screen.getByText("About page")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
});
