import "./Comments.css"
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";


export default function CommentsActionsModal ({ allComments, setAllComments, comment }) {
   const [actionsToggle, setActionsToggle] = useState(false)
   
   function toggleActions() {
        setActionsToggle(!actionsToggle);
    }

    function deleteComment() {
        const confirm = window.confirm("Proceed with deletion?");

        if (confirm) {
            const updatedComments = allComments.filter(commentEle => commentEle.id !== comment.id)
            setAllComments(updatedComments)
        } else {
            return
        }

    }

    return (
        <div className="commentsActionsModalDiv">
            <BiDotsVerticalRounded size={25} onClick={toggleActions} style={{cursor: 'pointer'}} className="commentsActionsToggle" />
            
            {actionsToggle && 
                <div className="actionsDiv">
                    <span className="actionEdit"><MdEdit/>Edit</span>
                    <span onClick={deleteComment} className="actionDelete"><RiDeleteBin5Fill />Delete</span> 
                </div>}
            
        </div>
    )
}