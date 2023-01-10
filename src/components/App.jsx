import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [currItems, setitems] = useState([]);

  function addNote(currTitle, currContent) {
    console.log(currTitle);
    console.log(currContent);
    setitems((prevValue) => {
      return [...prevValue, { title: currTitle, content: currContent }];
    });
  }

  function deleteNote(id) {
    currItems.filter((item, index) => {
      return index !== id;
    });

    console.log("deleted");
  }

  return (
    <div>
      <Header />
      <CreateArea toAdd={addNote} />
      {currItems.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            deleteClick={deleteNote}
            title={item.title}
            content={item.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
