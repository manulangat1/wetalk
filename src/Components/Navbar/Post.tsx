import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Navbar.style'

const  Post = () => {
    const classes = useStyles()
    return (
        <section>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media} image="https://www.pexels.com/photo/woman-in-white-dress-walking-on-the-street-10161997/" title="My post"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5">My First Post</Typography>
                        <Typography variant="body1"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid necessitatibus incidunt ad quas cupiditate, quisquam commodi eveniet excepturi voluptates iste obcaecati iusto dolore recusandae enim, accusantium, dicta repellat? Sed? </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" >Share</Button>
                    <Button size="small" color="primary" >Learn More</Button>
                </CardActions>
            </Card>
        </section>
            
    )
}

export default Post
