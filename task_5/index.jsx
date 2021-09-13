import { useSelector, useDispatch } from "react-redux";

// our redux state
reduxState = {
  isOnline: true,
  userData: {
    name: "Peter",
    surname: "Pen",
  },
};

const MainComponent = () => {
  const userData = useSelector((reduxState) => reduxState.userData); // subscribe and get only userData object
  const isOnline = useSelector((reduxState) => reduxState.isOnline);

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch({ type: "fetchdata", payload: reduxState.useData })
        }
      >
        fetch userData from store
      </button>
      ;
      <button
        onClick={() => dispatch({ type: "", payload: reduxState.isOnline })}
      >
        isOnline state from store
      </button>
    </div>
  );
};
