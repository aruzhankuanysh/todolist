//SettingThemePage
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions/themeAction";

export default function SettingTheme() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <label>
      <input type="checkbox" checked={isDark} onChange={handleThemeToggle} />
      Dark mode
    </label>
  );
}
