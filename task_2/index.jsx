import { useState, Fragment, memo, useCallback } from "react";

const MainComponent = () => {
  const [count, update] = useState(0); // change state for force component rerendering and checking the result

  const makeLog = () => console.log("hi from MainComponent"); // function to make a log from MainComponent
  const memoMakeLog = useCallback(makeLog, []);
  return (
    <Fragment>
      <button onClick={() => update(count + 1)}>update MainComponent</button>
      <ChildComponent makeLog={memoMakeLog} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
  <button onClick={makeLog}>click me</button>
));
