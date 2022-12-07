import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getUserInformations, getUserRepositories } from "../thunks";
import {
  LoadingTypes,
  RepositoryData,
  UserInformationsData,
} from "../../../types";

export interface UserState {
  userName: string;
  loading: LoadingTypes;
  userInformations: UserInformationsData;
  repositories: RepositoryData[];
  loadingRepositories: LoadingTypes;
}

const initialState: UserState = {
  userName: "",
  loading: LoadingTypes.Idle,
  userInformations: {} as UserInformationsData,
  repositories: [],
  loadingRepositories: LoadingTypes.Idle,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    resetSlice: (state) => {
      state.userName = "";
      state.loading = LoadingTypes.Idle;
      state.userInformations = {} as UserInformationsData;
      state.loadingRepositories = LoadingTypes.Idle;
      state.repositories = [];
    },
    resetLoading: (state) => {
      state.loading = LoadingTypes.Idle;
    },
  },
  extraReducers: {
    [getUserInformations.pending]: (state: UserState) => {
      state.userInformations = {} as UserInformationsData;
      state.loading = LoadingTypes.Loading;
    },
    [getUserInformations.fulfilled]: (
      state: UserState,
      action: PayloadAction<UserInformationsData>
    ) => {
      state.loading = LoadingTypes.Loaded;
      state.userInformations = action.payload;
    },
    [getUserInformations.rejected]: (state: UserState) => {
      state.loading = LoadingTypes.Error;
    },
    [getUserRepositories.pending]: (state: UserState) => {
      state.loadingRepositories = LoadingTypes.Loading;
    },
    [getUserRepositories.fulfilled]: (
      state: UserState,
      action: PayloadAction<RepositoryData[]>
    ) => {
      state.loadingRepositories = LoadingTypes.Loaded;
      state.repositories = action.payload;
    },
    [getUserRepositories.rejected]: (state: UserState) => {
      state.loadingRepositories = LoadingTypes.Error;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserName, resetSlice, resetLoading } = searchSlice.actions;

export default searchSlice.reducer;
