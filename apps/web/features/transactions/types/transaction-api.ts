import type { Transaction } from "./transaction"
import { CreateTransactionInput } from "../validation/transaction-api-schema"

export type TransactionResponse = {
    data: Transaction[]
}

export type CreateTransactionResponse = {
    data: CreateTransactionInput
}

export type ApiErrorResponse = {
    error: string
    details?: unknown
}