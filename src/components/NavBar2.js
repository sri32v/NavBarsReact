import React,{useState} from 'react';
import {ReturnHome} from '../components'
import {AppBar,Toolbar,IconButton,Typography,Button,Drawer, List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {AccountCircle, Menu} from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const NavBar2 = () => {
    const [open,setOpen] = useState(false);
    const [anchor,setAnchor] = useState('left')
    const handleDrawer =() => {
        setAnchor('left');
        setOpen(true);
    }
    const handleAccount =() => {
        setAnchor('bottom');
        setOpen(true);
    }
    return (
        <div>
            <AppBar position='static'>
            <Toolbar>
                    <IconButton onClick={handleDrawer} color='inherit' edge='start' aria-label='menu'>
                        <Menu/>
                    </IconButton>
                    <Typography variant='h6' style={{ flexGrow: 1 }}>
                        {/* FlexGrow: 1 takes the available size of the container moves the buttons to right */}
                        Material-UI
                    </Typography>
                    <Button color='inherit'>
                        Login
                    </Button>
                    <Button color='inherit'>
                        Register
                    </Button>
                    <IconButton onClick={handleAccount} color='inherit' aria-label='Account'>
                       <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor={anchor}
                open={open}
                onClose={()=>{setOpen(false)}}
            >
                <div style={{height: "100%", padding:"20px"}}>
               {anchor==="left"?
               ( <div>
                   <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
     
      </List>
                </div>   ):
                (
                    <div>
                        <Button variant='container'>Login/SignUp</Button>
                        <Button variant='container'>MyAccount</Button>
                    </div>
                )
            }
                              </div>
            </Drawer>
            <div>Left Bottom Drawer</div>
            <ReturnHome/>
        </div>
    )
}

export default NavBar2
