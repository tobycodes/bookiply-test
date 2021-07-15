import { FC } from "react";
import ReactPaginate from "react-paginate";
import styles from "./styles.module.scss";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={currentPage - 1}
        forcePage={currentPage - 1}
        containerClassName={styles.container}
        pageClassName={styles.button}
        activeClassName={styles.active}
        disabledClassName={styles.disabled}
        previousClassName={styles.previous}
        nextClassName={styles.next}
        breakClassName={styles.button}
        onPageChange={({ selected }) => onPageChange(selected + 1)}
        disableInitialCallback={true}
      />
    </div>
  );
};

export default Pagination;
