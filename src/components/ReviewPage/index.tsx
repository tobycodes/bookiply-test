import { FC } from "react";
import { connect } from "react-redux";

import { fetchReviews } from "../../redux/actions/reviews";
import { RootState } from "../../redux/store";
import { Review } from "../../types/reviews";
import ReviewItem from "../ReviewItem";

import background from "../../assets/background.png";
import styles from "./style.module.scss";

interface Props {
  isLoading: boolean;
  reviews: Review[];
  fetchReviews: () => void;
}

const ReviewPage: FC<Props> = ({ isLoading, reviews, fetchReviews }) => {
  return (
    <div className={styles.page}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, #163753), url(${background})`,
        }}
      ></div>
      <div className={styles.main}>
        <div className={styles.header}>
          <span className={styles.id}>ID: 091021</span>
          <h1 className={styles.name}>La Casa de las Flores</h1>
        </div>
        <div className={styles.reviews}>
          <h3 className={styles["review-count"]}>17 Reviews</h3>
          <div className={styles.reviewList}>
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
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ reviews }: RootState) => ({
  reviews: [
    {
      headline: "Amazing Pool!",
      comment:
        "Mauris justo ante, pulvinar eget consequat at, bibendum et lorem. Suspendisse lacus urna, fringilla sit amet commodo eget, condimentum et nisl. Pellentesque elit mi, porta in mi at, vulputate mattis lacus.",
      author: "Alissa Stacey",
      positiveFeedback: "The location is perfect",
      negativeFeedback: null,
      score: 4.1,
      channel: "AIRBNB",
      publishedAt: "2020-08-11T12:20:02.340Z",
    },
    {
      headline: "Very nice host, and quite chill place.",
      comment:
        "Nulla dictum ligula ac tortor egestas, sit amet ullamcorper risus sollicitudin. Morbi vitae leo accumsan, interdum ligula non, placerat ligula. Ut faucibus congue purus, vitae semper sapien viverra non. Pellentesque rhoncus porttitor diam, eu ultrices metus dictum at.",
      author: "Alissa Stacey",
      positiveFeedback: "The location is perfect",
      negativeFeedback: "No parking spot.",
      score: 4,
      channel: "HOLIDU",
      publishedAt: "2020-08-11T12:20:02.340Z",
    },
  ],
  isLoading: reviews.isFetching,
});

const mapDispatchToProps = { fetchReviews };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewPage);
