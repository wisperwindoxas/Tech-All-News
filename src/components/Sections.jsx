import React from 'react'
import { Link } from 'react-router-dom'
import {db} from './util/firebase'

import { 
    collection,
     getDocs,
    } from 'firebase/firestore'
import MyLoader from './Loading'




export default function Sections() {

    const [posts, setPosts] = React.useState([])
    const [idPost, setIdPost] = React.useState([])
    const [isLoader] = React.useState([1,2,3,4,5,6,7,8,9,10,11,12])

    React.useEffect(() => {
       async function getAllPost(){
        const postCollection = await getDocs(collection(db, 'posts'));
        postCollection.forEach(item => {
           
             setPosts((oldPosts) => [...oldPosts, item.data()])
             setIdPost((oldId) => [...oldId, item.id])
            
        })
       
       }

       return getAllPost()

    }, [setPosts]
    )

  
    return (
        <div className="container">
        <div className='sectioin'>
           {posts.length > 0 ?
           
           posts.map((post, index) => {
               
            return (
                <Link key={post.titlePost} to={`/${idPost[index]}`}>
                    <div className="wrapper">
                        <div className="title">
                            <h2>{post.titlePost}</h2>
                        </div>
                        <div className="title__parag">
                            <p>{post.descriptionsOne}</p>
                        </div>
                        <div className="image">
                            <img src={post.photoPost} alt="" />
                        </div>
                        <div className="message">
                            <span>{post.dataPost}</span>
                            <span><img src="./icons/message.png" alt="" /></span>
                        </div>
                    </div>

                </Link>

            )
        }): isLoader.map(item => {
            return <div key={item} className="lodaer">
                <MyLoader/>
            </div>
        })
        }
        </div>
        </div>
    )
}
