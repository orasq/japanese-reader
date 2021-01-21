import { gql } from "@apollo/client";

const getAllBooksQuery = gql`
  {
    allBooks {
      id
      cover
      title
      finished
    }
  }
`;

const getBookQuery = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      title
      cover
      text
      finished
      bookmarkIndex
    }
  }
`;

const createBookMutation = gql`
  mutation($title: String!, $cover: String!, $text: String!, $finished: Boolean!) {
    createBook(title: $title, cover: $cover, text: $text, finished: $finished) {
      id
      title
      text
      finished
    }
  }
`;

const deleteBookMutation = gql`
  mutation($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

const finishedBookMutation = gql`
  mutation($id: ID!, $finished: Boolean!) {
    finishedBook(id: $id, finished: $finished) {
      id
      finished
    }
  }
`;

const addBookmarkMutation = gql`
  mutation($id: ID!, $bookmarkIndex: Int!) {
    addBookmark(id: $id, bookmarkIndex: $bookmarkIndex) {
      id
      bookmarkIndex
    }
  }
`;

const editBookMutation = gql`
  mutation($id: ID!, $title: String!, $cover: String!, $text: String!) {
    editBook(id: $id, title: $title, cover: $cover, text: $text) {
      id
    }
  }
`;

export {
  getAllBooksQuery,
  getBookQuery,
  createBookMutation,
  deleteBookMutation,
  editBookMutation,
  finishedBookMutation,
  addBookmarkMutation
};
