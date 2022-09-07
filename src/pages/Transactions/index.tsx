import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
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

          {transactions.map(({id, description, price, type, createdAt, category}) => {
            return (
              <tr key={id}>
              <td>{description}</td>
              <td>
                <PriceHighlight variant={type}>
                  {type === 'expense' && '- '}
                  {priceFormatter.format(price)}
                </PriceHighlight>
              </td>
              <td>{category}</td>
              <td>{dateFormatter.format(new Date(createdAt))}</td>
            </tr>
            )
          })}



        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  </div>
}