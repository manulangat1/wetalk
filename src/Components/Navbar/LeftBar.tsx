import { ClassNames } from '@emotion/react'
import { Container, Typography } from '@material-ui/core'
import { ExitToApp, Home, List, Person, VideocamSharp } from '@material-ui/icons'
import React from 'react'
import useStyles from './Navbar.style'

const LeftBar = () => {
    const classes = useStyles()
    return (
        <Container className={`${classes.container} ${classes.leftbarRoot}`}>
            <div className={classes.item}>
                <Home className={classes.icons}/>
                <Typography className={classes.text}>Home page</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icons}/>
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icons}/>
                <Typography className={classes.text}>dada</Typography>
            </div>
            <div className={classes.item}>
                <VideocamSharp className={classes.icons}/>
                <Typography className={classes.text}>Live</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icons}/>
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    )
}

export default LeftBar
