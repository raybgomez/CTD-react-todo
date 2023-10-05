import React from 'react';

const todoList = [
  {
    id: '0',
    title: 'My Hero Academia',
  },
  {
    id: '1',
    title: 'Attack on Titan',
  },
  {
    id: '2',
    title: 'Demon Slayer',
  },
];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Anime to watch List</h1>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
