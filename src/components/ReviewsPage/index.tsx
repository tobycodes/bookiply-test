import { FC, useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { fetchReviews } from "../../redux/actions/reviews";
import { RootState } from "../../redux/store";
import ErrorMessage from "../ErrorMessage";
import ReviewList from "../ReviewsList";
import Spinner from "../Spinner";

import styles from "./style.module.scss";

interface Props {
  isLoading: boolean;
  errorMessage: string;
  currentPage: number;
  fetchReviews: (page?: number) => void;
}

const ReviewsPage: FC<Props> = ({
  isLoading,
  errorMessage,
  currentPage,
  fetchReviews,
}) => {
  const fetchData = useCallback(() => {
    fetchReviews(currentPage);
  }, [fetchReviews, currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.page}>
      <div
        className={styles.banner}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0, 0.1), #163753), url('/assets/background.png')",
        }}
      ></div>
      <div className={styles.main}>
        <div className={styles.header}>
          <span className={styles.id}>ID: 091021</span>
          <h1 className={styles.name}>La Casa de las Flores</h1>
        </div>
        <div className={styles.reviews}>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <ErrorMessage message={errorMessage} onClick={fetchData} />
          ) : (
            <ReviewList />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ reviews }: RootState) => ({
  isLoading: reviews.isFetching,
  errorMessage: reviews.errorMessage,
  currentPage: reviews.currentPage,
});

const mapDispatchToProps = { fetchReviews };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsPage);
