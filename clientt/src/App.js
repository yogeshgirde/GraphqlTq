import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./Componentss/BookList";
import AddBook  from "./Componentss/AddBook";

//Appolo client Setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninjas Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
