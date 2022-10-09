import {AppBar, Button, experimentalStyled, IconButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useSideBar} from "@/hooks";

export default function Header() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    const {isOpenSideBar, handleToggleSideBar} = useSideBar();

    return (
        <AppBar sx={{
            backgroundColor: '#fff',
            boxShadow: "none",
            border: "1px solid #ececec",
            paddingLeft: isDesktop && isOpenSideBar.isOpen ? "265px" : "",
        }}>
            <Toolbar>
                <ToolbarWrap>
                    <IconButton
                        size="large"
                        color="inherit"
                        aria-label="menu"
                        sx={{display: 'flex'}}
                        onClick={handleToggleSideBar}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Button variant="contained">로그인</Button>
                </ToolbarWrap>
            </Toolbar>
        </AppBar>
    )
}

const ToolbarWrap = experimentalStyled("div")(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
}));