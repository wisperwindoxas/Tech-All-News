import React from 'react';


export default function Comments() {


  return (
    <div className='comments'>
        <div className="commentForm">
            <textarea name="" id="commentText" cols="80" rows="3" placeholder='Классная тема'></textarea>
            <button  className="commentBtn">Комментировать</button>
        </div>

    </div>

  );
}
