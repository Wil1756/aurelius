import type { Transaction } from "./transaction"
import { CreateTransactionInput } from "../validation/transaction-api-schema"

export type TransactionsResponse = {
    data: Transaction[]
}

export type TransactionResponse = {
    data: Transaction
}

export type DeleteTransactionResponse = {
    data: {
        id: string
        deleted: boolean
    }
}

export type ApiErrorResponse = {
    error: string
    details?: unknown
}