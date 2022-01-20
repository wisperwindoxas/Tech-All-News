import React from 'react';
import axios from 'axios';

export default function Comments() {
    const [comment, setComments] = React.useState([])

    React.useEffect(() => {
        async function getComments(){
            const response = await axios.get('http://localhost:3004/comments')
            setComments(response.data)
        }

        return getComments()
    },[])


    async function putComment(){
        const article  = {comments: [

            {
                userName:"windoxas",
                comment:"Good like"
            }
        ]}
        axios.put('http://localhost:3004/posts/1/',article).then((data) => console.log(data))
    }


  return (
    <div className='comments'>
        <div className="commentForm">
            <textarea name="" id="commentText" cols="80" rows="5" placeholder='Классная тема'></textarea>
            <button onClick={() => putComment()} className="commentBtn">Комментировать</button>
        </div>

    </div>

  );
}
