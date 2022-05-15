import logo from "../../assets/logo.png";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { StyledButton } from "../../styles/Styles";
const pages = ["Home", "Services", "Contact"];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" color="transparent">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
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
                                <Button key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <NavLink
                                            to={`/${page}`}
                                            style={{
                                                textDecoration: "none",
                                                color: "#525252",
                                            }}
                                        >
                                            {page}
                                        </NavLink>
                                    </Typography>
                                </Button>
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
                                        color: "#525252",
                                    }}
                                >
                                    {page}
                                </NavLink>
                            </Button>
                        ))}
                    </Box>
                    <Box
                        justifyContent={"flex-end"}
                        sx={{ display: { xs: "none", md: "flex" } }}
                    >
                        <StyledButton>Login</StyledButton>
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