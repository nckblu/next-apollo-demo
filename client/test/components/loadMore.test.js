import React from "react";
import LoadMoreButton from "../../components/LoadMoreButton";
import { render, screen, fireEvent } from "@testing-library/react";

describe("LoadMoreButton", () => {
  it("should show load more", () => {
    const text = "load more";
    render(<LoadMoreButton />);
    const loadMore = screen.getByText(text);
    expect(loadMore).toBeInTheDocument();
  });

  it("should fire the onClick prop when clicked", () => {
    const mockedOnClick = jest.fn();
    render(<LoadMoreButton onClick={mockedOnClick} />);
    const loadMore = screen.getByText("load more");
    fireEvent(
      loadMore,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
