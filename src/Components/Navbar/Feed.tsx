import { Container } from '@material-ui/core'
import React from 'react'
import Add from './Add'
import useStyles from './Navbar.style'
import Post from './Post'

const  Feed = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            {/* <Add /> */}
            <Post />
            <Post />
            <Post />
            <Post />

        </Container>
    )
}

export default Feed
