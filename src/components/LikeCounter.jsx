
import React, { useState } from 'react';    
function LikeCounter()
{
    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0);
    const [reset,setReset] = useState(0);
    return (
        <div>
            <h2>Like Counter</h2>
            <p>Likes: {like}</p>
            <p>Dislikes: {dislike}</p>
            <p>Resets: {reset}</p>
            <button onClick={() => setLike(like + 1)}>Like</button>
            <button onClick={() => setDislike(dislike + 1)}>Dislike</button>
            <button onClick={() => {
                setLike(0);
                setDislike(0);
                setReset(reset + 1);
            }}>Reset</button>
        </div>
    );
}

export default LikeCounter;