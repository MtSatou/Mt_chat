export declare interface languageTypes {
  /**主题 */
  // theme: "night" | "light" | "spring" | "summer" | "autumn" | "winter";
  language: languageItem
}

export declare interface languageItem {
  id: number;
  name: string;
  value: "Chinese" | "English";
}
