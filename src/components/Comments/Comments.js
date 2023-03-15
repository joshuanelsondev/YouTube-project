import { useState } from "react";
import './Comments.css';
import { AiOutlineUser } from "react-icons/ai";

export default function Comments({ allComments, setAllComments }) {
    const initialComment = {
        commenter: "",
        text: ""
    }

    const initialFocus = {
        text: false,
        commenter: false
    }
    
    const [focus, setFocus] = useState(initialFocus);
    const [visibility, setVisibility] = useState(false);
    const [comment, setComment] = useState(initialComment);

    function handleInput(event) {
        setComment({...comment, [event.target.id]: event.target.value });
        if (event.target.value !== "") {
            setFocus({...focus, [event.target.id]: true });
        } else {
            setFocus({...focus, [event.target.id]: false });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setAllComments([...allComments, comment]);
        setComment(initialComment);
        setFocus(initialFocus);
    }

    function toggleComments(event) {
        if (event.target.id === "text") {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }

    return (
        <div className='commentsDiv'>
            <form onSubmit={handleSubmit}>
                {visibility && <input type="text" onChange={handleInput} id="commenter" value={comment.commenter} placeholder="Name" required />}
                <input  onClick={toggleComments} onChange={handleInput} id="text" className='addComment' type="text" placeholder="Add a comment..." value={comment.text} required />
                <span className='focus-border'></span>
                {visibility && 
                    <div className="commentButtonsDiv">
                        <button onClick={toggleComments} className="cancelButton">Cancel</button>
                        <input 
                            type="submit"
                            value="Comment" 
                            id="submitComment"  
                            style={{
                                background: (focus.text && focus.commenter) ? '#4caf50' : '#EFEFEF',
                                color: (focus.text && focus.commenter) ? 'white' : 'black'
                            }}
                        />
                    </div>
                }
            </form>
            <div>
                {allComments.map(comment => {
                    return (
                        <div className="commentsSection">
                            <AiOutlineUser  className="userIcon" size={25} />
                            <span className="commentsSection-commenter">{comment.commenter}</span>
                            <li className="commentsSection-text">{comment.text}</li>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}