const components = {
    MuiCssBaseline: {
        styleOverrides: {
            "*": {
                boxSizing: "border-box",
            },
            html: {
                height: "100%",
                width: "100%",
            },
            body: {
                height: "100%",
                margin: 0,
                padding: 0,
            },
            a: {
                color: "inherit",
                textDecoration: "none"
            },
            "#root": {
                height: "100%",
            },
            "*[dir='rtl'] .buyNowImg": {
                transform: "scaleX(-1)",
            },
            ".MuiCardHeader-action": {
                alignSelf: "center !important",
            },
            ".scrollbar-container": {
                borderRight: "0 !important",
            },
            "*[dir='rtl'] .welcomebg:before": {
                backgroundPosition: "top -24px left -9px !important",
            },
        },
    },
    MuiContainer: {
        styleOverrides: {
            root: {
                paddingLeft: "15px !important",
                paddingRight: "15px !important",
                // maxWidth: "1600px",
            },
        },
    },

    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: "none",
                boxShadow: "none",

                "&:hover": {
                    boxShadow: "none",
                },
            },
        },
    },

    MuiListItem: {
        styleOverrides: {
            root: {
                borderRadius: "5px",
            },
        },
    },

    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: "5px",
                padding: "14px",
                margin: "15px",
                boxShadow: "none",
                border: "1px solid #ececec"
                // boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11)",
            },
        },
    },

    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: "40px",
            },
        },
    },

    MuiGridItem: {
        styleOverrides: {
            root: {
                paddingTop: "30px",
                paddingLeft: "30px !important",
            },
        },
    },
    MuiLinearProgress: {
        styleOverrides: {
            root: {
                backgroundColor: "#ecf0f2",
                borderRadius: "6px",
            },
        },
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                borderRadius: "0",
            },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                fontWeight: "500",
                fontSize: "0.75rem",
            },
        },
    },
}
export default components
