import { useContext, useState } from "react";
import { TransactionsContext } from "../../hooks/useTransaction";
import { Container, EmptyTable } from "./styles";

import empty from "../../assets/empty.svg";

import edit from "../../assets/edit.svg";

interface TransactionsProps {
  id: number;  
};

export function TransactionTable() {
  const { transactions, editTransaction } = useContext(TransactionsContext);

  function onRemoveItem(id: TransactionsProps) {
    return editTransaction(id);
  }

  return (
    <Container>
      {transactions.length === 0 ? (
        <EmptyTable>
          <img src={empty} alt="lista vazia" /> 
          <p>Lista vazia</p> 
        </EmptyTable>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Preço</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createdAt)
                    )}
                   
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Container>
  );
}
