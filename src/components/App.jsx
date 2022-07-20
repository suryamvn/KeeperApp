import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setArray] = useState([]);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      setArray(notes);
    }
  }, []);

  function updateArray(text) {
    setArray((prevArray) => {
      return [...prevArray, text];
    });
  }

  function deleteNote(id) {
    setArray((pre) => {
      return pre.filter((note, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div>
      <Header />
      <CreateArea onAdd={updateArray} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
