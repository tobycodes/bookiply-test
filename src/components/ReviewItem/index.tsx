import { FC } from "react";
import { Review } from "../../types/reviews";
import styles from "./style.module.scss";

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
  return (
    <div>
      <div className="header">
        <div className="rating">{score} / 5</div>
        <div className="channel">
          <img src="../../assets/AIRBNB.svg" alt={channel} />
        </div>
      </div>
      <h4 className="headline">{headline}</h4>
      <p className="comment">{comment}</p>
      <p className="feedback">{positiveFeedback}</p>
      <p className="feedback">{negativeFeedback}</p>
      <div className="footer">
        <span className="author">{author}</span>
        <span className="date">Reviewed {publishedAt}</span>
      </div>
    </div>
  );
};

export default ReviewItem;
