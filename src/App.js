import React from "react";

import ToggleContent from "./components/toggleContent";
import Modal from "./components/modal";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <span>Click to reveal a secret:</span>
        <ToggleContent
          toggle={show => <button onClick={show}>Open</button>}
          content={hide => (
            <Modal>
              There is no spoon...
              <button onClick={hide}>Close</button>
            </Modal>
          )}
        />
      </div>
    </div>
  );
}

export default App;
