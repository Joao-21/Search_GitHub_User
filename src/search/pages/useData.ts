import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";
import {
  LoadingTypes,
  RepositoryData,
  UserInformationsData,
} from "../../types";
import {
  resetSlice,
  setUserName,
  resetLoading,
} from "../store/slices/searchUserSlice";
import { getUserInformations, getUserRepositories } from "../store/thunks";

interface Data {
  userName: string;
  handleUserName: (value: string) => void;
  handleSearchUserName: () => void;
  loadingStatus: LoadingTypes;
  userInformations: UserInformationsData;
  resetFields: () => void;
  handleGetUserRepositories: () => void;
  loadingRepositoriesStatus: LoadingTypes;
  handleResetLoading: () => void;
  userRepositories: RepositoryData[];
}

export default function UseData(): Data {
  const dispatch = useDispatch();

  const userName = useSelector((state: RootState) => state.search.userName);
  const loadingStatus = useSelector((state: RootState) => state.search.loading);
  const userInformations = useSelector(
    (state: RootState) => state.search.userInformations
  );

  const loadingRepositoriesStatus = useSelector(
    (state: RootState) => state.search.loadingRepositories
  );

  const userRepositories = useSelector(
    (state: RootState) => state.search.repositories
  );

  const handleUserName = (value: string) => {
    dispatch(setUserName(value));
  };

  const handleSearchUserName = async () => {
    dispatch(getUserInformations(userName));
  };

  const handleGetUserRepositories = async () => {
    dispatch(getUserRepositories(userInformations.repositoryUrl));
  };

  const resetFields = () => {
    dispatch(resetSlice());
  };

  const handleResetLoading = () => {
    dispatch(resetLoading());
  };

  return {
    userName,
    handleUserName,
    handleSearchUserName,
    loadingStatus,
    userInformations,
    resetFields,
    handleGetUserRepositories,
    loadingRepositoriesStatus,
    handleResetLoading,
    userRepositories,
  };
}
