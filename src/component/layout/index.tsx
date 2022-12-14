import Header from "@/component/layout/header";
import SideBar from "@/component/layout/sideBar";
import {ReactNode} from "react";
import {Box, Container, experimentalStyled, useMediaQuery, useTheme} from "@mui/material";
import {useSideBar} from "@/hooks";

interface PropsType {
    children: ReactNode
}

export default function Layout({children}: PropsType) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
    const {isOpenSideBar} = useSideBar();

    return (
        <MainWrapper>
            <Header/>
            <SideBar/>
            <PageWrapper>
                <Container
                    maxWidth={false}
                    sx={{
                        paddingTop: "20px",
                        paddingLeft: isDesktop && isOpenSideBar.isOpen ? "280px !important" : "",
                    }}
                >
                    <Box sx={{minHeight: "calc(100vh - 170px)"}}>{children}</Box>
                </Container>
            </PageWrapper>
        </MainWrapper>
    )
}

const MainWrapper = experimentalStyled("div")(() => ({
    display: "flex",
    minHeight: "100vh",
    overflow: "hidden",
    width: "100%",
}));

const PageWrapper = experimentalStyled("div")(({theme}) => ({
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",

    // backgroundColor: theme.palette.background.default,
    backgroundColor: "#fff",
    paddingTop: "64px"
    // [theme.breakpoints.up("lg")]: {
    //     paddingTop: "64px",
    // },
    // [theme.breakpoints.down("lg")]: {
    //     paddingTop: "64px",
    // },
}));