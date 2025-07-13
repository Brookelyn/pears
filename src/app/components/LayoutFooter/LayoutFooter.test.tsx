import { render, screen } from "@testing-library/react";
import { LayoutFooter } from "./LayoutFooter";

it("renders", () => {
  render(<LayoutFooter />);

  expect(screen.getByRole("link", { name: "FAQs" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Delivery" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "About us" })).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Referral scheme" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Education discount" })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Complaints" })).toBeInTheDocument();
});
