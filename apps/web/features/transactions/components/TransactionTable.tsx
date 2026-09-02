import { ReceiptText } from "lucide-react";
import { TransactionRow } from "./TransactionRow";
import type { Transaction, TransactionSortDirection, TransactionSortField } from "../types/transaction";

type TTableProps = {
    transactions: Transaction[]
    sortField: TransactionSortField
    sortDirection: TransactionSortDirection
    onSortChange: (field: TransactionSortField) => void
    onTransactionSelect: (transaction: Transaction) => void
}

function SortHeader({label, field, activeField, direction, onSort}: {
    label: string
    field: TransactionSortField
    activeField: TransactionSortField
    direction: TransactionSortDirection
    onSort: (field: TransactionSortField) => void
}) {
    const active = field === activeField

    return (
        <button
            type="button"
            onClick={() => onSort(field)}
            className="inline-flex items-center gap-1 text-left text-[10px] font-medium uppercase tracking-[0.08em] text-(--muted) transition-colors hover:text-(--foreground)"
        >
            {label}
            {active && (
                <span aria-hidden="true"> 
                    {direction === "asc" ? "↑" : "↓"}
                </span>
            )}
        </button>
    )
}

export function TransactionTable({transactions, sortField, sortDirection, onSortChange, onTransactionSelect}: TTableProps) {
    const transactionCount = transactions.length

    return (
        <section aria-labelledby="transactions-list-heading"
            className="overflow-hidden rounded-xl border border-(--border) bg-(--surface)"
        >
            <div className="flex items-center justify-between gap-4 border-b border-(--border) px-4 py-3">
                <div>
                    <h2 id="transactions-list-heading"
                        className="text-sm font-semibold text-(--foreground)"
                    >All transactions</h2>
                    <p className="mt-1 text-[10px] text-(--muted)">{transactionCount} transactions</p>
                </div>
                <button type="button"
                    className="text-[11px] font-medium text-(--secondary) transition-colors hover:text-(--foreground)"
                >Export
                </button>
            </div>
            <div className="hidden border-b border-(--border) bg-white/1.5 px-4 py-2.5 md:grid md:grid-cols-[minmax(180px,1.5fr)_minmax(120px,1fr)_110px_115px_140px_105px] md:items-center md:gap-4">
                <SortHeader 
                    label="Merchant"
                    field="merchant"
                    activeField={sortField}
                    direction={sortDirection}
                    onSort={onSortChange}
                />
                <span className="text-[16px] font-medium uppercase tracking-[0.08em] text-(--muted)">Category</span>
                <SortHeader 
                    label="Amount"
                    field="amount"
                    activeField={sortField}
                    direction={sortDirection}
                    onSort={onSortChange}
                />
                <SortHeader 
                    label="Date"
                    field="date"
                    activeField={sortField}
                    direction={sortDirection}
                    onSort={onSortChange}
                />
            </div>
            {transactionCount > 0 ? (
                <div>
                    {transactions.map((transaction) => (
                        <TransactionRow 
                            key={transaction.id} 
                            transaction={transaction} 
                            onSelect={onTransactionSelect}
                        />
                    ))}
                </div>
            ): (
                <div className="flex min-h-48 flex-col items-center justify-center px-6 text-center">
                    <ReceiptText size={24} strokeWidth={1.5} className="text-(--muted)"/>
                    <p className="mt-3 text-sm font-medium text-(--secondary)">No transactions found</p>
                    <p className="mt-1 max-w-sm text-xs leading-5 text-(--muted)">Try changing your search or filter criteria</p>
                </div>
            )}
        </section>
    )
}