import { AppBar, Badge, Toolbar, Typography } from '@material-ui/core'
import { Mail, NotificationImportant } from '@material-ui/icons'
import React, { useState } from 'react'
import useStyles from './Navbar.style'

const  Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles({open});
    
    return (
        
        <AppBar position="fixed">
            <Toolbar className={classes.toolbar}>
                    <Typography variant="h1" className={classes.logoXl}>Twit</Typography>
                    <Typography variant="h6" className={classes.logoSm}>Twit</Typography>

                    <div >
                        <Badge badgeContent={5} color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <NotificationImportant />
                        </Badge>
                    </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
