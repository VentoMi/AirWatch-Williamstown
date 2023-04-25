// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { Preview } from '@mui/icons-material';

export default function BasicTextFields({handleUpdate, title, content, imgUrl}) {

    // console.log(title, "title in basicTextFields")
    // let titleE = ""
    const handleChange = (e) => {

        let key = e.target.id
        let val = e.target.value
        let newValue ={[key]:val}
        handleUpdate(newValue)
    
    }

  return (
    <div>
    <Box
      
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '80%', display: "flex", flexDirection: 'column', margin: 'auto'},
      }}
      // style={{display: "flex", flexDirection: 'column', alignContent: 'center'}}
      noValidate
      autoComplete="on"
    >
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      <TextField id="title" label="Title" variant="filled" onChange={(e) => handleChange(e)}/>
        
      <TextField
          id="content"
          label="Content"
          multiline
          rows={4}
          variant="filled"
          onChange={(e) => handleChange(e)}
          placeholder={content}
          defaultValue={content}
        />
        {/* <TextField id="content" label="Content" variant="filled" onChange={(e) => handleChange(e)}/> */}
      <TextField id="imageUrl" label="Image url" variant="filled" placeholder={imgUrl} onChange={(e) => handleChange(e)}/>
    </Box>
    <br></br>
    </div>
  ); 
}
