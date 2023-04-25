import { useState } from "react"
import { supabase } from "../client"
import BasicTextFields from "../Components/BasicTextFields"
import Button from '@mui/material/Button';
import FormContainer from "../Components/FormContainer"

export default function CreateNewPost() {
    const [newPost, setNewPost] = useState({})

    //create new post
    const createNewPost = async (event) => {
        // event.preventdefault();
        await supabase
        .from('Post Details')
        .insert({title: newPost.title, content: newPost.content, imageUrl: newPost.imageUrl, upvotes: 0})
        .select()

        window.location = '/';
    }

    const handleUpdate = (newVal) => {
        setNewPost({...newPost, ...newVal})
    }

    const cardContent = () => {
        return (
            <div>
            <BasicTextFields handleUpdate={handleUpdate}/>
            <Button onClick={() => createNewPost()}> create new post</Button>
            </div>
        )
    }

    return (
        <div>
            {/* <BasicTextFields handleUpdate={handleUpdate}/> */}
            <FormContainer cardContent={cardContent}/>
        </div>
    )
}