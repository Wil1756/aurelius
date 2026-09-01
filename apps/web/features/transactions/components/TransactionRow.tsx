import { ArrowDownLeft, ArrowUpRight, CheckCircle2, CircleX, Clock3, CreditCard } from "lucide-react";
import type { Transaction } from "../types/transaction";

type TRowProps = {
    transaction: Transaction
    onSelect: (transaction: Transaction) => void
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(new Date(`${date}T00:00:00`))
}

function formatAmount(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2
    }).format(amount)
}

const statusConfig = {
    completed: {
        label: "Completed",
        icon: CheckCircle2,
        className: "text-(--primary)"
    },
    pending: {
        label: "Pending",
        icon: Clock3,
        className: "text-(--warning)"
    },
    failed: {
        label: "Failed",
        icon: CircleX,
        className: "text-(--danger)"
    }
}

export function TransactionRow({transaction, onSelect}: TRowProps) {
    const isIncome = transaction.type === "income"
    const status = statusConfig[transaction.status]
    const StatusIcon = status.icon

    return (
        <button type="button" aria-label={`view details for ${transaction.merchant}`}
            onClick={() => onSelect(transaction)}
            className="block w-full border-b border-(--border) px-4 py-3 text-left transition-colors hover:bg-white/2.5 last:border-b-0">
            <div className="hidden min-w-0 grid-cols-[minmax(180px,1.5fr)_minmax(120px,1fr)_110px_115px_140px_105px] items-center gap-4 md:grid">
                <div className="flex min-w-0 items-center gap-3">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg 
                        ${ isIncome ? "bg-(--primary-soft) text-(--primary)" : "bg-white/4 text-(--muted)"}`}>
                        {isIncome ? (
                            <ArrowDownLeft size={15} strokeWidth={1.8}/>
                        ) : (
                            <ArrowUpRight size={15} strokeWidth={1.8}/>
                        )}
                    </div>
                    <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-(--foreground)">{transaction.merchant}</p>
                        <p className="mt-0.5 truncate text-[10px] text-(--muted)">{transaction.description}</p>
                    </div>
                </div>
                <span className="truncate text-[11px] text-(--muted)">{transaction.category}</span>
                <span className={`text-xs font-semibold ${isIncome ? "text-(--primary)" : "text-(--foreground)"}`}>
                    {isIncome ? "+" : "-"} {formatAmount(transaction.amount)}
                </span>
                <span className="truncate text-[11px] text-(--muted)">{formatDate(transaction.date)}</span>
                <div className="flex min-w-0 items-center gap-2">
                    <CreditCard size={13} strokeWidth={1.7} className="shrink-0 text-(--muted)"/>
                    <span className="truncate text-[11px] text-(--muted)">{transaction.account} .... {transaction.accountLastFour}</span>
                </div>
                <div className={`flex items-center gap-1.5 text-[10px] font-medium ${status.className}`}>
                    <StatusIcon size={13} strokeWidth={1.8}/>
                    <span>{status.label}</span>
                </div>
            </div>
            <div className="flex min-w-0 flex-col gap-3 md:hidden">
                <div className="flex min-w-0 items-start justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg 
                            ${isIncome ? "bg-(--primary-soft) text-(--primary)" : "bg-white/4 text-(--muted)"}`}>
                            <div>
                                {isIncome ? (
                                    <ArrowDownLeft size={16} strokeWidth={1.8}/>
                                ) : (
                                    <ArrowUpRight size={16} strokeWidth={1.8}/>
                                )}
                            </div>
                            <div className="min-w-0">
                                <p className="truncate text-xs font-medium text-(--foreground)">{transaction.merchant}</p>
                                <p className="mt-0.5 truncate text-[10px] text-(--muted)">{transaction.category}</p>
                            </div>
                        </div>
                    </div>
                    <span className={`shrink-0 text-xs font-semibold ${isIncome ? "text-(--primary)" : "text-(--foreground)"}`}>
                        {isIncome ? "+" : "-"} {formatAmount(transaction.amount)}
                    </span>
                </div>
                <p className="truncate text-[10px] text-(--muted)">{transaction.description}</p>
                <div className="flex items-center justify-between gap-3">
                    <span className="truncate text-[10px] text-(--muted)">
                        {formatDate(transaction.date)} . {transaction.account} ....{" "} {transaction.accountLastFour}
                    </span>
                    <span className={`flex shrink-0 items-center gap-1 text-[10px] font-medium ${status.className}`}>
                        <StatusIcon size={12} strokeWidth={1.8}/>
                        {status.label}
                    </span>
                </div>
            </div>
        </button>
    )
}