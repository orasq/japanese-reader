const appState = {
  floatingMessages: [],
  finishedFilter: localStorage.getItem("finishedFilter") === "true",
  alphabeticalFilter: localStorage.getItem("alphabeticalFilter") === "true",
  searchKeyword: ""
};

export default appState;
