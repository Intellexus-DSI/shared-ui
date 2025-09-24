import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import MultiChoosePage from "./pages/MultiChoosePage";
import GenericSearchPage from "./pages/GenericSearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Base.scss";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Main Application Routes with MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route path="/multi-choose" element={<MultiChoosePage />} />
        <Route path="/generic-search" element={<GenericSearchPage />} />
        {/* Catch-All Route for 404 */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
    </Routes>
  );
};

export default App;
