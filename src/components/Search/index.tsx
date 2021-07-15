import { ChangeEvent, FC, useState } from "react";

import styles from "./styles.module.scss";

interface Props {
  name: string;
  isDisabled: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Search: FC<Props> = ({ name, isDisabled, placeholder, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      name={name}
      id={name}
      type="text"
      value={value}
      disabled={isDisabled}
      placeholder={placeholder}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default Search;
