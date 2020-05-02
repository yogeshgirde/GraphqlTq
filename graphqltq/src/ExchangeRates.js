import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const EXCHANGE_RATE = gql`
  {
    rates(currency: "USD") {
      currency
      name
      rate
    }
  }
`;
const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATE);
  if (loading) return <p>Loading ....</p>;
  if (error) return <p>Error occurs......</p>;
  return data.rates.map(({ currency,name,rate }) => (
    <div key={currency}>
      <p className="deg">
          {name} {""}
        {currency} : {rate}
      </p>
    </div>
  ));
};

export default ExchangeRates;
