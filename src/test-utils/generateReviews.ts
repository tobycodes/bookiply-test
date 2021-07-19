import { Review } from "./../types/reviews";
import data from "./data";
export {};

export default function generateReviews(numOfReviews = 1): Review[] {
  const slicedReviews = data.slice(0, numOfReviews);

  return slicedReviews;
}

export const generateReviewsByPage = (
  page?: number,
  score?: string,
  channel?: string
) => {
  let result = data.map((x) => ({
    ...x,
    headline: `${x.headline} ${page || ""}`,
  }));

  if (score) {
    result = result.filter((x) => x.score >= +score);
  }

  if (channel) {
    result = result.filter((x) => x.channel.includes(channel));
  }

  return result;
};
