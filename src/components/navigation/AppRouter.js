// AppRouter;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingThemePage from "../../pages/SettingThemePage";
import TodosPage from "../../pages/TodosPage";
import NoPage from "../../pages/NoPage";
import Navigation from "./Navigation";

export default function AppRouter() {
  return (
    <Router>
      <section>
        <Navigation />
      </section>
      <Routes>
        <Route path="/" element={<TodosPage />} />
        <Route path="/settings" element={<SettingThemePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}
