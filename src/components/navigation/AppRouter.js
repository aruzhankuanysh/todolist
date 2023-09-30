// AppRouter;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingThemePage from "../../pages/SettingThemePage";
import TodosPage from "../../pages/TodosPage";
import NoPage from "../../pages/NoPage";
import Navigation from "./Navigation";
import "./AppRouter.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
export default function AppRouter() {
  return (
    <Router>
      <Grid container justifyContent="center" height={'60vh'} padding={10}>
        <Card  sx={{ display: "flex", width: "1000px", padding: "20px"}}>
          <Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "200px" }}>
            <Navigation />
          </Box>
          <Routes>
            <Route path="/" element={<TodosPage />} />
            <Route path="/settings" element={<SettingThemePage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Card>
      </Grid>
    </Router>
  );
}
