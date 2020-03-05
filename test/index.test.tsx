import * as React from 'react';
import * as ReactDOM from 'react-dom';

import State from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <State initialState={0}>{value => <div>{value}</div>}</State>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
