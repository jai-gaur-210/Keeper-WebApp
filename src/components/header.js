import React from "react";
import { CgNotes } from "react-icons/cg"
function Header(){
    return <header>
        <CgNotes style={{display:"inline-block" , color: "white" , fontSize:"27px"}}/> <h1 style={{display:"inline-block"}}>Keeper</h1>
    </header>
}

export default Header;