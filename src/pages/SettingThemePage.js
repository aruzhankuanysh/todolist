//SettingThemePage
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions/themeAction";
import { Container, FormControlLabel, FormGroup, Switch } from "@mui/material";

export default function SettingTheme() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    console.log(isDark)
  };
  return (
    <Container>
      <h3>Вы можете включить темную тему</h3>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={isDark}
              onChange={handleThemeToggle}
            />
          }
          label="Темная тема"
        />
      </FormGroup>
    </Container>
  );
}
