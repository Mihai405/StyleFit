import logo from "../../assets/logo.png";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { NavLink, Link } from "react-router-dom";
import { StyledButton } from "../../styles/Styles";
import { useTheme } from "@mui/system";
import LogIn from "../../Pages/LogIn";
const pages = ["Home", "Services", "Contact"];

const NavBar = () => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ paddingX: { md: 20 }, boxShadow: "0" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      to={`/${page}`}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.secondary.main,
                        display: "block",
                      }}
                    >
                      {page}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
            alt="StyleFit logo"
            src={logo}
            sx={{ display: { xs: "flex", md: "none" } }}
          />
          <Avatar
            alt="StyleFit logo"
            src={logo}
            component={Link}
            to="/"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              width: 100,
              height: 100,
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              marginLeft: 14,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <NavLink
                  to={`/${page}`}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                  }}
                >
                  {page}
                </NavLink>
              </Button>
            ))}
          </Box>
          <Box justifyContent={"flex-end"} sx={{ display: { xs: "none", md: "flex" } }}>
            <LogIn />
            <StyledButton
              variant="contained"
              sx={{
                boxShadow: "25",
              }}
            >
              Register
            </StyledButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
