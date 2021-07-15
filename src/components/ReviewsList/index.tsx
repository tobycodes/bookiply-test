import { FC } from "react";
import { connect } from "react-redux";
import { fetchReviews } from "../../redux/actions/reviews";
import { RootState } from "../../redux/store";
import { Review } from "../../types/reviews";
import Pagination from "../Pagination";
import ReviewItem from "../ReviewItem";

import styles from "./styles.module.scss";

interface Props {
  currentPage: number;
  totalPages: number;
  reviews: Review[];
  fetchReviews: (page?: number) => void;
}

const ReviewsList: FC<Props> = ({
  currentPage,
  totalPages,
  reviews,
  fetchReviews,
}) => {
  return (
    <>
      <h3 className={styles["review-count"]}>{reviews.length} Reviews</h3>
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
      />
    </>
  );
};

const mapStateToProps = ({
  reviews: { data, currentPage, totalPages },
}: RootState) => ({
  reviews: data,
  currentPage,
  totalPages,
});

const mapDispatchToProps = { fetchReviews };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
