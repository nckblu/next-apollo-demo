import React from "react";
import Card from "../../components/Card";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("should render the name", () => {
    const nameText = "i'm a beautiful name";
    render(<Card name={nameText} />);
    const name = screen.getByText(nameText);
    expect(name).toBeInTheDocument();
  });

  it("should render the address", () => {
    const addressText = "our house in the middle of our street";
    render(<Card name={addressText} />);
    const name = screen.getByText(addressText);
    expect(name).toBeInTheDocument();
  });

  it("should render the email and put it in a mailto", () => {
    const emailAddressText = "timbl@w3.org";
    const nameText = "Tim Berners-Lee";
    render(<Card name={nameText} email={emailAddressText} />);
    const name = screen.getByText(nameText).closest("a");
    expect(name).toHaveAttribute("href", `mailto:${emailAddressText}`);
  });
});
