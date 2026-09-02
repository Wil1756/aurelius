import type { Transaction } from "./transaction"

export type TransactionsResponse = {
    data: Transaction[]
}

export type TransactionResponse = {
    data: Transaction
}

export type ApiErrorResponse = {
    error: string
    details?: unknown
}