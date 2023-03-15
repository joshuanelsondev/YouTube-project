import "./Comments.css"
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";


export default function CommentsActionsModal () {
   const [actionsToggle, setActionsToggle] = useState(false)
   
   function toggleActions() {
        setActionsToggle(!actionsToggle);
    }

    return (
        <div className="commentsActionsModalDiv">
            <BiDotsVerticalRounded size={25} onClick={toggleActions} style={{cursor: 'pointer'}} className="commentsActionsToggle" />
            
            {actionsToggle && 
                <div className="actionsDiv">
                    <span className="actionEdit"><MdEdit/>Edit</span>
                    <span className="actionDelete"><RiDeleteBin5Fill />Delete</span> 
                </div>}
            
        </div>
    )
}