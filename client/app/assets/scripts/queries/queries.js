import { gql } from "apollo-boost";

const getBooksQuery = gql`
  {
    getAllBooks {
      id
      title
    }
  }
`;

const getAuthorsQuery = gql`
  {
    getAllAuthors {
      id
      name
    }
  }
`;

const createBookMutation = gql`
mutation {
  createBook({title: "", cover: "", text: ""}){
    title,
    text
  }
}
`;

export { getBooksQuery, getAuthorsQuery, createBookMutation };
