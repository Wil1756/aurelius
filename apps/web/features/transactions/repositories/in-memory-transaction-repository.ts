import type { Transaction } from "../types/transaction";
import type { CreateTransactionInput } from "../validation/transaction-api-schema";
import type { TransactionRepository } from "./transaction-repository";

const initialTransactions: Transaction[] = []

export class InMemoryTransactionRepository
    implements TransactionRepository
    {
        private transactions: Transaction[]

        constructor(
            transactions: Transaction[]= initialTransactions,
        ){
            this.transactions = [...transactions]
        }

        async getTransactions(): Promise<Transaction[]> {
            return [...this.transactions]
        }

        async getTransactionById(id: string): Promise<Transaction | null> {
            return (
                this.transactions.find(
                    (transaction) => transaction.id === id,
                ) ?? null
            )
        }

        async createTransaction(
            input: CreateTransactionInput
        ): Promise<Transaction> {
            const transaction: Transaction = {
                id: crypto.randomUUID(),
                merchant: input.merchant,
                amount: input.amount,
                category: input.category,
                categoryId: input.category.toLowerCase().replace(/\s+/g, "-"),
                date: input.date,
                description: input.description,
                type: "expense",
                status: "completed",
                account: "Main Account",
                accountLastFour: "0000",
                currency: "EUR"
            }

            this.transactions.push(transaction)

            return transaction
        }

        async updateTransaction(
            id: string,
            input: CreateTransactionInput
        ): Promise<Transaction | null> {
            const index = this.transactions.findIndex(
                (transaction) => transaction.id === id
            )

            if (index === -1) {
                return null
            }

            const existing = this.transactions[index]

            const updated: Transaction = {
                ...existing,
                merchant: input.merchant,
                amount: input.amount,
                category: input.category,
                categoryId: input.category.toLocaleLowerCase().replace(/\s+/g, "-"),
                date: input.date,
                description: input.description
            }

            this.transactions[index] = updated

            return updated
        }

        async deleteTransaction(
            id: string
        ): Promise<boolean> {
            const initialLength = this.transactions.length

            this.transactions = this.transactions.filter(
                (transaction) => transaction.id !== id
            )
            return this.transactions.length < initialLength
        }

    }