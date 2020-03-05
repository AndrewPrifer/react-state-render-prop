# React State Render Prop

## Installation

```sh
yarn add react-state-render-prop
```

or

```sh
npm i react-state-render-prop
```

## Usage

```ts
<State initialState={0}>
  {(state, setState) => (
    <button onClick={() => setState(state => state + 1)}>{state}</button>
  )}
</State>
```
