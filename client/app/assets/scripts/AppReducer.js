const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FLOATING_MESSAGE":
      return { ...state, floatingMessages: state.floatingMessages.concat(action.value) };
    case "LOAD_BOOKS":
      return { ...state, books: action.value };
    case "ADD_BOOK":
      return { ...state, books: [...state.books, action.value] };
  }
};

export default AppReducer;
