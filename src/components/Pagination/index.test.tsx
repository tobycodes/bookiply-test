import React from "react";
import userEvent from "@testing-library/user-event";

import { render, getAllByRole, getByRole } from "test-utils";

import Pagination from ".";

describe("Pagination component", () => {
  const currentPage = 1;
  const totalPages = 3;
  const onPageChange = jest.fn();

  let container: HTMLElement,
    nextButton: HTMLElement,
    prevButton: HTMLElement,
    page3Button: HTMLElement;

  beforeEach(() => {
    container = render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    ).container;

    nextButton = getByRole(container, "button", { name: /Next/i });
    prevButton = getByRole(container, "button", { name: /Prev/i });
    page3Button = getByRole(container, "button", { name: /Page 3/ });
  });

  test("renders pagination buttons correctly", () => {
    expect(getByRole(container, "button", { name: /Page 1/ })).not.toBeNull();
    expect(nextButton).not.toBeNull();
    expect(prevButton).not.toBeNull();

    expect(getAllByRole(container, "button")).toHaveLength(5);
  });

  test("calls onPageChange handler with the correct page number", () => {
    //NEXT BUTTON
    userEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalled();
    expect(onPageChange).toHaveBeenCalledWith(2);

    //DIRECT PAGE BUTTON
    userEvent.click(page3Button);
    expect(onPageChange).toHaveBeenLastCalledWith(3);

    //PREV BUTTON
    userEvent.click(getByRole(container, "button", { name: /Page 2/ }));
    userEvent.click(prevButton);
    expect(onPageChange).toHaveBeenLastCalledWith(1);
  });

  test("disables previous and next buttons when at first or last page", () => {
    userEvent.click(prevButton);
    expect(onPageChange).not.toHaveBeenCalled();

    userEvent.click(page3Button);
    userEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledTimes(1);
  });
});
