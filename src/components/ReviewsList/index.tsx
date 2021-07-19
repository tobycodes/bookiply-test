import { FC } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import {
  setChannelFilter,
  setScoreFilter,
  setCurrentPage,
} from "redux/actions/reviews";
import { RootState } from "redux/store";

import { Review } from "types/reviews";

import Pagination from "components/Pagination";
import ReviewItem from "components/ReviewItem";
import Search from "components/Search";
import Spinner from "components/Spinner";

import styles from "./styles.module.scss";

const SCORE_OPTIONS = [
  { label: "All ratings", value: "" },
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
  setCurrentPage: (page: number) => void;
  setChannelFilter: (query: string) => void;
  setScoreFilter: (value: string) => void;
}

const selectStyles = {
  control: (base: any) => ({
    ...base,
    minHeight: "3.8rem",
    height: "3.8rem",
  }),
  dropdownIndicator: (base: any) => ({ ...base, padding: "0.8rem" }),
  valueContainer: (base: any) => ({ ...base, padding: "0 0.8rem" }),
};

const ReviewsList: FC<Props> = ({
  currentPage,
  totalPages,
  isFetching,
  reviews,
  setCurrentPage,
  setChannelFilter,
  setScoreFilter,
}) => {
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.reviewCount}>{reviews.length} Reviews</h3>
        <div className={styles.filter}>
          <Select
            name="score"
            id="score"
            isDisabled={isFetching}
            options={SCORE_OPTIONS}
            placeholder="Rating"
            className={styles.filterInput}
            onChange={(val) => setScoreFilter(val?.value!)}
            styles={selectStyles}
          />
          <Search
            name="channel"
            placeholder="Channel"
            isDisabled={isFetching}
            onSearch={setChannelFilter}
          />
        </div>
      </div>
      {isFetching ? (
        <Spinner />
      ) : reviews.length > 0 ? (
        <>
          <ul data-testid="reviews-list">
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
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <div style={{ textAlign: "center" }}>No reviews submitted.</div>
      )}
    </div>
  );
};

const mapStateToProps = ({
  reviews: { data, currentPage, totalPages, isFetching },
}: RootState) => ({
  reviews: data,
  currentPage,
  totalPages,
  isFetching,
});

const mapDispatchToProps = { setCurrentPage, setChannelFilter, setScoreFilter };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
