//  eslint-disable no-unused-vars
// import posts from "../posts";
import { useState, useEffect } from "react";
import BasicTextFields from "../Components/BasicTextFields";
import {useParams} from 'react-router-dom'
import { supabase } from "../client";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AlignItemsList from "../Components/AlignItemsList";

export default function Post() {
    
   
    const id = useParams();

    const [updatedInfo, setUpdatedInfo] = useState({});
    const [postData, setPostData] = useState();
    const [title, setTitle] = useState("Update Title");
    const [content, setContent] = useState("Update Content");
    const [imageUrl, setImageUrl] = useState("Update imageUrl");
    const [upvotes, setUpVotes] = useState();
    const [comment, setComment] = useState([""]);
    const [commentArray, setCommentArray] = useState([""]);
    let arrayB = []

    const handleUpdate = (update) => {
        setUpdatedInfo({...updatedInfo, ...update})
        setTitle
    }

    useEffect(() =>
    {const getPost = async () => {
        const {data} = await supabase
        .from("Post Details")
        .select()
        .eq("id", id.id)

        setPostData(data)
      
        setTitle(data[0].title)
        setContent(data[0].content)
        setUpVotes(data[0].upvotes)
        setImageUrl(data[0].imageUrl)
        setCommentArray(data[0].comment)
      
    }

    getPost().catch(console.error)
    }, [])

    // console.log(postData[0].title, "titlel")

    const updatePost = async (newPost) => {
        event.preventDefault()
        await supabase
        .from('Post Details')
        .update({title: title, content: newPost.content, imageUrl: newPost.imageUrl, upvotes: upvotes})
        .eq('id', id.id)

        window.location = "/";

    }

    const deletePost = async (event) => {
        event.preventDefault()
        await supabase
        .from('Post Details')
        .delete()
        .eq('id', id.id)
        window.location = "/";
    }
   
    const upVote = () => {
        setUpVotes(upvotes + 1)
    }

    const upDateComment = async () => {
        // let arrayNew = []
        let arrayNew = [...commentArray, comment]
        // console.log(commentArray, "commentA")

        event.preventDefault()
        await supabase
        .from('Post Details')
        .update({comment: arrayNew})
        .eq('id', id.id)

        window.location = "/";


    }

    return (
       
        <div style={{position: "relative"}}>
           <br></br>
           <br></br>
           <br></br>
            <h4 style={{position: "absolute", left: 30, top: 10}}> ⬆️ Upvotes: {upvotes}</h4>
            <img style={{width: "80%"}} src={imageUrl}/>
           <br></br>

            <BasicTextFields handleUpdate={handleUpdate} title={title} content={content} imgUrl={imageUrl}/>
            <AlignItemsList upDateComment= {upDateComment} setComment={setComment} comments={commentArray}/>
            <Stack justifyContent={"center"} spacing={12} direction="row"> 
                <Button variant="outlined" onClick={() => updatePost(updatedInfo, upvotes)}>Update</Button>
                <Button variant="outlined" onClick={() => upVote()}>UpVote ⬆️</Button>
                <Button variant="outlined" onClick={deletePost}>Delete</Button>
            </Stack>

        </div>
    )
}