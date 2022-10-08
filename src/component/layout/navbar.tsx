import { useState} from 'react';
import styled from '@emotion/styled';
import {AppBar, Badge, Box, IconButton, Toolbar, Tooltip} from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {theme} from "@/theme";

const DashboardNavbarRoot = styled(AppBar)(() => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props:any) => {
    const {onToggleSideBar, open, ...other} = props;

    return (
        <>
            <DashboardNavbarRoot
                sx={{
                    left: {
                        lg: !open ? 0 : 280
                    },
                    width: {
                        lg: !open ? '100%' : 'calc(100% - 280px)'
                    }
                }}
                {...other}>
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2
                    }}
                >
                    <IconButton
                        onClick={onToggleSideBar}
                        // sx={{
                        //     display: {
                        //         xs: 'inline-flex',
                        //         lg: 'none'
                        //     }
                        // }}
                    >
                        <MenuIcon fontSize="small"/>
                    </IconButton>
                    <Tooltip title="Search">
                        <IconButton sx={{ml: 1}}>
                            <SearchIcon fontSize="small"/>
                        </IconButton>
                    </Tooltip>
                    <Box sx={{flexGrow: 1}}/>
                    <Tooltip title="Contacts">
                        <IconButton sx={{ml: 1}}>
                            {/*<UsersIcon fontSize="small" />*/}
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notifications">
                        <IconButton sx={{ml: 1}}>
                            <Badge
                                badgeContent={4}
                                color="primary"
                                variant="dot"
                            >
                                <NotificationsActiveIcon/>
                                {/*<BellIcon fontSize="small" />*/}
                            </Badge>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </DashboardNavbarRoot>
            {/*    <AccountPopover*/}
            {/*anchorEl={settingsRef.current}*/}
            {/*open={openAccountPopover}*/}
            {/*onClose={() => setOpenAccountPopover(false)}*/}
            {/*/>*/}
        </>
    );
};
