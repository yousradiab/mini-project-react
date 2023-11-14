import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import UserDataPage from "./pages/UserDataPage.jsx";
import Nav from "./components/Nav.jsx";
import Users from "./components/Users.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Users />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<CreatePage />} />
        <Route path="/userData" element={<UserDataPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}
