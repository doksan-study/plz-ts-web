import {AppBar, IconButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(){
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <AppBar sx={{
            backgroundColor: '#fff',
            boxShadow: "none",
            border: "1px solid #ececec",
            paddingLeft: isDesktop ? "265px" : "",
        }}>
            <Toolbar>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{display:'flex'}}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}