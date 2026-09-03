import type { Transaction } from "../types/transaction";
import type { CreateTransactionInput } from "../validation/transaction-api-schema";

export interface TransactionRepository{
    getTransactions(): Promise<Transaction[]>

    getTransactionById(
        id: string
    ): Promise<Transaction| null>

    createTransaction(
        input: CreateTransactionInput
    ): Promise<Transaction>

    updateTransaction(
        id: string,
        input: CreateTransactionInput
    ): Promise<Transaction| null>

    deleteTransaction(
        id: string,
    ): Promise<boolean>
}