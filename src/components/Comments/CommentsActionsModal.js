import "./Comments.css"
import "./EditCommentsModal.css"
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";


export default function CommentsActionsModal ({ allComments, setAllComments, comment, setComment }) {
   const [actionsToggle, setActionsToggle] = useState(false);
   const [editModalOpen, setEditModalOpen] = useState(false);
   const [editInput, setEditInput] = useState(comment.text || "");
   
   function toggleActions() {
        if (actionsToggle || editModalOpen) {
            setActionsToggle(false);
            setEditModalOpen(false);
        } else {
            setActionsToggle(true);
        }
    }

    function deleteComment() {
        const confirm = window.confirm("Proceed with deletion?");

        if (confirm) {
            const updatedComments = allComments.filter(commentEle => commentEle.id !== comment.id);
            setAllComments(updatedComments);
        } else {
            return
        }
    }

    function toggleEditModal(event) {
        if (event.target.id === "cancel") {
            setEditInput(comment.text)
        }
        setActionsToggle(false);
        setEditModalOpen(!editModalOpen);
    }

    function handleInput(event) {
        setEditInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setComment(comment.text = editInput)
        console.log(editInput, comment)
    }

    return (
        <div className="commentsActionsModalDiv">
            <BiDotsVerticalRounded size={25} onClick={toggleActions} style={{cursor: 'pointer'}} className="commentsActionsToggle" />
            
            {actionsToggle && 
                <div className="actionsDiv">
                    <span onClick={toggleEditModal} className="actionEdit"><MdEdit/>Edit</span>
                    <span onClick={deleteComment} className="actionDelete"><RiDeleteBin5Fill />Delete</span> 
                </div>}
                {editModalOpen && 
                    <form className="editCommentModal">
                        <input onChange={handleInput} type="text" className="editCommentText" value={editInput}/>
                        <button onClick={toggleEditModal} id="cancel" className="cancelEdit">Cancel</button>
                        <button onClick={handleSubmit} className="saveEdit">Save</button>
                    </form>
                }
        </div>
    )
}