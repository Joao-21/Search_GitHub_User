import UseData from "../useData";
import "./styles.scss";
import { useEffect } from "react";
import { LoadingTypes } from "../../../types";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/loading";

const SearchUserPage = () => {
  const {
    userName,
    handleUserName,
    handleSearchUserName,
    loadingStatus,
    resetFields,
  } = UseData();

  const navigate = useNavigate();

  const handleChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUserName(event.target.value);
  };

  const handleSearchUser = () => {
    handleSearchUserName();
  };

  useEffect(() => {
    resetFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loadingStatus === LoadingTypes.Loaded) {
      navigate("/user-details");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingStatus]);

  if (loadingStatus === LoadingTypes.Loading) return <Loading />;

  return (
    <>
      <div>
        <p className="search_title">
          Enter a Github username to view user information
        </p>
      </div>
      <div className="search_container">
        <div>
          <input
            type="text"
            placeholder="Search..."
            required
            className="input_field"
            value={userName}
            onChange={handleChangeUserName}
          />
        </div>
        <div>
          <button
            type="button"
            className="search_button"
            onClick={handleSearchUser}
          >
            <div className="search_icon"></div>
            <span></span>
          </button>
        </div>
      </div>
      {loadingStatus === LoadingTypes.Error && (
        <p className="error_message">Try again. Username not found!</p>
      )}
    </>
  );
};

export { SearchUserPage };
