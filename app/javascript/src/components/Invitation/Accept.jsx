import React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

import invitationApi from "apis/invitation";
import Toastr from "components/Common/Toastr";

const Accept = () => {
  const theme = createTheme({
    palette: {
      background: {
        default: "rgb(249 250 251)",
      },
    },
  });

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const token = query.get("invitation_token");
  const handleSubmit = async event => {
    event.preventDefault();
    if (token) {
      const data = new FormData(event.currentTarget);
      try {
        await invitationApi.accept(data);
        setTimeout(() => (window.location.href = "/"), 1000);
      } catch (error) {
        logger.error(error);
      }
    } else {
      Toastr.error("Token not found");
    }
  };

  if (!token) {
    Toastr.error("Invalid token!");
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{
            marginTop: 30,
            backgroundColor: "#fff",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "#5783db",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Accept Invitation
          </Typography>
          <Box Validate component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              required
              autoComplete="name"
              id="name"
              label="Name"
              margin="normal"
              name="name"
            />
            <TextField
              fullWidth
              required
              autoComplete="current-password"
              id="password"
              label="Password"
              margin="normal"
              name="password"
              type="password"
            />
            <TextField
              fullWidth
              required
              autoComplete="current-password"
              id="password_confirmation"
              label="Password Confirmation"
              margin="normal"
              name="password_confirmation"
              type="password"
            />
            <TextField
              fullWidth
              id="invitation_token"
              label="invitation_token"
              margin="normal"
              name="invitation_token"
              sx={{ display: "none" }}
              type="text"
              value={token}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#5783db",
              }}
            >
              Create Account
            </Button>
            <Grid container>
              <Grid item sx={{ width: "100%" }}>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}{" "}
                </Link>
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <Link href="/signin" variant="body2">
                  {"You have an account? Sign In"}{" "}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default Accept;
