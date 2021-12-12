import { createTheme } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
// allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

export const theme = createTheme({
  // status: {
  //   danger: purple[500],
  // },
  typography: {
    fontFamily: `'Readex Pro', "Helvetica", "Arial", sans-serif`,
  },
});
