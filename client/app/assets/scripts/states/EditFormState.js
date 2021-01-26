const EditFormState = {
  bookId: {
    value: ""
  },
  title: {
    value: "",
    hasErrors: false,
    errorMessage: ""
  },
  cover: {
    value: "",
    hasErrors: false,
    errorMessage: ""
  },
  text: {
    value: "",
    hasErrors: false,
    errorMessage: ""
  },
  isSaving: false,
  saveRequestCount: 0,
  deleteRequestCount: 0,
  isFetching: true
};

export default EditFormState;
