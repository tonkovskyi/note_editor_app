import { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuidv4(),
      title: "Untitled Note",
      body: "",
    };
    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <div className="app-border">
        <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main
          notes={notes}
          onDeleteNote={onDeleteNote}
          activeNote={getActiveNote()}
          onUpdateNote={onUpdateNote}
        />
      </div>
    </div>
  );
}

export default App;
