import { useState } from "react";
import './Comments.css';

export default function Comments() {
    const initialComment = {
        commenter: "",
        text: ""
    }
    const [comment, setComment] = useState(initialComment);

    function handleInput(event) {
        setComment({...comment, [event.target.id]: event.target.value })
    }
    console.log(comment)

    function handleSubmit(event) {
        event.preventDefault()
        setComment(initialComment)
    }
    return (
        <div className='commentsDiv'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="commenter">Commenting as</label>
                <input type="text" onChange={handleInput} id="commenter" value={comment.commenter} required />
                <input  onChange={handleInput} id="text" className='addComment' type="text" placeholder="Add a comment..." value={comment.text} />
                <span className='focus-border'></span>
                <input type="submit" value="comment" id="submitComment" />
            </form>
        </div>
    )
}