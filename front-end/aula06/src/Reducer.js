export default function reducer(state, action) {
  if (typeof state === "undefined") {
    state = { n: false };
  }

  if (action.type === "Opossite") {
    state = { n: !state.n };
  }

  if (action.type === "OpossiteState") {
    state = { n: !state.n };
    if (state.s === action.payload) {
      alert("Se ha guardado la selecciòn de activar las notificaciones");
    } else {
      alert("Se ha guardado la selecciòn de desactivar las notificaciones");
    }
  }

  if (action.type === "isActivated") {
    if (state.n) {
      return "Activas";
    } else {
      return "Inactivas";
    }
  }

  if (action.type === "DesativeState") {
    if (state.n) {
      return "Desactivar notificaciones";
    } else {
      return "Activar notificaciones";
    }
  }

  if (action.type === "SAVE_SETTINGS") {
    let n = action.n;
    return { ...state, n };
  } else {
    return state;
  }
}
