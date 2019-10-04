import React from "react";

import ToggleContent from "./components/modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Learn React</p>
      </header>
      <div>
        <span>Click to reveal a secret:</span>
        <ToggleContent
          toggle={show => <button onClick={show}>Open</button>}
          content={hide => (
            <p>
              There is no spoon...
              <button onClick={hide}>Close</button>
            </p>
          )}
        />
      </div>
    </div>
  );
}

export default App;
