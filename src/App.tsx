import React, { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionsProvider } from "./hooks/useTransaction";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setisNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setisNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setisNewTransactionModalOpen(false);
  }

  return (
    <>
      <TransactionsProvider>
        <Header onOpenTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <TransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </TransactionsProvider>
    </>
  );
}
