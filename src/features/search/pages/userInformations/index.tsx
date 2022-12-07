import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { LoadingTypes } from "../../../../types";
import { Loading } from "../../components/loading";
import { RepositoriesTable } from "../../components/repositoriesTable";
import UseData from "../useData";
import "./styles.scss";

const UserInformations = () => {
  const {
    handleGetUserRepositories,
    loadingRepositoriesStatus,
    handleResetLoading,
    userInformations,
    userRepositories,
  } = UseData();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const repositoriesPerPage = 5;

  const indexOfLastRepository = currentPage * repositoriesPerPage;
  const indexOfFirstRepository = indexOfLastRepository - repositoriesPerPage;

  const currentRepositories = userRepositories.slice(
    indexOfFirstRepository,
    indexOfLastRepository
  );

  useEffect(() => {
    handleResetLoading();
    handleGetUserRepositories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loadingRepositoriesStatus === LoadingTypes.Error) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingRepositoriesStatus]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="user_informations_container">
        <img
          src={userInformations.profilePicture}
          className="image"
          alt="text"
        />
        <div>
          <p className="user_information">{userInformations.name}</p>
          <p className="user_information">
            {userInformations.totalRepositories} repositories
          </p>
        </div>
      </div>
      <div>
        {loadingRepositoriesStatus === LoadingTypes.Loading ? (
          <Loading />
        ) : (
          <RepositoriesTable
            repositoriesList={currentRepositories}
            repositoriesPerPage={repositoriesPerPage}
            totalRepositories={userRepositories.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export { UserInformations };
