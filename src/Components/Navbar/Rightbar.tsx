import { Avatar, Container, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './Navbar.style'
// import AvatarGroup from '@mui/material/AvatarGroup';
const  Rightbar = () => {
    const classes = useStyles()
    return (
       <Container className={`${classes.container} ${classes.right}`}>
           <Typography variant="body1"> Online Friends</Typography>
           {/* <AvatarGroup max={6} style={{ marginBottom: 20 }}> */}
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
      {/* </AvatarGroup> */}
      <Typography variant="h2"> Categories</Typography>
      
       </Container>
    )
}

export default Rightbar
