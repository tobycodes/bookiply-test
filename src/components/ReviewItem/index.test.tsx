import React from "react";

import { render } from "test-utils";
import generateReviews from "test-utils/generateReviews";
import formatDate from "utils/formatDate";

import ReviewItem from ".";

describe("ReviewItem component", () => {
  const review = generateReviews(1)[0];
  const reviewedDate = formatDate(review.publishedAt);

  test("renders heading, channel, comment, author and date correctly", () => {
    const { getByRole, getByText } = render(<ReviewItem {...review} />);

    expect(getByRole("heading", { level: 4 })).toHaveTextContent(
      review.headline
    );
    expect(getByRole("img", { name: review.channel })).not.toBeNull();
    expect(getByText(review.comment)).not.toBeNull();
    expect(getByText(review.author)).not.toBeNull();
    expect(getByText(reviewedDate, { exact: false })).not.toBeNull();
  });
});
