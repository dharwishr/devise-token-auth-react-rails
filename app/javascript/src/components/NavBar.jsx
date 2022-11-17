import React, { useContext } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import authApi from "apis/auth";
import { UserContext } from "contexts/UserContext";

const NavBar = () => {
  const name = useContext(UserContext);
  const pages = ["Dashboard", "Invite People"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignout = async () => {
    try {
      await authApi.signout();
      // resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#5783db",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 800,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Device Auth
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              size="large"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              keepMounted
              anchorEl={anchorElNav}
              id="menu-appbar"
              open={Boolean(anchorElNav)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handleCloseNavMenu}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            component="a"
            href=""
            variant="h5"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Device Auth
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(page => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={handleCloseNavMenu}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                <Avatar />
                <Typography
                  sx={{ textDecoration: "none", color: "#fff", ml: 2 }}
                >
                  {name}
                </Typography>
              </Button>
            </Tooltip>
            <Menu
              keepMounted
              anchorEl={anchorElUser}
              id="menu-appbar"
              open={Boolean(anchorElUser)}
              sx={{ mt: "45px" }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" onClick={() => handleSignout()}>
                  Signout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
