import React from 'react';
import { useState } from 'react';

import './style.css';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="multiselect">
        <div className="selectBox" onClick={() => setShow(!show)}>
          <select className="select">
            <option></option>
          </select>
        </div>
        {show ? (
          <div className="checkBoxes">
            <label for="one">
              <input type="checkbox" className="checkbox " id="one" />
              First checkbox
            </label>
            <label for="two">
              <input type="checkbox" id="two" className="checkbox" />
              Second checkbox{' '}
            </label>
            <label for="three">
              <input type="checkbox" id="three" className="checkbox" />
              Third checkbox
            </label>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default App;
