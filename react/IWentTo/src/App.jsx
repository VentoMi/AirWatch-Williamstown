import './App.css'
import Home from './Pages/Home'
import CreateNewPost from './Pages/CreatePost'
import Post from './Pages/Post'
import PrimarySearchAppBar from './Components/PrimarySearchAppBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from './client'

function App() {
  
  const [upVotes, setUpVotes] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState([]);
  const [orderBy, setOrderBy] = useState("id");

 
  const getPosts = async () => {

              const {data} = await supabase
              .from('Post Details')
              .select()
              .order(orderBy, {ascending: false})

              setPosts(data);
              // console.log(posts[0].title, "posts")

          }
  
  const printOrderBy = (val) => {
    setOrderBy(val)
  }

  useEffect(() => {
    getPosts();
  }, [orderBy]) 

let searchPosts;
    searchPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  })

  return (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PrimarySearchAppBar setSearchValue={setSearchValue}/>}>
        <Route path='/' element={<Home printOrderBy={printOrderBy} setPosts={setPosts} posts={ searchValue.length == 0 ? posts : searchPosts}/>}/>
        <Route path='/CreatePost' element={<CreateNewPost/>}/>
        <Route path='/Post/:id' element={<Post/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

  )
}

export default App