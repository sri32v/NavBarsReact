import React,{useState,useEffect} from 'react';
import {ReturnHome} from '../components'
import {AppBar,Toolbar,IconButton,Typography,Button,Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core'
import {AccountCircle, Menu} from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Card1 from '../cards/Card1';
import {Grid} from "@material-ui/core"

const useStyles= makeStyles((theme)=> ({
    root:{
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor:'rgba(67,129,168,0.5)',
        padding:"2px",
        // height:50
            },
    appBarSolid:{
        backgroundColor:'rgba(67,129,168)',
        // height:100
    }
}));

const NavBar4 = () => {
    const classes=useStyles();
    const [navBackground,setNavBackground] = useState('appBarTransparent');
    const navRef=React.useRef();

    navRef.current=navBackground;
    useEffect(()=>{
        const handleScroll = ()=>{
            const show = window.scrollY > 310
            if(!show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll',handleScroll)
        return ()=>{document.removeEventListener('scroll',handleScroll)}
    },[]);
    return (
        <div className={classes.root}>
                   <AppBar position="fixed" className={classes[navRef.current]}>
            <Toolbar>
                <IconButton className={classes.menuButton}>
                    <Menu/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                </Typography>
     <Button>Login</Button>
            </Toolbar>
            </AppBar>
         <div style={{marginTop:"80px"}}> 
             <ReturnHome/>
             </div>  
          <Grid container>

           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
           <Card1/>
          </Grid>
          
        </div>
    )
}

export default NavBar4
