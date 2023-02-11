import { useSelector } from "react-redux";

function useTheme() {
  return useSelector((state) => state.theme.colors);
}

export default useTheme;
