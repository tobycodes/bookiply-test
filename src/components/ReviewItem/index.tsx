import { FC } from "react";
import { Review } from "../../types/reviews";

import styles from "./style.module.scss";

import formatDate from "../../utils/formatDate";

const ReviewItem: FC<Review> = ({
  headline,
  comment,
  author,
  score,
  channel,
  publishedAt,
  positiveFeedback,
  negativeFeedback,
}) => {
  const fullDateString = formatDate(publishedAt);

  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <div className={styles.rating}>
          <span>{score}</span> / 5
        </div>
        <span className={styles.channel}>
          <img src={`/assets/${channel}.svg`} alt={channel} />
        </span>
      </div>
      <h4 className={styles.headline}>{headline}</h4>
      <p className={styles.comment}>{comment}</p>
      {positiveFeedback ? (
        <p className={styles.feedback}>
          <span>
            <img src="/assets/thumb-up.svg" alt="thumb up" />
          </span>
          {positiveFeedback}
        </p>
      ) : null}
      {negativeFeedback ? (
        <p className={styles.feedback}>
          <img src="/assets/thumb-down.svg" alt="thumb down" />
          {negativeFeedback}
        </p>
      ) : null}
      <div className={styles.footer}>
        <span className={styles.author}>{author}</span>
        <span className={styles.date}>Reviewed {fullDateString}</span>
      </div>
    </div>
  );
};

export default ReviewItem;
