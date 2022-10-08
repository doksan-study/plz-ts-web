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

            ".buyNowImg": {
                position: "absolute",
                right: "-44px",
                top: "-18px",
                width: "143px",
                height: "175px",
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
                maxWidth: "1600px",
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
                borderRadius: "9px",
            },
        },
    },

    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: "20px",
                padding: "14px",
                margin: "15px",
                boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11)",
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
    }
    /* Todo 폰트패밀리 여러개 어떻게 적용함...?b
    "@font-face": {
        fontFamily: 'Gmarket Sans',
        fontWeight: ["300"],
        fontStyle: "normal",
        src: `url(${GmarketSansLight}) format('woff')`,
        fontDisplay: "swap",
    },
    "@font-face": {
        fontFamily: 'Gmarket Sans',
        fontWeight: "500",
        fontStyle: "normal",
        src: `url(${GmarketSansMedium}) format('woff')`,
        fontDisplay: "swap",
    },

    "@font-face": {
        fontFamily: 'Gmarket Sans',
        fontWeight: "700",
        fontStyle: "normal",
        src: `url(${GmarketSansBold}) format('woff')`,
        fontDisplay: "swap",
    },


    "@font-face": {
        fontFamily: 'Pretendard',
        fontWeight: "900",
        fontDisplay: "swap",
        src: url(#{$assetPath}/Pretendard-Black.woff) format('woff'),
    },

    "@font-face": {
        fontFamily: 'Pretendard',
        fontWeight: "800",
        fontDisplay: "swap",
        src: url(#{$assetPath}/Pretendard-ExtraBold.woff) format('woff'),
    },

    "@font-face": {
        fontFamily: 'Pretendard',
        fontWeight: "700",
        fontDisplay: "swap",
        src: url(#{$assetPath}/Pretendard-Bold.woff) format('woff'),
    },

    "@font-face": {
        fontFamily: 'Pretendard',
        fontWeight: 600,
        fontDisplay: "swap",
        src: url(#{$assetPath}/Pretendard-SemiBold.woff) format('woff'),
    },

    "@font-face": {
        fontFamily: 'Pretendard',
        fontWeight: "500"
        fontDisplay: "swap",
        src: url(#{$assetPath}/Pretendard-Medium.woff) format('woff'),
    },

    "@font-face": {
        fontFamily: 'Pretendard',
        fontWeight: 400,
        fontDisplay: "swap",
        src: url(#{$assetPath}/Pretendard-Regular.woff) format('woff'),
    },

    "@font-face": {
        fontFamily: 'Pretendard',
        fontWeight: 300,
        fontDisplay: "swap",
        src: url(#{$assetPath}/Pretendard-Light.woff) format('woff'),
    },

    "@font-face": {
        fontFamily: 'Pretendard',
        fontWeight: 200,
        fontDisplay: "swap",
        src: url(#{$assetPath}/Pretendard-ExtraLight.woff) format('woff'),
    },

    "@font-face": {
        fontFamily: 'Pretendard',
        fontWeight: 100,
        fontDisplay: "swap",
        src: url(#{$assetPath}/Pretendard-Thin.woff) format('woff'),
     */
}
export default components
