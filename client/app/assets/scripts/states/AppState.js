const appState = {
  fontSize: localStorage.getItem("fontSize"),
  bookmarksVisible: false,
  bookmarkIndex: 4,
  floatingMessages: [],
  searchKeyword: "",
  finishedFilter: localStorage.getItem("finishedFilter") === "true",
  alphabeticalFilter: localStorage.getItem("alphabeticalFilter") === "true"
};

export default appState;
