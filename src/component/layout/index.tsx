import Header from "@/component/layout/header";
import SideBar from "@/component/layout/sideBar";
import {ReactNode} from "react";
import {Box, Container, experimentalStyled, useMediaQuery, useTheme} from "@mui/material";

interface PropsType {
    children: ReactNode
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

    backgroundColor: theme.palette.background.default,
    paddingTop: "64px"
    // [theme.breakpoints.up("lg")]: {
    //     paddingTop: "64px",
    // },
    // [theme.breakpoints.down("lg")]: {
    //     paddingTop: "64px",
    // },
}));

export default function Layout({children}: PropsType) {
    // TODO SideBar Open State
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <MainWrapper>
            <Header/>
            <SideBar/>
            <PageWrapper>
                <Container
                    maxWidth={false}
                    sx={{
                        paddingTop: "20px",
                        paddingLeft: isDesktop ? "280px !important" : "",
                    }}
                >
                    <Box sx={{minHeight: "calc(100vh - 170px)"}}>{children}</Box>
                </Container>
            </PageWrapper>
        </MainWrapper>
    )
}