import {Box, Card, Grid, Skeleton, Typography} from "@mui/material";
import React from "react";
import Layout from "@/component/layout";
import {useQuery} from "@tanstack/react-query";
import {productKey} from "@/app/api/querykey";
import {productReq} from "@/app/api/product";
import {ProductList} from "@/model/product";
import {NavLink} from "react-router-dom";

// TODO 이름바꾸기 Rules = Products
export default function Rules() {
    const {data, isError, isLoading, isSuccess} = useQuery(
        productKey.product,
        () => productReq(),
        {
            staleTime: 60 * 1000,
            suspense: false
        }
    );

    if (isError) return (<>고장났네</>)

    return (
        <Layout>
            <Grid container spacing={0}>
                <Grid item xs={12} lg={12}>
                    <Typography variant="h1" p={2}>PRODUCT</Typography>
                    <Grid container spacing={2}>
                        {isLoading && <>
                            {new Array(2).fill(0).map((value, index) => (
                                <Grid item
                                      key={index}
                                      xs={12}
                                      xl={4}
                                      sm={6}>
                                    <Card>
                                        <Skeleton variant="rectangular" height={118}/>
                                        <Box sx={{pt: 0.5}}>
                                            <Skeleton width="60%"/>
                                            <Skeleton/>
                                            <Skeleton width="40%"/>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </>}
                        {isSuccess && <>
                            {data.data.map((product: ProductList, index: number) => (
                                <Grid item
                                      key={index}
                                      xs={12}
                                      xl={4}
                                      sm={6}
                                >
                                    <NavLink to={'/product/' + product._id}>
                                        <Card>
                                            <Skeleton variant="rectangular" height={118}/>
                                            <Box sx={{pt: 0.5}}>
                                                <Typography variant="h4">{product.name}</Typography>
                                                <Typography variant="body1">{product.description}</Typography>
                                                <Typography variant="body1">₩{product.price}</Typography>
                                            </Box>
                                        </Card>
                                    </NavLink>
                                </Grid>
                            ))}
                        </>}
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}
