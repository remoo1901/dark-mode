import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const useDarkMode = (mode) => {
  const [darkMode, setDarkMode] = useLocalStorage(mode);

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;