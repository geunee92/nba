import { colors } from "./tokens/colors";
import { spacing } from "./tokens/spacing";
import { typography } from "./tokens/typography";
import { breakpoints } from "./tokens/breakpoints";

export const theme = {
  colors,
  spacing,
  typography,
  breakpoints,
};

export type AppTheme = typeof theme;
