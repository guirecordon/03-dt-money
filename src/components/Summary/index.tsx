import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
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

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#27AE60"  />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68"  />
        </header>
        <strong>{priceFormatter.format(summary.expense)}</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"  />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}