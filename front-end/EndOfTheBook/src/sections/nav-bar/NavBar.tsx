import { PATHS } from '../../routes/paths';
import { MenuItem, Button, Menu, Typography, IconButton, Box } from '@mui/material';
import { Sailing as SailingIcon, Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const pages = [
    { pageKey: 1, pageName: 'about', pagePath: PATHS.about },
    { pageKey: 2, pageName: 'create your chapter', pagePath: PATHS.CreateChapterForm }
];

export default function NavMenue() {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleMenuItemClick = (path: string) => {
        navigate(path);
    };

    return (
        <>
            {/* <SailingIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
                variant="h6"
                noWrap
                component="a"
                //href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                {/* <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton> */}
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.pageKey} onClick={() => handleMenuItemClick(page.pagePath)}>
                            <Typography textAlign="center">{page.pageName}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            {/* <SailingIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {/* {pages.map((page) => (
                    <Button
                        key={page.pageKey}
                        onClick={() => handleMenuItemClick(page.pagePath)}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page.pageName}
                    </Button>
                ))} */}
            </Box>
        </>
    );
}
