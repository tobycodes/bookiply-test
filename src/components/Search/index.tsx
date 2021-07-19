import { ChangeEvent, FC, useState } from "react";

import useDebounce from "hooks/useDebounce";

import styles from "./styles.module.scss";

interface Props {
  name: string;
  isDisabled: boolean;
  onSearch: (value: string) => void;
  id?: string;
  placeholder?: string;
}

const Search: FC<Props> = ({ name, isDisabled, placeholder, id, onSearch }) => {
  const [value, setValue] = useState("");
  const debouncedOnSearch = useDebounce(onSearch);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedOnSearch(e.target.value);
  };

  return (
    <input
      name={name}
      id={id || name}
      aria-label={name}
      type="search"
      value={value}
      disabled={isDisabled}
      placeholder={placeholder}
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default Search;
