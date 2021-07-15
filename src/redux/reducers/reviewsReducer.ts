import { Review } from "./../../types/reviews";
import {
  SET_IS_FETCHING,
  FETCH_REVIEWS_SUCCESS,
  FETCH_REVIEWS_FAIL,
} from "./../types/reviews";
let data: Review[] = [];

const initialState = {
  data,
  queryType: "",
  queryKeyword: "",
  currentPage: 1,
  totalPages: 1,
  errorMessage: "",
  isFetching: false,
};

type ReviewsState = typeof initialState;

const reviewsReducer = (
  state = initialState,
  { type, payload }: any
): ReviewsState => {
  switch (type) {
    case SET_IS_FETCHING:
      return { ...state, isFetching: payload };
    case FETCH_REVIEWS_SUCCESS:
      return { ...state, ...payload, errorMessage: "" };

    case FETCH_REVIEWS_FAIL:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};

export default reviewsReducer;
