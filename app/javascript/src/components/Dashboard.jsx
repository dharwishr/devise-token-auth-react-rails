import * as React from "react";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

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
      <Container
        maxWidth="xl"
        sx={{
          mt: 10,
        }}
      >
        <CssBaseline />
        <Typography gutterBottom variant="h4">
          Dashboard
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default Dashborad;
