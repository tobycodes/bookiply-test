import axios from "axios";

export const getReviews = (
  page = 1,
  params?: { channel: string; score: string }
) => {
  let url = `https://interview-task-api.bookiply.io/reviews?_page=${page}&score_gte=${params?.score}&channel_like=${params?.channel}`;

  return axios.get(url);
};
