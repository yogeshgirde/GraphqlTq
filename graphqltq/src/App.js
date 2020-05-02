import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import ExchangeRates from "./ExchangeRates";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "INR") {
//           currency
//           name
//           rate
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const App = () => {
  return (
    <div className="head">
      <ApolloProvider client={client}>
        <h1>Welcomes</h1>
        <div>
          <h2>My first Apollo app 🚀</h2>
          <ExchangeRates />
        </div>
      </ApolloProvider>
    </div>
  );
};

export default App;
