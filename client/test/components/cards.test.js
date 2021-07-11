import React from "react";
import Cards from "../../components/Cards";
import { render, screen } from "@testing-library/react";

describe("Cards", () => {
  const testData = [
    {
      name: "bob the builder",
      address: "bob street",
    },
    {
      name: "postman pat",
      address: "somewhere up north",
    },
  ];
  it("should render the cards", () => {
    render(<Cards data={testData} />);

    const firstName = screen.getByText(testData[0].name);
    const firstAddress = screen.getByText(testData[0].address);

    const secondName = screen.getByText(testData[1].name);
    const secondAddress = screen.getByText(testData[1].address);

    expect(firstName).toBeInTheDocument();
    expect(firstAddress).toBeInTheDocument();
    expect(secondName).toBeInTheDocument();
    expect(secondAddress).toBeInTheDocument();
  });
});
