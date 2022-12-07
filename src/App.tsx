import { Route, Routes } from "react-router";
import "./App.css";
import { SearchUserPage } from "./features/search/pages/searchUser";
import { UserInformations } from "./features/search/pages/userInformations";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchUserPage />} />
        <Route path="/user-details" element={<UserInformations />} />
      </Routes>
    </div>
  );
};

export { App };
