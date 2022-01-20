import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Sections() {

    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {

        async function getPostData() {
            const response = await axios.get('http://localhost:3004/posts')
            setPosts(response.data.reverse())
        }
        return getPostData()

    }, [])


    return (
        <div className='sectioin'>
            {posts.map((post, index) => {
                return (
                    <Link key={post.id} to={`/${post.id}?${post.titlePost}`}>
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

                        <div className="wrapper_mobile">
                            <div className="image">
                                <img src={post.photoPost} alt="" />
                            </div>
                            <div className="left_content">
                                <div className="title">
                                    <h2>{post.titlePost}</h2>
                                </div>


                                <div className="message">
                                    <span>{post.dataPost}</span>
                                    <span><img src="./icons/message.png" alt="" /></span>
                                </div>
                            </div>
                        </div>
                    </Link>

                )
            })}
        </div>
    )
}
