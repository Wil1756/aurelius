export type TransactionType = "income" | "expense"

export type TransactionStatus = | "completed" | "pending" | "failed"

export type Transaction = {
    id: string
    merchant: string
    description: string
    category: string
    categoryId: string
    amount: number
    currency: "EUR"
    type: TransactionType
    status: TransactionStatus
    date: string
    account: string
    accountLastFour: string
}