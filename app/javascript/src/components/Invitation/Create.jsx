import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import invitationApi from "apis/invitation";
import NavBar from "components/NavBar";

const Create = () => {
  const createInvitation = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const res = await invitationApi.create(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchInvitations();
  }, []);

  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <CssBaseline />
        <Box
          noValidate
          component="form"
          sx={{ mt: 1 }}
          onSubmit={createInvitation}
        >
          <TextField
            autoFocus
            fullWidth
            required
            autoComplete="email"
            id="email"
            label="Email Address"
            margin="normal"
            name="email"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
          >
            Invite
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Create;
