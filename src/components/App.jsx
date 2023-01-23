import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes( preNote =>[...preNote, note]);
  }
function deleteNote(id){
setNotes(preNote =>{
  return preNote.filter((item,index)=>{
    return index !== id;
    console.log("dleete");
  });
});
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((item,index) => {
        return <Note 
key={index}
id={index}
        title={item.title} 
        content={item.content} 
        onDelete = {deleteNote}
        />;
      })}
      <Footer />
    </div>
  );
}

export default App;
