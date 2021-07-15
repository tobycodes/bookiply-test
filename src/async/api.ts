import axios from "axios";

export const getReviews = (page = 1) =>
  axios.get(`https://interview-task-api.bookiply.io/reviews?_page=${page}`);
