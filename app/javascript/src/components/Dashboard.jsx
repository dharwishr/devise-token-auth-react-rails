import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "components/NavBar";

const Dashborad = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: "rgb(249 250 251)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <h1>Dash</h1>
    </ThemeProvider>
  );
};

export default Dashborad;
