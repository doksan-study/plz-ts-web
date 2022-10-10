import React from 'react';
import Layout from "@/component/layout";
import {Box, Card, CardContent, Grid, Typography} from '@mui/material';
import {PublicRoutes} from "@/routes";

const Sample = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                {/*<Card>*/}
                <Typography variant="h1">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                <Typography variant="h2">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                <Typography variant="h3">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                <Typography variant="h4">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                <Typography variant="body1">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                <Box p={2} display="flex" alignItems="center">
                    <Typography variant="h1">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                    <Typography variant="h2">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                    <Typography variant="h3">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                    <Typography variant="h4">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                    <Typography variant="body1">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                </Box>
                <Card>
                    <Typography variant="h2">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                    <Typography variant="h3">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                    <Typography variant="h4">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                    <Typography variant="body1">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                    <CardContent>
                        <Typography variant="h1">솔직히 이 폰트 진짜 괜찮은듯</Typography>
                        솔직히 이 폰트 진짜 괜찮은듯
                    </CardContent>
                </Card>
                {/*</Card>*/}
                {/*<BaseCard title="Alerts">*/}
                {/*</BaseCard>*/}
            </Grid>
        </Grid>
    )
}

function App() {
    return (
        <div className="App">

            <PublicRoutes/>

            {/*<Layout children={<Sample/>}/>*/}
        </div>
    );
}

export default App;
