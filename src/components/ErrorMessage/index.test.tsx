import React from "react";

import userEvent from "@testing-library/user-event";
import { render, getByText, getByRole } from "test-utils";

import ErrorMessage from ".";

describe("ErrorMessage component", () => {
  const errorString = "An error occured";
  const actionLabel = "Try Again";
  const errorAction = jest.fn();

  let container: HTMLElement;

  beforeEach(() => {
    container = render(
      <ErrorMessage
        message={errorString}
        actionLabel={actionLabel}
        onErrorAction={errorAction}
      />
    ).container;
  });

  test("renders the error message", () => {
    expect(getByText(container, errorString)).toBeInTheDocument();
  });

  test("renders the action button and calls the onError prop when action button is clicked", () => {
    const actionButton = getByRole(container, "button", { name: actionLabel });
    expect(actionButton).toBeInTheDocument();

    userEvent.click(actionButton);

    expect(errorAction).toHaveBeenCalledTimes(1);
  });
});
