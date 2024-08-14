import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';



type Anchor = 'right';

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        right: true,
    });

    const toggleDrawer = 
      (open: boolean) => 
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event && 
            event.type === 'keydown' && 
            ((event as React.KeyboardEvent).key === 'Tab' || 
              (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, right: open});
    }; 
    
    const list = () => (
        <Box
          sx={{
            width: 250,
            marginTop: '16px',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Inbox', 'Started', 'Send Email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
        ))}
            </List>
        </Box>
    );

    React.useEffect(() => {
        toggleDrawer(true);
    }, []);

    return (
        <SwipeableDrawer
          anchor="bottom"
          open={state.right}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(false)}
          >
            {list()}
          </SwipeableDrawer>
    )
}