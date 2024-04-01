import themePinia from "../../store/theme";
import createMeteor from "@/utils/canvas/createMeteor";
import { storeToRefs } from "pinia";
const themeStore = themePinia();

export const useTheme = () => {
  const { theme } = storeToRefs(themeStore);
  switch (theme.value) {
    case "night":
      createMeteor();
      break;
  }
};
