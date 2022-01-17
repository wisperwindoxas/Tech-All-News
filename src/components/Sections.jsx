import React from 'react'
import axios from 'axios'

export default function Sections() {

    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {

        async function getPostData() {
            const response = await axios.get('http://localhost:3004/posts')
            setPosts(response.data)
        }
        return getPostData()

    }, [])


    return (
        <div className='sectioin'>
            {posts.map((post, index) => {
                return (
                    <div key={post.id} className="wrapper">
                        <div className="title">
                            <h2>{post.titlePost}</h2>
                        </div>
                        <div className="title__parag">
                            <p>{post.shortdescriptionsPost}</p>
                        </div>
                        <div className="image">
                            <img src={post.photoPost} alt="" />
                        </div>
                        <div className="message">
                            <span>{post.dataPost}</span>
                            <span><img src="./icons/message.png" alt="" /></span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
