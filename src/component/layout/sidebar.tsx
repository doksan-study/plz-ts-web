import {Box, Button, Divider, Drawer, Link, Typography, useMediaQuery} from '@mui/material';
import {NavItem} from "@/component/layout/navitem";
import {theme} from "@/theme";

const items = [
    {
        href: '/',
        title: 'Dashboard'
    },
    {
        href: '/customers',
        title: 'Customers'
    },
    {
        href: '/products',
        title: 'Products'
    },
    {
        href: '/account',
        title: 'Account'
    },
    {
        href: '/settings',
        title: 'Settings'
    },
    {
        href: '/login',
        title: 'Login'
    },
    {
        href: '/register',
        title: 'Register'
    },
    {
        href: '/404',
        title: 'Error'
    }
];

export const DashboardSidebar = (props:any) => {
    const { open, onClose } = props;
    const lgUp = useMediaQuery(() => theme.breakpoints.up('lg'), {
        defaultMatches: true,
    });

    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <div>
                    <Box sx={{ p: 3 }}>
                        <Link
                            href="/"
                        >asdfasd
                        </Link>
                    </Box>
                    <Box sx={{ px: 2 }}>
                        <Box
                            sx={{
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                px: 3,
                                py: '11px',
                                borderRadius: 1
                            }}
                        >
                            <div>
                                <Typography
                                    color="inherit"
                                    variant="subtitle1"
                                >
                                    Acme Inc
                                </Typography>
                                <Typography
                                    color="neutral.400"
                                    variant="body2"
                                >
                                    Your tier
                                    {' '}
                                    : Premium
                                </Typography>
                            </div>
                        </Box>
                    </Box>
                </div>
                <Divider
                    sx={{
                        borderColor: '#2D3748',
                        my: 3
                    }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    {items.map((item) => (
                        <NavItem
                            key={item.title}
                            href={item.href}
                            title={item.title}
                        />
                    ))}
                </Box>
                <Divider sx={{ borderColor: '#2D3748' }} />
                <Box
                    sx={{
                        px: 2,
                        py: 3
                    }}
                >
                    <Typography
                        color="neutral.100"
                        variant="subtitle2"
                    >
                        Need more features?
                    </Typography>
                    <Typography
                        color="neutral.500"
                        variant="body2"
                    >
                        Check out our Pro solution template.
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            mt: 2,
                            mx: 'auto',
                            width: '160px',
                            '& img': {
                                width: '100%'
                            }
                        }}
                    >
                    </Box>
                    <Link
                        href="https://material-kit-pro-react.devias.io/"
                    >
                        <Button
                            color="secondary"
                            component="a"
                            fullWidth
                            sx={{ mt: 2 }}
                            variant="contained"
                        >
                            Pro Live Preview
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                onClose={onClose}
                open={open}
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.800',
                        color: '#FFFFFF',
                        width: 280,
                    }
                }}
                variant={open ? "permanent" : "persistent"}
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="bottom"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: '100%',
                    top:'64px',
                    height: 'calc(100vh - 64px)'
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="persistent"
        >
            {content}
        </Drawer>
    );
};
