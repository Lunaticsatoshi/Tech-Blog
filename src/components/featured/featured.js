import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../card/card';


const Featured = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm ={12} md={6} xl={6}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm ={12} md={6} xl={6}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm ={12} md={6} xl={6}>
                    <Card />
                </Grid>
                <Grid item xs={12} sm ={12} md={6} xl={6}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    )
}

export default Featured;
