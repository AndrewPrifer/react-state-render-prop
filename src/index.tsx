import * as React from 'react';

/**
 * A component for introducing state through render props. Especially useful for controlling arrays of controlled components.
 */
export const State = <Value,>({
  initialState,
  children,
}: StateProps<Value>) => {
  const [value, setValue] = React.useState<Value>(initialState);
  return <>{children(value, setValue)}</>;
};

export interface StateProps<Value> {
  /**
   * The initial value of the state.
   */
  initialState: Value;
  /**
   * A function that receives the state and a setter function.
   *
   * @param value The value of the state.
   * @param setState A function to set the state. Same as the function returned by useState().
   */
  children(
    value: Value,
    setState: React.Dispatch<React.SetStateAction<Value>>
  ): React.ReactNode;
}
