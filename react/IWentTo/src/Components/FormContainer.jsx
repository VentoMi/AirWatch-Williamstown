/* eslint-disable react/jsx-key */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 400,
  lineHeight: '25px',
}));

// const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function FormContainer({cardContent}) {
  return (
    <Grid container spacing={1}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={10} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              
               <div>
               <Item>
                    {cardContent()}
                </Item>
                
                </div>
             
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
