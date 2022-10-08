import {Box, Button, Link, ListItem} from '@mui/material';
import {useLocation} from "react-router";

export const NavItem = (props:any) => {
    const location = useLocation();
    const { href, icon, title, ...others } = props;
    const active = href ? location.pathname === href : false;

    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 2
            }}
            {...others}
        >
            <Link href={href} sx={{width:'100%'}}>
                <Button
                    disableRipple
                    fullWidth
                    sx={{
                        backgroundColor: active ? "rgba(255,255,255, 0.08)" : "",
                        borderRadius: 1,
                        color: active ? "secondary.main" : "neutral.300",
                        justifyContent: "flex-start",
                        px: 3,
                        textAlign: "left",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255, 0.08)",
                        },
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        {title}
                    </Box>
                </Button>
            </Link>
        </ListItem>
    );
};
