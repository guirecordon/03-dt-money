import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface TransactionsProps {
  id: number
  description: string
  type: "income" | "expense"
  category: string
  price: number
  createdAt: Date
}


export function Transactions() {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])


  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions');
    const data = await response.json()
    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions() 
  }, [])

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