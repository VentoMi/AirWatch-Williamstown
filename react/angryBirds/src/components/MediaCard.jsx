import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

export default function MediaCard({birdData}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="../public/clipart1038387.png"
        title="green iguana"
      />
      <CardContent>
        {/* <img src="../public/clipart1038387.png" style={{width:"50%"}}/> */}
        <Typography gutterBottom variant="h5" component="div">
           { console.log(birdData)}
          Name: {birdData.name}  <br/>
          Type: {birdData.type} <br/>
          Size: {birdData.size} kg
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      
      <CardActions>
        <Link to={`/editbird/${birdData.id}`} style={{textDecoration:"none"}}>   
        <Button size="medium">Edit Bird</Button>
        </Link>
      
      </CardActions>
    </Card>
  );
}