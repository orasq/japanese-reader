const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FLOATING_MESSAGE":
      return { ...state, floatingMessages: state.floatingMessages.concat(action.value) };
    case "TOGGLE_FINISHED_FILTER":
      return { ...state, finishedFilter: !state.finishedFilter };
    case "TOGGLE_ALPHABETICAL_FILTER":
      return { ...state, alphabeticalFilter: !state.alphabeticalFilter };
    case "UPDATE_SEARCH_KEYWORD":
      return { ...state, searchKeyword: action.value };
  }
};

export default AppReducer;
