import { Button, Container, Fab, MenuItem, Modal, TextField, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { useState } from 'react'
import useStyles from './Navbar.style'

const  AddR = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    const handleModalOpen = ( ) => {setOpen(!open)
    console.log(open)}
    return (
        <section>
            <Tooltip title="Add" aria-label="add" onClick={() => handleModalOpen()}>
                <Fab color="secondary" className={classes.fab}>
                    <Add />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.modalContainer}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id="outlined-basic" label="Title" size="small" variant="outlined"></TextField>
                        </div>
                        <div className={classes.item}>
                            <TextField id="outlined-basic" label="Description" size="small" variant="outlined" multiline></TextField>
                        </div>
                        <div className={classes.item}>
                            <TextField select label="Visibility"  variant="outlined" >
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                            </TextField>
                        </div>
                        <div    >
                            <Button variant="outlined" style={{marginRight:"1rem"}}>Create New post</Button>
                            <Button variant="outlined" onClick={() => setOpen(!open)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
        </section>
    )
}

export default AddR
