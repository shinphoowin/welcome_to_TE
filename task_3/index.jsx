import { useState, Fragment, memo, useMemo } from "react";

const MainComponent = ({
  user = { name: "unknown", age: null }, // default value for `props.user`
}) => {
  const [_, update] = useState(); // change state for force component rerendering and checking the result

  return (
    <Fragment>
      <button onClick={update}>update MainComponent</button>
      <ChildComponent user={useMemo(() => user, [])} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
  return (
    <div>
      user name: {name}, user age: {age}
    </div>
  );
});
