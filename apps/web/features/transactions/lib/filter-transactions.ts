import type { Transaction, TransactionsFilters } from "../types/transaction";

export function filterTransactions(transactions: Transaction[], filters: TransactionsFilters) {
    const search = filters.search.trim().toLowerCase()

    return transactions.filter((transaction) => {
        const matchesSearch =
        search === "" ||
        transaction.merchant.toLowerCase().includes(search) ||
        transaction.description.toLowerCase().includes(search) ||
        transaction.category.toLowerCase().includes(search)

        const matchesAccount = 
        filters.account === "all" ||
        transaction.account.toLowerCase() === filters.account.toLowerCase()

        const matchesCategory = 
        filters.category === "all" || 
        transaction.categoryId === filters.category

        const matchesType = 
        filters.type == "all" ||
        transaction.type === filters.type

        return (
            matchesSearch &&
            matchesAccount &&
            matchesCategory &&
            matchesType
        )
    })
}