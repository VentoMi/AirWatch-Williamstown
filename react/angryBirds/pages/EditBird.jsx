import { useState } from "react"
import BasicTextFields from "../src/components/BasicTextField"
import RadioButtonsGroup from "../src/components/RadioButtonsGroup"
import { supabase } from "../src/client"
import { useParams } from "react-router-dom"
import Button from '@mui/material/Button';



export default function EditBird () {
    const id = useParams();

    const [updatedInfo, setUpdatedInfo] = useState({})

    const handleUpdate = (update) => {
        setUpdatedInfo({...updatedInfo, ...update})
    }

    const UpdateBird = async (event) => {
        event.preventDefault()
        await supabase
        .from('angryBirds')
        .update({name: updatedInfo.name, type: updatedInfo.type, size: updatedInfo.size, color: updatedInfo.color})
        // .eq('id', id);
    }

    const DeleteBird = async (event) => {
        event.preventDefault()
        await supabase
        .from ('angryBirds')
        .delete()
        .eq('id', id)
    }


    console.log(updatedInfo.name, "birdUpdate")

    return (
        <div>
           <h1>Update Bird!!!!</h1> 
           <BasicTextFields handleUpdate={handleUpdate}/>
           <RadioButtonsGroup  handleUpdate={handleUpdate}/>
           <Button onClick={UpdateBird}> Update Bird </Button>
           <Button onClick={DeleteBird}> Delete Bird </Button>

        </div>       
    )
}