import {Box, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme} from "@mui/material";
import MenuList from "@/constant/menuList";
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import { useSideBar } from "@/hooks";
import LogoDark from "@assets//images/logo-dark.svg"

export default function SideBar() {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState<string>("/")

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    const {isOpenSideBar, handleCloseSideBar} = useSideBar();

    useEffect(() => {
        setCurrentPage(location.pathname.split('/')[1])
    }, [location])

    return (
        <Drawer
            anchor="left"
            open={isOpenSideBar.isOpen}
            onClose={handleCloseSideBar}
            variant={isDesktop ? "persistent" : "temporary"}
            PaperProps={{
                sx: {
                    width: '265px',
                    // boxShadow: "0px 7px 30px 0px rgb(113 122 131 / 11%)",
                }
            }}
        >
            <Box mt={2} px={1}>
                <Link to="/">
                    <img src={LogoDark} alt="LOGO"/>
                </Link>
                <List>
                    {MenuList.map((menu, index) =>
                        <List component="li" disablePadding key={index}>
                            <Link to={menu.href} style={{display: 'block', width: "100%",}}>
                            <ListItem
                                button
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
                            </Link>
                        </List>
                    )}
                </List>
            </Box>
        </Drawer>
    )
}