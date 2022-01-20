import React from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Header from './Header';
import Comments from './Comments';
export default function PostBlog() {

    const {id} = useParams()
    const [posts, setPosts] = React.useState([])

    React.useState(() => {
        async function getUserInfo(){
            const response = await axios.get(`http://localhost:3004/posts/${id}`)
            setPosts(response.data)
        }
        return getUserInfo()
    }, [])



    
  return(
    <>
    <Header/>
    <div className='postBlock_wrapper'>
        
        <div className='posts'>
                    <h1>{posts.titlePost}</h1>
                    <img src={posts.photoPost} alt="" />
                    <p>{posts.descriptionsOne}</p>
                    <img src={posts.photoOne} alt="" />
                    <p>{posts.descriptionsTwo}</p>
                    <img src={posts.photoTwo} alt="" />
                    <p>{posts.descriptionsThree}</p>
        </div>
     
    </div>
    <Comments/>
    </>
  )
}
