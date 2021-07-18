import React from "react";
import userEvent from "@testing-library/user-event";

import {
  render,
  getByRole,
  waitFor,
  DEFAULT_DEBOUNCE_TIMEOUT,
} from "test-utils";

import Search from ".";

const onSearch = jest.fn();

describe("Search component", () => {
  let container: HTMLElement, searchInput: HTMLElement;

  beforeEach(() => {
    container = render(
      <Search name="Channel" isDisabled={false} onSearch={onSearch} />
    ).container;

    searchInput = getByRole(container, "searchbox");
  });

  test("renders input element", () => {
    expect(searchInput).toBeInTheDocument();
  });

  test("updates input when user starts searching", () => {
    const inputString = "AIRBNB";
    userEvent.type(searchInput, inputString);
    expect(searchInput).toHaveDisplayValue(inputString);

    waitFor(
      () => {
        expect(onSearch).toHaveBeenCalled();
        expect(onSearch).toHaveBeenCalledWith(inputString);
      },
      {
        interval: DEFAULT_DEBOUNCE_TIMEOUT,
      }
    );
  });
});
