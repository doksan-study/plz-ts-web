import {useQuery} from "@tanstack/react-query";
import {userKey} from "@/app/api/querykey";
import {myInfoReq} from "@/app/api/user";
import Layout from "@/component/layout";
import {Box, Card, Grid, Typography} from "@mui/material";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import React from "react";

export default function MyPage() {
    const {data, isError, isLoading} = useQuery(
        userKey.info,
        () => myInfoReq(),
        {staleTime: 60 * 1000}
    );

    if (isError) return (<>고장났네</>)
    if (isLoading) return <>로딩중이네</>

    const {data: myInfo} = data;
    const {email, name, phone} = myInfo;
    return (
        <Layout>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    {/*<Card>*/}
                    <Box pt={2} px={2}>
                        <Typography variant="h1">마이페이지</Typography>
                    </Box>
                    <Card sx={{width: '640px'}}>
                        <Typography
                            variant="body1"
                            sx={{
                                display: 'flex',
                                alignItem: "center",
                                gap: "8px",
                                padding: "8px",
                                borderBottom: "1px solid #eee"
                            }}
                        >
                            <AccountBoxOutlinedIcon/>{name}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                display: 'flex',
                                alignItem: "center",
                                gap: "8px",
                                padding: "8px",
                                borderBottom: "1px solid #eee"
                            }}
                        >
                            <MailOutlineIcon/>{email}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                display: 'flex',
                                alignItem: "center",
                                gap: "8px",
                                padding: "8px",
                                borderBottom: "1px solid #eee"
                            }}
                        >
                            <PhoneAndroidIcon/>{phone}
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}