import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";



export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return <div>
    <Header />
    <Summary />

    <TransactionsContainer>
      <SearchForm />
      <TransactionsTable>
        <tbody>

          {transactions.map(({id, description, price, type, createdAt}) => {
            return (
              <tr key={id}>
              <td>{description}</td>
              <td><PriceHighlight variant={type}>{price}</PriceHighlight></td>
              <td>{type}</td>
              <td>{createdAt}</td>
            </tr>
            )
          })}



        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  </div>
}