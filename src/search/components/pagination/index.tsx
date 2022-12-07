import "./styles.scss";

interface Props {
  repositoriesPerPage: number;
  totalRepositories: number;
  paginate: (num: number) => void;
  currentPage: number;
}

const Pagination = ({
  repositoriesPerPage,
  totalRepositories,
  paginate,
  currentPage,
}: Props) => {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalRepositories / repositoriesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination_container">
      {pageNumbers.map((number) => (
        <div
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? "is_selected" : "pagination_item"}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export { Pagination };
