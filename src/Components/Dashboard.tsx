import { Grid } from '@material-ui/core'
import React from 'react'
import AddR from './Navbar/Add'
import Feed from './Navbar/Feed'
import LeftBar from './Navbar/LeftBar'
import Navbar from './Navbar/Navbar'
import useStyles from './Navbar/Navbar.style'
import Rightbar from './Navbar/Rightbar'

const Dashboard = () => {
    const classes = useStyles()
    return (
        <main>
            <Navbar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <LeftBar />
                </Grid>
                <Grid item sm={7} xs={10}>
                    <Feed />
                </Grid>
                <Grid item sm={3} className={classes.right}>
                    <Rightbar />
                </Grid>
            </Grid>
            <AddR />
        </main>
    )
}

export default Dashboard
