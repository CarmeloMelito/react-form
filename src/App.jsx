import React, { useState } from "react";
import ArticleList from "./Article";

const post = [
  {
    id: 1,
    title: "titolo",
    description: "descrizione",
  },
  {
    id: 2,
    title: "titolo",
    description: "descrizione",
  },
  {
    id: 3,
    title: "titolo",
    description: "descrizione",
  },
  {
    id: 4,
    title: "titolo",
    description: "descrizione",
  },
];

function App() {
  console.log(post);
  return (
    <>
      <h1>Lista Articoli</h1>
    </>
  );
}

export default App;
