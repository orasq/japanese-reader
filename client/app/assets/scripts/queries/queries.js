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
  mutation($title: String!, $cover: String, $text: String!) {
    createBook(title: $title, cover: $cover, text: $text) {
      id
      title
      text
    }
  }
`;

export { getAllBooksQuery, getBookQuery, getAllAuthorsQuery, createBookMutation };
