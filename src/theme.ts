import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// configure the dark theme using the import
const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ config });

// always export at the end of these files
export default theme;
