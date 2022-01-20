import React from 'react'
import axios from 'axios'
import Header from './Header'
export default function Post() {

    const titlePost = React.useRef(null)
    const shortdescriptionsPost = React.useRef(null)
    const photoPost = React.useRef(null)
    const descriptionsOne = React.useRef(null)
    const photoOne = React.useRef(null)
    const descriptionsTwo = React.useRef(null)
    const photoTwo = React.useRef(null)
    const descriptionsThree = React.useRef(null)


    const [data, setData] = React.useState('')

    React.useEffect(() => {
        const calendar = new Date()
        setData(`${calendar.getDate()}.0${calendar.getMonth() + 1}.${calendar.getFullYear()}`)

    }, [])

    // React.useEffect(() => {

    // }, [])

    async function postFetchData () {
        const response = await axios.post('http://localhost:3004/posts',{
           titlePost:titlePost.current.value,
           shortdescriptionsPost:shortdescriptionsPost.current.value,
           photoPost:photoPost.current.value,
           descriptionsOne:descriptionsOne.current.value,
           photoOne:photoOne.current.value,
           descriptionsTwo:descriptionsTwo.current.value,
           photoTwo:photoTwo.current.value,
           descriptionsThree:descriptionsThree.current.value,
           dataPost:data
        })

           titlePost.current.value = "";
           shortdescriptionsPost.current.value = "";
           photoPost.current.value = "";
           descriptionsOne.current.value = "";
           photoOne.current.value = "";
           descriptionsTwo.current.value = "";
           photoTwo.current.value = "";
           descriptionsThree.current.value = "";
           

        return response
   }
    
    return (
        <div className='postHeader'>
        <Header/>
        <h1>Создать Пост</h1>
            <div className='post'>
                <label className='postLabel'>
                    <p>Называния поста</p>
                    <input ref={titlePost} type="text" placeholder='Называния поста' />
                </label>
                <label className='postLabel'>
                    <p>Описания</p>
                    <textarea ref={shortdescriptionsPost} className='textArea' cols="66" rows="5">

                    </textarea>
                </label>
                <label className='postLabel'>
                    <p>Изображения поста</p>
                    <input ref={photoPost} type="url" placeholder='Изображения поста URL' />
                </label>
                <label className='postLabel'>
                    <p>№1 описания поста</p>
                    <textarea ref={descriptionsOne} className='textArea' cols="66" rows="5">

                    </textarea>
                </label>
                <label className='postLabel'>
                    <p>№1 Изображения поста</p>
                    <input ref={photoOne} type="url" placeholder='Изображения поста URL' />
                </label>
                <label className='postLabel'>
                    <p>№2 описания поста</p>
                    <textarea ref={descriptionsTwo} className='textArea' cols="66" rows="5">

                    </textarea>
                </label>
                <label className='postLabel'>
                    <p>№2 Изображения поста</p>
                    <input ref={photoTwo} type="url" placeholder='Изображения поста URL' />
                </label>
                <label className='postLabel'>
                    <p>№3 описания поста</p>
                    <textarea ref={descriptionsThree} className='textArea' cols="66" rows="5">

                    </textarea>
                </label>

                <div className="send">
                    <button 
                    className='sendBtn'
                    onClick={() => postFetchData()}
                    >
                        Отправить</button>
                </div>
            </div>

        </div>
    )
}
