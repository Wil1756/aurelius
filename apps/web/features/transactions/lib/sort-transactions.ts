import type { Transaction, TransactionSortDirection, TransactionSortField } from "../types/transaction";


export function sortTransaction(
    transactions: Transaction[],
    field: TransactionSortField,
    direction: TransactionSortDirection
) {
    return [...transactions].sort((a, b) => {
        let comparison  = 0

        if(field === "date") {
            comparison = new Date(a.date).getTime()- new Date(b.date).getTime()
        }

        if(field === "amount") {
            comparison = a.amount - b.amount
        }

        if(field === "merchant") {
            comparison = a.merchant.localeCompare(b.merchant)
        }
        return direction === "asc" ? comparison : -comparison
    })
} 