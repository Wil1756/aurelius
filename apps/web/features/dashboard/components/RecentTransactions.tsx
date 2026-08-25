import Link from "next/link";
import { recentTransactions } from "../data/recent-transactions";
import { ArrowDownLeft, ArrowUpRight, ShoppingBag, Tv, WalletCards, Zap } from "lucide-react";

const merchantIcons = {
    Netflix: Tv,
    Salary: ArrowDownLeft,
    Amazon: ShoppingBag,
    Electricity: Zap
}

function formatAmount(amount: number) {
    const absoluteAmount = Math.abs(amount)

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(absoluteAmount)
}

export function RecentTransactions() {
    return (
        <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-(--border) bg-(--surface) p-4">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-sm font-semibold text-(--foreground)">Recent Transactions</h2>
                    <p className="mt-1 text-xs text-(--muted)">Your latest financial activity</p>
                </div>
                <Link 
                    href="/transactions"
                    className="shrink-0 text-[11px] font-medium text-(--secondary) transition-colors hover:text-(--foreground)"
                >
                    View all
                </Link>
            </div>
            <div className="mt-4 min-w-0">
                <div className="divide-y divide-(--border)">
                    {recentTransactions.map((transaction) => {
                        const Icon = 
                            merchantIcons[
                                transaction.merchant as keyof typeof merchantIcons
                            ]  ?? WalletCards

                        const isIncome = transaction.type === "income"

                        return (
                            <div 
                                key={transaction.id}
                                className="grid gap-3 px-2 py-3 md:grid-cols-[minmax(0,1.5fr)_minmax(100px,1fr)_110px_120px_125px] md:items-center"
                            >
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className=
                                        {`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                            isIncome
                                            ? "bg-(--primary-soft) text-(--primary)"
                                            : "bg-white/4 text-(--muted)"}
                                        `}
                                    >
                                        <Icon size={15} strokeWidth={1.8}/>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="truncate text-xs font-medium text-(--foreground)">{transaction.merchant}</p>
                                        <p className="mt-0.5 truncate text-[10px] text-(--muted) md:hidden">{transaction.category}</p>
                                    </div>
                                </div>
                                <span className="hidden truncate text-[11px] text-(--muted) md:block">{transaction.category}</span>
                                <span className={`text-xs font-medium ${isIncome ? "text-(--primary)" : "text-(--foreground)"}`}>
                                    {isIncome ? "+" : "-"} 
                                    {formatAmount(transaction.amount)}
                                </span>
                                <span className="hidden text-[11px] text-(--muted) md:block">{transaction.date}</span>
                                <div className="hidden items-center gap-2 md:flex">
                                    <WalletCards size={13} strokeWidth={1.7} className="shrink-0 text-(--muted)"/>
                                    <span className="truncate text-[11px] text-(--muted)">{transaction.account}</span>
                                </div>
                                <div className="flex items-center gap-1 text-[10px] text-(--muted) md:hidden">
                                    {isIncome ? (
                                        <ArrowUpRight size={11}/>
                                    ): (
                                        <ArrowDownLeft size={11}/>
                                    )}
                                    <span>{transaction.date}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </article>
    )
}