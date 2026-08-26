export type TransactionType = "income" | "expense"

export type TransactionStatus = | "completed" | "pending" | "failed"

export type TransactionFilters = {
    search: string
    account: string
    category: string
    type: "all" | "income" | "expense"
    dateRange: "all" | "7d" | "30d" | "90d"
}

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