import { render, screen } from "@testing-library/react";
import { LayoutHeader } from "./LayoutHeader";

it("renders", () => {
  render(<LayoutHeader />);

  expect(screen.getByAltText("MedExpress logo")).toBeInTheDocument();
});
