const AppReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FONT_SIZE":
      return { ...state, fontSize: state.fontSize === "big" ? "small" : "big" };
    case "ADD_FLOATING_MESSAGE":
      return { ...state, floatingMessages: state.floatingMessages.concat(action.value) };
    case "TOGGLE_FINISHED_FILTER":
      return { ...state, finishedFilter: !state.finishedFilter };
    case "TOGGLE_ALPHABETICAL_FILTER":
      return { ...state, alphabeticalFilter: !state.alphabeticalFilter };
    case "UPDATE_SEARCH_KEYWORD":
      return { ...state, searchKeyword: action.value };
    case "CHANGE_BOOKMARK":
      return { ...state, bookmarkIndex: action.value };
    case "TOGGLE_BOOKMARK_VISIBILITY":
      return { ...state, bookmarkVisible: !state.bookmarkVisible };
  }
};

export default AppReducer;
