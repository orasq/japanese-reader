import { gql } from "apollo-boost";

const getAllBooksQuery = gql`
  {
    getAllBooks {
      id
      title
      cover
    }
  }
`;

const getBookQuery = gql`
  query($id: ID!) {
    getBook(id: $id) {
      id
      title
      text
      cover
    }
  }
`;

const getAllAuthorsQuery = gql`
  {
    getAllAuthors {
      id
      name
    }
  }
`;

const createBookMutation = gql`
  mutation($title: String!, $cover: String!, $text: String!) {
    createBook(title: $title, cover: $cover, text: $text) {
      id
      title
      text
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
  getAllAuthorsQuery,
  createBookMutation,
  deleteBookMutation,
  editBookMutation
};
