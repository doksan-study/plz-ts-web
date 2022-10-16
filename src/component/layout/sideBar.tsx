import {Box, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme} from "@mui/material";
import MenuList from "@/constant/menuList";
import {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {useSideBar} from "@/hooks";
import LogoDark from "@assets//images/logo-dark.svg"

export default function SideBar() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string>("/")

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    const {isOpenSideBar, handleOpenSideBar, handleCloseSideBar} = useSideBar();
    const {isOpen} = isOpenSideBar;

    useEffect(() => {
        if (!isDesktop && isOpen) return handleCloseSideBar();
        if (isDesktop && !isOpen) return handleOpenSideBar();
    }, [isDesktop])

    useEffect(() => {
        setCurrentPage(location.pathname.split('/')[1])
    }, [location])

    return (
        <Drawer
            anchor="left"
            open={isOpen}
            onClose={handleCloseSideBar}
            variant={isDesktop && isOpen ? "persistent" : "temporary"}
            PaperProps={{
                sx: {
                    width: 265
                    // boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
                }
            }}
        >
            <Box mt={2} px={1}>
                <NavLink to="/">
                    <img src={LogoDark} alt="LOGO"/>
                </NavLink>
                <List>
                    {MenuList.map((menu, index) =>
                        <List component="li" disablePadding key={index}>
                            <ListItem
                                button
                                component={NavLink}
                                to={menu.href}
                                sx={{
                                    mb: 1,
                                    ...(menu.href.includes(currentPage) && {
                                        color: "white",
                                        backgroundColor: (theme) =>
                                            `${theme.palette.primary.main}!important`,
                                    })
                                }}
                            >
                                <ListItemText>{menu.title}</ListItemText>
                            </ListItem>
                        </List>
                    )}
                </List>
            </Box>
        </Drawer>
    )
}