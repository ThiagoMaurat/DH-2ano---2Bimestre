import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="MainContent">
      <h1>
        ¿Desesa recibir notificaciones sobre la serie Rick y Morty en su email?
      </h1>
      <p>
        Status: <b>{dispatch({ type: "isActivated" })}</b>
      </p>
      <br />
      <button onClick={dispatch({ type: "Opossite" })}>
        {dispatch({ type: "DesativeState" })}
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={dispatch({ type: "OpossiteState" })}
        className="SaveButton"
      >
        Guardar
      </button>
    </div>
  );
};

const state = (state) => {
  return {
    n: state.n,
  };
};

const mdtp = (dispatch) => {
  return {
    s: (ss) => dispatch({ type: "SAVE_SETTINGS", ss }),
  };
};

export default connect(state, mdtp)(App);
