import Elevation from '../Components/Elevation';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';


export default function Home({posts, setPosts, printOrderBy}) {

    const cardContent = (post) => {
        return (
              <div>
        <h3 style={{position:"absolute", top: -10, left: 0}}>iWentTo...</h3>
        <h2 style={{}}> {post.title} </h2>
        </div>
        )
    }

    const handlePrintOrder = (orderCol) => {
        printOrderBy(orderCol)
    }


    return (
        <div>
       
        <h1>iWentTo </h1>
        <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => {handlePrintOrder("created_at")}}> Newest </Button>
        <Button variant="contained" onClick={() => handlePrintOrder("upvotes")}> MostPopular</Button>
        
        </Stack>
         <Elevation posts={posts} cardContent={cardContent}/>
       
        </div>
    
    )
}