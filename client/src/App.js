// App.js
import React, { useState } from 'react';
import TextAdventureGame from './components/TextAdventureGame';
import ChatRoom from './ChatRoom';

const App = () => {
  return (
    <div>
      <h3>Escape C13, your future depends on it!</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ChatRoom />
          <TextAdventureGame />
        </div>      
      </div>
    </div>
  );
};

export default App;

