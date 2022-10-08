import React from 'react';
import Layout from "@/component/layout";
import {Box, Card, CardContent, Grid, Typography} from '@mui/material';

const Sample = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} lg={12}>
                <Card>
                    <Box p={2} display="flex" alignItems="center">
                        <Typography variant="h4">안녕ㅋ</Typography>
                    </Box>
                    <CardContent>Gdgd</CardContent>
                </Card>
                {/*<BaseCard title="Alerts">*/}
                {/*</BaseCard>*/}
            </Grid>
        </Grid>
    )
}

function App() {
    return (
        <div className="App">
            <Layout children={<Sample/>}/>
        </div>
    );
}

export default App;
