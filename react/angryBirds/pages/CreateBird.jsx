import BasicTextFields from "../src/components/BasicTextField";
import { useState, useEffect } from "react";
import { supabase } from "../src/client";
import RadioButtonsGroup from "../src/components/RadioButtonsGroup";
import Button from '@mui/material/Button';

const CreateBird = () => {
    const [birdAttributes, setBirdAttributes] = useState({});
    // const [formInput, setFormInput] = useState()

    //insert new entry into database
    const createNewBird = async (event) => {
        event.preventDefault();
        await supabase
        .from('angryBirds')
        .insert({name: birdAttributes.name, type: birdAttributes.type, size: birdAttributes.size, color: birdAttributes.color})
        .select();

        window.location = "/viewflock";
    }


    const handleUpdate = (newVal) => {
        setBirdAttributes({...birdAttributes, ...newVal})
    };
    return (
        <div>
            <h1>Create Bird </h1>
            <BasicTextFields handleUpdate={handleUpdate}/>
            <RadioButtonsGroup handleUpdate={handleUpdate}/>
            <Button onClick={createNewBird}> Create Bird</Button>
        </div>
    )
}

export default CreateBird;