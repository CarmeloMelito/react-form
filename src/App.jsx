import React, { useState } from "react";

const post = [
  {
    id: 1,
    title: "titolo 1",
    description: "descrizione",
  },
  {
    id: 2,
    title: "titolo 2",
    description: "descrizione",
  },
  {
    id: 3,
    title: "titolo 3",
    description: "descrizione",
  },
];

function App() {
  console.log(post);

  return (
    <>
      <h1>Lista Articoli</h1>

      {/* MAP */}
      {post.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </article>
      ))}
    </>
  );
}

export default App;
