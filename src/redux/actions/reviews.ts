import { SET_CURRENT_PAGE } from "redux/action-types/reviews";
import { Review } from "types/reviews";
import { getReviews } from "async/api";
import {
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAIL,
  SET_IS_FETCHING,
  SET_SCORE_FILTER,
  SET_CHANNEL_FILTER,
} from "redux/action-types/reviews";
import { TDispatch } from "types/common";
import parseLinkHeader from "utils/parseLinkHeader";

export const fetchReviews =
  (page: number, filterParams?: { channel: string; score: string }) =>
  async (dispatch: TDispatch) => {
    dispatch(setIsFetching(true));

    try {
      const { data, headers } = await getReviews(page, filterParams);

      const { currentPage, totalPages } = parseLinkHeader(headers.link);

      dispatch(fetchReviewsSuccess({ data, currentPage, totalPages }));
    } catch (error) {
      const message = error.message + ": Unable to fetch reviews.";
      dispatch(fetchReviewsFail(message));
      console.error(error);
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

export const setCurrentPage = (page: number) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setScoreFilter = (score: string) => ({
  type: SET_SCORE_FILTER,
  payload: score,
});

export const setChannelFilter = (channel: string) => ({
  type: SET_CHANNEL_FILTER,
  payload: channel,
});
