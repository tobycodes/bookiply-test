import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
  message: string;
  actionLabel: string;
  onErrorAction: () => void;
}

const ErrorMessage: FC<Props> = ({ message, actionLabel, onErrorAction }) => {
  return (
    <div className={styles.error}>
      <span role="alert">{message}</span>
      <button onClick={onErrorAction}>{actionLabel}</button>
    </div>
  );
};

export default ErrorMessage;
