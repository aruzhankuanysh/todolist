//SettingThemePage
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions/themeAction";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

export default function SettingTheme() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
    console.log(isDark)
  };
  return (
    <>
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
    </>
  );
}
