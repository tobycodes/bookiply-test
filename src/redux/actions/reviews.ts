import { getReviews } from "./../../async/api";
import { FETCH_REVIEWS_SUCCESS, SET_IS_FETCHING } from "../types/reviews";
import { TDispatch } from "./../../types/common";

export const fetchReviews = () => async (dispatch: TDispatch) => {
  dispatch(setIsFetching(true));

  try {
    const { data } = await getReviews();

    console.log(data);
  } catch (error) {
    console.log(error);
  }

  dispatch(setIsFetching(false));
};

export const setReviews = (reviews: any) => ({
  type: FETCH_REVIEWS_SUCCESS,
  payload: reviews,
});

export const setIsFetching = (isFetching: boolean) => ({
  type: SET_IS_FETCHING,
  payload: isFetching,
});
