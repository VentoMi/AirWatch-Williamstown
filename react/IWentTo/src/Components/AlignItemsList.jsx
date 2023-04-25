/* eslint-disable react/jsx-key */
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function AlignItemsList({setComment, comments, upDateComment}) {

    const handleChange = (e) => {
        // let key = e.target.id
        let val = e.target.value
        // let newValue ={[key]:val}
        setComment(val)
    }
    
  return (
    <div>
    <Stack justifyContent={"center"} spacing={10} direction="row"> 

    <TextField sx={{display:"flex", left: "5%", width:"60%"}} size="small"  id="outlined-basic" label="Leave a comment" placeholder='add comment' variant="outlined" onChange={(e) => handleChange(e)}/>
    <Button onClick={() => upDateComment()}> comment </Button>
    </Stack>
    <h3> Comments</h3>
    <List sx={{display:"flex", flexDirection:"column", margin:"auto", width: '70%', bgcolor: 'background.paper' }}>
     {comments && comments.map((comment) => 
     <div>
        <ListItem sx={{ textAlign: 'center' }}>
        <ListItemText
        
          primary={""}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline'}}
                component="span"
                variant="body2"
                color="text.primary"

              >
                
              </Typography>
              {comment}
            </React.Fragment>
          }
        />
       </ListItem>
    <Divider variant="inset" component="li" />
    </div>
       )}

     {/* <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem> */}
      <Divider variant="inset" component="li" />
    </List>
    </div>
  );

}