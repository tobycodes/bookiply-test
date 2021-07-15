import { FC } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import useDebounce from "../../hooks/useDebounce";

import {
  fetchReviews,
  setChannelFilter,
  setScoreFilter,
} from "../../redux/actions/reviews";
import { RootState } from "../../redux/store";
import { Review } from "../../types/reviews";
import Pagination from "../Pagination";
import ReviewItem from "../ReviewItem";
import Search from "../Search";
import Spinner from "../Spinner";

import styles from "./styles.module.scss";

const SCORE_OPTIONS = [
  { label: "1.0 or higher", value: "1.0" },
  { label: "2.0 or higher", value: "2.0" },
  { label: "3.0 or higher", value: "3.0" },
  { label: "4.0 or higher", value: "4.0" },
];

interface Props {
  currentPage: number;
  totalPages: number;
  isFetching: boolean;
  reviews: Review[];
  fetchReviews: (page: number) => void;
  setChannelFilter: (query: string) => void;
  setScoreFilter: (value: string) => void;
}

const ReviewsList: FC<Props> = ({
  currentPage,
  totalPages,
  isFetching,
  reviews,
  fetchReviews,
  setChannelFilter,
  setScoreFilter,
}) => {
  const handleChannelFilter = useDebounce((query: string) => {
    setChannelFilter(query.toUpperCase());
  });

  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles["review-count"]}>{reviews.length} Reviews</h3>
        <div className={styles.filter}>
          <Select
            name="score"
            isDisabled={isFetching}
            options={SCORE_OPTIONS}
            placeholder="Rating"
            className={styles["filter-input"]}
            onChange={(val) => setScoreFilter(val?.value!)}
          />
          <Search
            name="channel"
            placeholder="Channel"
            isDisabled={isFetching}
            onChange={handleChannelFilter}
          />
        </div>
      </div>
      {isFetching ? (
        <Spinner />
      ) : reviews.length > 0 ? (
        <>
          <div className={styles["review-list"]}>
            {reviews.map((review, idx) => (
              <ReviewItem
                key={idx}
                author={review.author}
                channel={review.channel}
                comment={review.comment}
                headline={review.headline}
                negativeFeedback={review.negativeFeedback}
                positiveFeedback={review.positiveFeedback}
                publishedAt={review.publishedAt}
                score={review.score}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={fetchReviews}
          />{" "}
        </>
      ) : (
        <div style={{ textAlign: "center" }}>No reviews submitted.</div>
      )}
    </div>
  );
};

const mapStateToProps = ({
  reviews: { data, currentPage, totalPages, isFetching, score, channel },
}: RootState) => ({
  reviews: data,
  currentPage,
  totalPages,
  isFetching,
});

const mapDispatchToProps = { fetchReviews, setChannelFilter, setScoreFilter };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
