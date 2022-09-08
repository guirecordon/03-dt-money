import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form'

import * as z from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'expense']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
  const { control, register, handleSubmit, formState: { isSubmitting }, reset } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  const { createTransaction } = useContext(TransactionsContext)


  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {

    await createTransaction(data);

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type="text" placeholder='Descrição' required {...register('description')} />
          <input type="number" placeholder='Preço' required {...register('price', {
            valueAsNumber: true
          })} />
          <input type="text" placeholder='Categoria' required {...register('category')} />

          <Controller 
            control={control}
            name="type"
            render={({ field }) => {
              console.log(field)

              return (
                <TransactionType onValueChange={field.onChange} value={field.value}>
                  <TransactionTypeButton variant='income' value='income'>
                    <ArrowCircleUp size={24} />  
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton variant='expense' value='expense'>
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type='submit' disabled={isSubmitting}>Cadastrar</button>
        </form>

       
      </Content>
    </Dialog.Portal>
  )
}