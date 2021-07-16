import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
  message: string;
  onClick: () => void;
}

const ErrorMessage: FC<Props> = ({ message, onClick }) => {
  return (
    <div className={styles.error}>
      <span>{message}</span>
      <button onClick={onClick}>Try Again</button>
    </div>
  );
};

export default ErrorMessage;
