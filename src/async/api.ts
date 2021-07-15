import axios from "axios";

export const getReviews = (
  page = 1,
  params?: { channel: string; score: string }
) => {
  let url = `https://interview-task-api.bookiply.io/reviews?_page=${page}`;

  if (params?.score) {
    url += `&score_gte=${params.score}`;
  }

  if (params?.channel) {
    url += `&channel=${params.channel}`;
  }

  return axios.get(url);
};
