import React from "react";
// import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import jai from "./notes"



function App() {
  return (
    <div >
      <Header />
      {jai.map((props) =>(
        <Note
          key = {props.key}
          title = {props.title}
          content = {props.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
