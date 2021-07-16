import { FC, useCallback, useEffect } from "react";
import { connect } from "react-redux";

import { fetchReviews } from "../../redux/actions/reviews";
import { RootState } from "../../redux/store";
import ErrorMessage from "../ErrorMessage";
import ReviewList from "../ReviewsList";

import styles from "./style.module.scss";

interface Props {
  errorMessage: string;
  currentPage: number;
  score: string;
  channel: string;
  fetchReviews: (
    page: number,
    opts?: { score: string; channel: string }
  ) => void;
}

const ReviewsPage: FC<Props> = ({
  errorMessage,
  currentPage,
  score,
  channel,
  fetchReviews,
}) => {
  const fetchData = useCallback(() => {
    fetchReviews(currentPage, { score, channel });
  }, [fetchReviews, currentPage, score, channel]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.page}>
      <div
        className={styles.banner}
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0, 0.1), rgba(22, 55, 83, 0.9)), url('/assets/background.png')",
        }}
      ></div>
      <div className={styles.main}>
        <div className={styles.header}>
          <span className={styles.id}>ID: 091021</span>
          <h1 className={styles.name}>La Casa de las Flores</h1>
        </div>
        <div className={styles.reviews}>
          {errorMessage ? (
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
  errorMessage: reviews.errorMessage,
  currentPage: reviews.currentPage,
  score: reviews.score,
  channel: reviews.channel,
});

const mapDispatchToProps = { fetchReviews };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsPage);
