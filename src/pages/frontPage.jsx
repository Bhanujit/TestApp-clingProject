import React,{useState} from 'react'
import './frontPage.css'
import Card from '../components/card'

const FrontPage = () => {
const [clicked,setClicked]= useState(false)
const [commentsUpdate,setCommentsUpdate]=useState(false)
const [photosUpdate,setPhotosUpdate]=useState(false)
const [todosUpdate,setTodosUpdate]=useState(false)
const [postsUpdate,setPostsUpdate]=useState(false)

return (
    <>
    <div className="conatiner">
        <div className='header'>
            <h3>Test App</h3>
        </div>
        <div className='main-body'>
        <Card url = "https://jsonplaceholder.typicode.com/comments" name="comments" clicked={clicked} update={commentsUpdate}/>
        <Card url = "https://jsonplaceholder.typicode.com/photos" name="photos"clicked={clicked} update={photosUpdate}/>
        <Card url = "https://jsonplaceholder.typicode.com/todos" name="todos" clicked={clicked} update={todosUpdate}/>
        <Card url = "https://jsonplaceholder.typicode.com/posts" name="posts" clicked={clicked} update={postsUpdate}/>
        </div>
        <div className='button-container'>
        <button className='ind-button' onClick={()=>{
            commentsUpdate?setCommentsUpdate(false):setCommentsUpdate(true)
        }}>Comments</button>

        <button className='ind-button' onClick={()=>{
            photosUpdate?setPhotosUpdate(false):setPhotosUpdate(true)
        }}>Photos</button>

        <button className='ind-button' onClick={()=>{
            todosUpdate?setTodosUpdate(false):setTodosUpdate(true)
        }}>Todos</button>

        <button className='ind-button' onClick={()=>{
            postsUpdate?setPostsUpdate(false):setPostsUpdate(true)
        }}>Posts</button>
        </div>

        <button className='all-button' onClick={()=>{
            clicked?setClicked(false):setClicked(true)
        }}>Current Unix Timestamp</button>
    </div>
    
    </>
  )
}

export default FrontPage