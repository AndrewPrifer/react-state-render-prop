import 'react-app-polyfill/ie11';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import State from '../';

const App = () => {
  return (
    <div>
      <State initialState={0}>
        {(state, setState) => (
          <button onClick={() => setState(state => state + 1)}>{state}</button>
        )}
      </State>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
