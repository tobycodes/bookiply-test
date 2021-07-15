import { Review } from "./../../types/reviews";
import { getReviews } from "./../../async/api";
import {
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAIL,
  SET_IS_FETCHING,
} from "../types/reviews";
import { TDispatch } from "./../../types/common";
import parseLink from "../../utils/parseLink";

export const fetchReviews = (page?: number) => async (dispatch: TDispatch) => {
  dispatch(setIsFetching(true));

  try {
    const data = await getReviews(page);
    const { currentPage, totalPages } = parseLink(data.headers.link);

    dispatch(fetchReviewsSuccess({ data: data.data, currentPage, totalPages }));
  } catch (error) {
    const message = error.message + ": Unable to fetch reviews.";
    dispatch(fetchReviewsFail(message));
  }

  dispatch(setIsFetching(false));
};

export const fetchReviewsSuccess = (reviews: {
  data: Review[];
  currentPage: number;
  totalPages: number;
}) => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: reviews,
});

export const fetchReviewsFail = (error: string) => ({
  type: FETCH_REVIEWS_FAIL,
  payload: error,
});

export const setIsFetching = (isFetching: boolean) => ({
  type: SET_IS_FETCHING,
  payload: isFetching,
});
