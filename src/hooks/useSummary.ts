import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce((acc, currVal) => {
    if(currVal.type === 'income') {
      acc.income += currVal.price
      acc.total += currVal.price
    } else {
      acc.expense += currVal.price
      acc.total -= currVal.price
    }

    return acc
  }, { income: 0, expense: 0, total: 0 })
  
  return summary
}