import { ReceiptText } from "lucide-react";
import { transactions } from "../data/tansaction";
import { TransactionsRow } from "./TransactionRow";
import type { Transaction } from "../types/transaction";

type TTableProps = {
    transactions: Transaction[]
}

export function TransactionTable({transactions}: TTableProps) {
    const transactionCount = transactions.length

    return (
        <section aria-labelledby="transactions-list-heading"
            className="overflow-hidden rounded-xl border border-(--border) bg-(--surface)"
        >
            <div className="flex items-center justify-between gap-4 border-b border-(--border) px-4 py-3">
                <div>
                    <h2 id="transactions-list-heeading"
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
                <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-(--muted)">Merchant</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-(--muted)">Category</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-(--muted)">Amount</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-(--muted)">Date</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-(--muted)">Account</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-(--muted)">Status</span>
            </div>
            {transactionCount > 0 ? (
                <div>
                    {transactions.map((transaction) => (
                        <TransactionsRow key={transaction.id} transaction={transaction}/>
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