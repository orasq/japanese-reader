const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = graphql;

// models
const Book = require("../models/book");

// OBJECT TYPES

const BookType = new GraphQLObjectType({
  name: "book",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    cover: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    finished: {
      type: GraphQLBoolean
    },
    bookmarkIndex: {
      type: GraphQLInt
    }
  })
});

// ROOT QUERY

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Book.findById(args.id);
      }
    },
    allBooks: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({});
      }
    }
  }
});

// MUTATIONS

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createBook: {
      type: BookType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        cover: { type: new GraphQLNonNull(GraphQLString) },
        text: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        /* Book() = mongoose model */
        let book = new Book({
          title: args.title,
          cover: args.cover,
          text: args.text
        });
        return book.save();
      }
    },
    deleteBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Book.findByIdAndDelete(args.id);
      }
    },
    editBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        cover: { type: new GraphQLNonNull(GraphQLString) },
        text: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return Book.findByIdAndUpdate(args.id, {
          title: args.title,
          cover: args.cover,
          text: args.text
        });
      }
    },
    finishedBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        finished: { type: new GraphQLNonNull(GraphQLBoolean) }
      },
      resolve(parent, args) {
        return Book.findByIdAndUpdate(args.id, {
          finished: args.finished
        });
      }
    },
    addBookmark: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        bookmarkIndex: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        return Book.findByIdAndUpdate(args.id, {
          bookmarkIndex: args.bookmarkIndex
        });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
