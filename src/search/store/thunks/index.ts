import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserInformations: any = createAsyncThunk(
  "search/user",
  async (username: string, { rejectWithValue }) =>
    await axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        const data = response.data;
        const payload = {
          profilePicture: data.avatar_url,
          name: data.name,
          totalRepositories: data.public_repos,
          repositoryUrl: data.repos_url,
        };
        return payload;
      })
      .catch((err) => {
        console.log(err);
        return rejectWithValue("Opps there seems to be an error");
      })
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserRepositories: any = createAsyncThunk(
  "search/user/repositories",
  async (api: string, { rejectWithValue }) =>
    await axios
      .get(api)
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const payload = response.data.map((repository: any) => {
          return { name: repository.name, descripton: repository.description };
        });
        return payload;
      })
      .catch((err) => {
        console.log(err);
        return rejectWithValue("Opps there seems to be an error");
      })
);
