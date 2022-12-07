export enum LoadingTypes {
  Loading = "Loading",
  Loaded = "Loaded",
  Error = "Error",
  Idle = "Idle",
}

export interface UserInformationsData {
  profilePicture: string;
  name: string;
  totalRepositories: number;
  repositoryUrl: string;
}

export interface RepositoryData {
  name: string;
  descripton: string;
}
