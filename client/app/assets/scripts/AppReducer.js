const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FLOATING_MESSAGE":
      return { ...state, floatingMessages: state.floatingMessages.concat(action.value) };
  }
};

export default AppReducer;
