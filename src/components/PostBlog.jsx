import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Comments from './Comments';
import {db} from './util/firebase'

import { 
    doc,
     getDoc,
    } from 'firebase/firestore'


export default function PostBlog() {

    const {id} = useParams()
    const [posts, setPosts] = React.useState([])



    React.useEffect(() => {
          async function getUserInfo(){
            const docRef = doc(db, "posts", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              setPosts(docSnap.data())
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
            
           
       }
        
        return getUserInfo()
    }, [id])
    

    console.log(id);
  return(
    <>
    <Header/>
    <div className='postBlock_wrapper'>
        
        <div className='posts'>
                    <h1>{posts.titlePost}</h1>
                    <img src={posts.photoPost} alt="" />
                    {posts.videoUrl ? <iframe src={posts.videoUrl} title="myFrame" frameBorder="0"></iframe>  : ""}
                    <p>{posts.descriptionsOne}</p>
                    <img src={posts.photoOne} alt="" />
                    <p>{posts.descriptionsTwo}</p>
                    <img src={posts.photoTwo} alt="" />
                    <p>{posts.descriptionsThree}</p>
        </div>
        <Comments/>
    </div>
  
    </>
  )
}