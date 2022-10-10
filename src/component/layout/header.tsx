import {useSideBar} from "@/hooks";
import {AppBar, Button, experimentalStyled, IconButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {useCookies} from "react-cookie";
import {getCookie} from "@/util/cookie";
import {cookieList} from "@/constant/localize";

export default function Header() {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    const {isOpenSideBar, handleToggleSideBar} = useSideBar();

    const [cookies, setCookie, removeCookie] = useCookies();
    const [isAuth, setIsAuth] = useState<boolean>(!!getCookie(cookieList[0]))

    const onAuthOut = () => {
        if (window.confirm('로그아웃 하시겠어요?')) {
            removeCookie(cookieList[0])
            setIsAuth(false)
        }
    }

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
                    <Utils>
                        {!isAuth ?
                            <Button variant="outlined" component={NavLink} to="/login">로그인</Button> :
                            <>
                                <Button variant="contained" color="secondary" startIcon={<StarRateOutlinedIcon/>}>
                                    찜한상품
                                </Button>
                                <Button variant="contained" color="secondary" startIcon={<ShoppingBagOutlinedIcon/>}>
                                    장바구니
                                </Button>
                                <Button variant="contained">마이페이지</Button>
                                <Button variant="outlined" onClick={onAuthOut}>로그아웃</Button>
                            </>
                        }
                    </Utils>
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

const Utils = experimentalStyled("div")(() => ({
    display: "flex",
    gap: "8px",
    alignItems: "center",
}));