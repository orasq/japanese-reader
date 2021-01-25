const appState = {
  fontSize: localStorage.getItem("fontSize"),
  bookmarksVisible: false,
  bookmarkIndex: 4,
  floatingMessages: [],
  finishedFilter: localStorage.getItem("finishedFilter") === "true",
  alphabeticalFilter: localStorage.getItem("alphabeticalFilter") === "true",
  searchKeyword: ""
};

export default appState;
