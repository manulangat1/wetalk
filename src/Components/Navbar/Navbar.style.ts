import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },
    h1:{
        color:"#567859"
    },
    logoXl:{
        display:"none",
        [theme.breakpoints.up('md')]:{
            display:"block"
        }
    },
    // logoLg:{
    //     display:"none",
    //     [theme.breakpoints.up('md')]:{
    //         display:"block"
    //     }
    // },
    logoSm:{
        display:"none",
        [theme.breakpoints.down('md')]:{
            display:"block"
        }
    },
    badge:{
        marginRight:theme.spacing(2)
        // padding: "0 2rem"
        // display:"flex",
        // justifyContent:'space-between'
    },
    icons:{
        [theme.breakpoints.up('sm')]:{
            fontSize:"2rem"
        }
    },
    leftbarRoot:{
        position:"sticky",
        top:0,
        backgroundColor:theme.palette.primary.main,
        minHeight:'100vh',
        color:'#ffffff',
        [theme.breakpoints.up('sm')]:{
            backgroundColor:"white",
            color:"black"
        }
    },
    text:{
        fontWeight:500,
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    fab:{
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    modalContainer:{
        width:500,
        height:550,
        backgroundColor:"white",
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        margin:"auto",
        [theme.breakpoints.down('sm')]:{
            width:200,
            height:"70vh",
            
        }
    },
    form:{
        padding:"1rem"
    },
    media:{
        height:300,
        [theme.breakpoints.down('sm')]:{
            height:150
        }
    },
    card:{
        marginBottom:'2rem',
        // backgroundColor:'yellow'
    },
    item:{
        // padding:'1.3rem',
        marginBottom: theme.spacing(4),
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        [theme.breakpoints.up('sm')]:{
            marginBottom: theme.spacing(3),
            cursor:'pointer',
            
        }
    },
    container:{
        paddingTop:theme.spacing(14)
        // padding:'7rem 0'
    },
    right:{
        [theme.breakpoints.down('sm')]:{
            display:"none"
        }
    }
}))

export default useStyles;