import React from "react";

import userEvent from "@testing-library/user-event";

import {
  render,
  getByRole,
  getByTestId,
  waitFor,
  getAllByRole,
} from "test-utils";
import * as apiMock from "async/api";
import { generateReviewsByPage } from "test-utils/generateReviews";

import ReviewPage from ".";

jest.mock("async/api.ts");

const getReviews = apiMock.getReviews as jest.MockedFunction<
  typeof apiMock.getReviews
>;

describe("ReviewPage component", () => {
  let container: HTMLElement;

  beforeEach(async () => {
    getReviews.mockImplementation(
      (page?: number, options?: { score: string; channel: string }) => {
        const data = generateReviewsByPage(
          page,
          options?.score,
          options?.channel
        );

        return Promise.resolve({ data, headers: { link: "" } }) as any;
      }
    );

    container = render(<ReviewPage />).container;
  });

  test("renders a list of reviews on mount", async () => {
    const reviewsListContainer = getByTestId(container, "reviews-list");
    const reviewItems = getAllByRole(reviewsListContainer, "listitem");

    //Testing with 10 items because I know my mocked API returns 10 items by default
    expect(getReviews).toHaveBeenCalled();
    expect(getReviews).toHaveBeenCalledWith(1, { score: "", channel: "" });
    expect(getByRole(container, "heading", { level: 3 })).toHaveTextContent(
      /10 reviews/i
    );

    expect(reviewsListContainer).toBeInTheDocument();
    expect(reviewItems).toHaveLength(10);
  });

  // Writing a test for the score filter was challenging because I used the react-select library
  //This is why I'm testing for the channel filter only (which is a custom component) to avoid complicated tests
  test("enables user filter list by channel", () => {
    const channelFilterInput = getByRole(container, "searchbox", {
      name: "channel",
    });
    const reviewsListContainer = getByTestId(container, "reviews-list");
    const reviewItems = getAllByRole(reviewsListContainer, "listitem");
    const searchQuery = "AIRBNB";
    const filteredItems = generateReviewsByPage(1, "", searchQuery);

    userEvent.type(channelFilterInput, searchQuery);

    waitFor(() => {
      expect(getReviews).toHaveBeenCalled();
      expect(getReviews).toHaveBeenCalledWith(1, {
        score: "",
        channel: searchQuery,
      });
      expect(reviewItems).toHaveLength(filteredItems.length);
    });
  });
});
