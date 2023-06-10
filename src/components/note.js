import React from "react";

function Note(props) {

    function handleClick(){
        props.onDelete(props.id)
    }

    return <note>
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    </note>


}

export default Note;