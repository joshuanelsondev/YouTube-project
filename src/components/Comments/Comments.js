import { useState } from "react";
import './Comments.css';
import { AiOutlineUser } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { v1 as generateUniqueID } from "uuid";

export default function Comments({ allComments, setAllComments }) {
    const initialComment = {
        commenter: "",
        text: ""
    }

    const initialFocus = {
        commenter: false,
        text: false
    }
    
    const [focus, setFocus] = useState(initialFocus);
    const [visibility, setVisibility] = useState(false);
    const [comment, setComment] = useState(initialComment);
    const [actionsToggle, setActionsToggle] = useState(false);

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
        if (!focus.commenter || !focus.text) {
            return
        }
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

    function toggleActions() {
        setActionsToggle(!actionsToggle);
    }

    return (
        <div className='commentsDiv'>
            <form id="commentsForm" onSubmit={handleSubmit} noValidate>
                {visibility && <input type="text" onChange={handleInput} id="commenter" value={comment.commenter} placeholder="Name" />}
                <input  onClick={toggleComments} onChange={handleInput} id="text" className='addComment' type="text" placeholder="Add a comment..." value={comment.text} />
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
                                color: (focus.text && focus.commenter) ? 'white' : 'black', 
                                cursor: (focus.text && focus.commenter) ? 'pointer' : 'auto'
                            }}
                        />
                    </div>
                }
            </form>
            <div>
                {allComments.map(comment => {
                    return (
                        <div key={generateUniqueID()} className="commentsSectionDiv">
                            <div className="commentsSection">
                                <AiOutlineUser  className="userIcon" size={25} />
                                <span className="commentsSection-commenter">{comment.commenter}</span>
                                <li className="commentsSection-text">{comment.text}</li>
                                <BiDotsVerticalRounded size={25} onClick={toggleActions} style={{cursor: 'pointer'}} className="commentsActionsToggle" />
                            </div>
                            {actionsToggle &&
                                <div className="actionsDiv">
                                    <span className="actionEdit"><MdEdit/>Edit</span>
                                    <span className="actionDelete"><RiDeleteBin5Fill />Delete</span> 
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}