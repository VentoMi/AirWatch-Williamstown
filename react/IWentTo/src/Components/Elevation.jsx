/* eslint-disable react/jsx-key */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import SimpleBackdrop from '../Components/SimpleBackDrop';
import { useState } from 'react';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 120,
  lineHeight: '25px',
}));


// const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation({posts, cardContent}) {
    const [isOpen, setIsOpen] = useState(true);
    let opened = true;
    const evaluateDate = (date) => {
        let millisec = Date.now() - Date.parse(date)
        
        let hours = millisec / (1000 * 3600)
        opened = false

        if (hours < 1) {
            return (Math.round(millisec / (1000 * 60)) + " min ago")
        }

        return (hours > 24 ? ( Math.round(hours/24) > 1 ? Math.round(hours/24) + " days ago" : Math.round(hours/24) + " day ago") : ( + Math.round(hours) + " hours ago"))
    }
    
  return (
    <div>
        
   
    <Grid container spacing={1}>
    
      {[lightTheme].map((theme, index) => (
        <Grid item xs={100} key={index}>
          <ThemeProvider theme={theme}>
           
            {posts.map((post) => {
            
            const evaluatedDate = evaluateDate(post.created_at)
            

            return (
            <Link to={`/Post/${post.id}`} style={{textDecoration:"none", color:"black"}}> 
            
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr' },
                gap: 2,
              }}
            >
              
               <div>
               <Item key={posts} elevation={3} style={{position: "relative", display:"flex", justifyContent:"center", alignItems:"center"}}>
                  {/* <h2 style={{textAlign:"2px left"}}>iWentTo</h2>
                  <h2> {post.title} </h2> */}
                    {/* <p>dhfsdjk</p> */}
                  {cardContent(post)}
                 
                  {<h3 style={{position:"absolute", bottom: -10, right: 0}}> ⬆️ {post.upvotes }</h3>}
                  {<h5 style={{position:"absolute", bottom: -10, left: 5}}> {evaluatedDate} </h5>}
                </Item>
                
                </div>
            
            </Box>  
            </Link> )})}
      
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    <SimpleBackdrop isOpen={opened}/>
    </div>
  );
}
