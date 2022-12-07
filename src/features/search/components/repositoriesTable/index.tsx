import { useNavigate } from "react-router";
import { RepositoryData } from "../../../../types";
import { Pagination } from "../pagination";
import "./styles.scss";

interface Props {
  repositoriesList: RepositoryData[];
  repositoriesPerPage: number;
  totalRepositories: number;
  paginate: (num: number) => void;
  currentPage: number;
}

const RepositoriesTable = ({
  repositoriesList,
  repositoriesPerPage,
  totalRepositories,
  paginate,
  currentPage,
}: Props) => {
  const navigate = useNavigate();

  const handleBackToSearch = () => {
    navigate("/");
  };

  return (
    <div className="table_container">
      <table className="table">
        <tr>
          <th className="table_header">Name</th>
          <th className="table_header">Descripton</th>
        </tr>
        {repositoriesList.map((repository, key) => {
          return (
            <tr key={key}>
              <td className="table_data">{repository.name}</td>
              <td className="table_data">{repository.descripton || "--"}</td>
            </tr>
          );
        })}
      </table>
      <div className="bottom_container">
        <Pagination
          repositoriesPerPage={repositoriesPerPage}
          totalRepositories={totalRepositories}
          paginate={paginate}
          currentPage={currentPage}
        />
        <button className="button" onClick={handleBackToSearch}>
          Back to Search
        </button>
      </div>
    </div>
  );
};

export { RepositoriesTable };
