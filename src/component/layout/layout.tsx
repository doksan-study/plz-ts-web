import {ReactNode, useEffect, useState} from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import {DashboardNavbar} from "@/component/layout/navbar";
import {DashboardSidebar} from "@/component/layout/sidebar";
import {Theme} from "@mui/system";
import {theme} from "@/theme";

interface StyledProps {
    theme: Theme
    isOpen: boolean
}
const DashboardLayoutRoot = styled('div')(({ theme, isOpen }:StyledProps) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: isOpen ? 280 : 0
    }
}));


interface Props {
    children: ReactNode;
}

export const DashboardLayout = ({ children }:Props) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    useEffect(() => {

    }, [isSidebarOpen])
    return (
        <>
            <DashboardLayoutRoot theme={theme} isOpen={isSidebarOpen}>
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        width: '100%'
                    }}
                >
                    {children}
                </Box>
            </DashboardLayoutRoot>
            <DashboardNavbar open={isSidebarOpen} onToggleSideBar={() => setSidebarOpen(!isSidebarOpen)} />
            <DashboardSidebar
                onClose={() => setSidebarOpen(false)}
                open={isSidebarOpen}
            />
        </>
    );
};