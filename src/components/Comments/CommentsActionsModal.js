import "./Comments.css"
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

export default function CommentsActionsModal () {
   
    

    return (
        <div className="actionsDiv">
            <span className="actionEdit"><MdEdit/>Edit</span>
            <span className="actionDelete"><RiDeleteBin5Fill />Delete</span> 
        </div>
    )
}