import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded,setExpanded]=useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(e) {
    const {name,value} = e.target;
    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value
      };
    });
  
  }

  function submitNote(event) {
    setNote({
      title:"",
      content:""
     })
    props.onAdd(note);
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded &&(<input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />)}
        <textarea
          name="content"
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddCircleOutlineIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;