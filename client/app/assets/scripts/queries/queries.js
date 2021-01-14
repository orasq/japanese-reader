import { gql } from "apollo-boost";

const getAllBooksQuery = gql`
  {
    getAllBooks {
      id
      title
    }
  }
`;

const getBookQuery = gql`
  query($id: ID!) {
    getBook(id: $id) {
      title
      text
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
  mutation($title: String!, $cover: String, $text: String!) {
    createBook(title: $title, cover: $cover, text: $text) {
      title
      text
    }
  }
`;

export { getAllBooksQuery, getBookQuery, getAllAuthorsQuery, createBookMutation };
