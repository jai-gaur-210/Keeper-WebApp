import React from "react";
import { FaTrash } from "react-icons/fa"

function Note(props) {

    function handleClick() {
        props.onDelete(props.id)
    }

    return <note>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <FaTrash onClick={handleClick} style={{ontSize: '18px', position: "relative",float:" right",color: "#f5ba13",border: "none" ,cursor: "pointer",outline: "none" , margin:"3.5px"}} />
        </div>
    </note>


}

export default Note;