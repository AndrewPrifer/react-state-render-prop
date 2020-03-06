# React State Render Prop

A component for introducing state through render props. Especially useful for controlling arrays of controlled components. Written in TypeScript.

## Installation

```sh
yarn add react-state-render-prop
```

or

```sh
npm i react-state-render-prop
```

## Usage

```tsx
import { State } from '../';

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
```
