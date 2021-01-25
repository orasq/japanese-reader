const FormValidationReducer = (draft, action) => {
  switch (action.type) {
    case "TITLE_CHANGE":
      draft.title.hasErrors = false;
      draft.title.errorMessage = "";
      draft.title.value = action.value;
      // 50 characters limit
      if (action.value.trim().length > 50) {
        draft.title.hasErrors = true;
        draft.title.errorMessage = "Your title cannot exceed 50 characters";
      } else {
        draft.title.hasErrors = false;
        draft.title.errorMessage = "";
      }
      return;
    case "CHECK_TITLE":
      if (!action.value.trim()) {
        draft.title.hasErrors = true;
        draft.title.errorMessage = "You must provide a title";
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
        draft.cover.errorMessage = "You must upload an image";
      }
      return;
    case "TEXT_CHANGE":
      draft.text.hasErrors = false;
      draft.text.errorMessage = "";
      draft.text.value = action.value;
      return;
    case "CHECK_TEXT":
      if (!action.value.trim()) {
        draft.text.hasErrors = true;
        draft.text.errorMessage = "Don't forget to add a text to your new book";
      }
      return;
    case "SUBMIT_REQUEST":
      if (!draft.title.hasErrors && !draft.cover.hasErrors && !draft.text.hasErrors) {
        draft.requestCount++;
      }
      return;
    case "SAVE_REQUEST_STARTED":
      draft.isSaving = true;
      return;
    case "SAVE_REQUEST_FINISHED":
      draft.isSaving = false;
      return;
  }
};

export default FormValidationReducer;
