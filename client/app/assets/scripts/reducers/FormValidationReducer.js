const FormValidationReducer = (draft, action) => {
  switch (action.type) {
    case "TITLE_CHANGE":
      draft.title.hasErrors = false;
      draft.title.errorMessage = "";
      draft.title.value = action.value;
      // 50 characters limit
      if (action.value.trim().length > 30) {
        draft.title.hasErrors = true;
        draft.title.errorMessage = "Your title cannot exceed 30 characters";
      } else {
        draft.title.hasErrors = false;
        draft.title.errorMessage = "";
      }
      return;
    case "CHECK_TITLE":
      if (!action.value.trim()) {
        draft.title.hasErrors = true;
        draft.title.errorMessage = "Please provide a title";
      }
      return;
    case "COVER_CHANGE":
      draft.cover.hasErrors = false;
      draft.cover.errorMessage = "";
      draft.cover.value = action.value;
      return;
    case "CHECK_COVER":
      if (!action.value) {
        draft.cover.hasErrors = true;
        draft.cover.errorMessage = "Please upload an image";
      }
      return;
    case "TEXT_CHANGE":
      draft.text.hasErrors = false;
      draft.text.errorMessage = "";
      draft.text.value = action.value;
      // 10 000 characters limit
      if (action.value.trim().length > 10000000) {
        draft.text.hasErrors = true;
        draft.text.errorMessage = "Your text cannot exceed 10 000 000 characters";
      } else {
        draft.text.hasErrors = false;
        draft.text.errorMessage = "";
      }
      return;
    case "CHECK_TEXT":
      if (!action.value.trim()) {
        draft.text.hasErrors = true;
        draft.text.errorMessage = "Don't forget to add a text to your new book";
      }
      return;
    case "SUBMIT_REQUEST":
      if (!draft.title.hasErrors && !draft.cover.hasErrors && !draft.text.hasErrors) {
        draft.saveRequestCount++;
      }
      return;
    case "DELETE_REQUEST":
      draft.deleteRequestCount++;
      return;
    case "SAVE_REQUEST_STARTED":
      draft.isSaving = true;
      return;
    case "SAVE_REQUEST_FINISHED":
      draft.isSaving = false;
      return;
    case "FETCH_FINISHED":
      draft.bookId.value = action.value.bookId;
      draft.title.value = action.value.title;
      draft.cover.value = action.value.cover;
      draft.text.value = action.value.text;
      draft.isFetching = false;
      return;
  }
};

export default FormValidationReducer;
