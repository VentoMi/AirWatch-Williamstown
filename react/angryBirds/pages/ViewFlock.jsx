
import { useState, useEffect } from "react";
import { supabase } from "../src/client";
import MediaCard from "../src/components/MediaCard";


export default function ViewFlock() { 

   const [birds, setBirds] = useState([]); 

  
    const getBirds = async () => {

                const {data} = await supabase
                .from('angryBirds')
                .select();

                setBirds(data);
                console.log(birds, "birds")
            }

  useEffect(() => {
    getBirds();
 }, [])

 //filter by green
    
    const numGreen = birds.filter(bird => bird.color == "green")
    let green = numGreen.length

    const numRed = birds.filter(bird => bird.color == "red")
    let red = numRed.length

    const numBlue = birds.filter(bird => bird.color == "blue")
    let blue = numBlue.length

    if (blue == 0 ) {
        blue = "no"
    }

    if (green == 0 ) {
        green = "no"
    }

    if (red == 0 ) {
        red = "no"
    }

    return (
    <div>
        <h1> Bird Gallery </h1>
        <h2> Your team has {green} green birds, {red} red birds and {blue} blue birds. </h2>
       <div>
        {birds.map((bird) => {
           
        return (
             <MediaCard birdData={bird}/>
             )  
        })}
         </div>
        {/* <MediaCard/> */}
    </div>
    )

}