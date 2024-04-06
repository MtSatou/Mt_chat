export declare interface themeTypes {
  /**主题 */
  // theme: "night" | "light" | "spring" | "summer" | "autumn" | "winter";
  theme: themeItem
}

export declare interface themeItem {
  id: number;
  name: string;
  value: "night" | "light" | "auto";
}
