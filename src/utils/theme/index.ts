import themePinia from "@/store/theme";
import createMeteor from "@/utils/canvas/createMeteor";
import { storeToRefs } from "pinia";

export const useTheme = () => {
  const themeStore = themePinia();
  const { theme } = storeToRefs(themeStore);
  document.body.className = "";
  document.body.classList.add(theme.value);
  switch (theme.value) {
    case "night":
      createMeteor();
      break;
  }
};
