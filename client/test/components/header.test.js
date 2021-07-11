import React from "react";
import Header from "../../components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("should render the heading", () => {
    const headingText = "i'm a beautiful heading";
    render(<Header heading={headingText} />);
    const heading = screen.getByText(headingText);
    expect(heading).toBeInTheDocument();
  });

  it("should render the strapline", () => {
    const straplineText = "I sure hope england win the euros";
    render(<Header strapline={straplineText} />);
    const strapline = screen.getByText(straplineText);
    expect(strapline).toBeInTheDocument();
  });
});
