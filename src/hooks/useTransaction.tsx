import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../service/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  editTransaction: (transaction: TransactionEdit) => Promise<void>;
}

interface TransactionProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

type TransactionEdit = Pick<Transaction, "id">;

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  async function editTransaction(transactionEdit: TransactionEdit) {
    const response = await api.put(`/transactions${transactionEdit}`);
    const { updatedTransaction } = response.data;
    transactions.filter(it => transactionEdit.id !== it.id);
    setTransactions([...transactions, updatedTransaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction, editTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransaction() {
  const context = useContext(TransactionsContext);
  return context;
}
