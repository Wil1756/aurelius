import { ArrowDownLeft, ArrowUpRight, Wallet } from "lucide-react"

const summaryItems = [
    {
        label: "Money In",
        value: "€6,050.00",
        detail: "This month",
        icon: ArrowDownLeft,
        iconClassName: "bg-(--primary-soft) text-(--primary)",
      },
      {
        label: "Money Out",
        value: "€2,180.59",
        detail: "This month",
        icon: ArrowUpRight,
        iconClassName: "bg-(--danger-soft) text-(--danger)",
      },
      {
        label: "Net Activity",
        value: "+€3,869.41",
        detail: "This month",
        icon: Wallet,
        iconClassName: "bg-(--secondary-soft) text-(--secondary)",
      },
]

export function TransactionSummary() {
    return (
        <section aria-label="Transaction summary">
            {summaryItems.map((item) => {
                const Icon = item.icon

                return (
                    <article key={item.label}
                        className="min-w-0 mt-3 rounded-xl border border-(--border) bg-(--surface) p-4"
                    >
                        <div className="flex items-center justify-between">
                            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.iconClassName}`}>
                                <Icon size={15} strokeWidth={1.8}/>
                            </div>
                            <span className="text-[10px] text-(--muted)">{item.detail}</span>
                        </div>
                        <p className="mt-4 text-[11px] text-(--muted)">{item.label}</p>
                        <p className="mt-1 text-lg font-semibold tracking-tight text-(--foreground)">{item.value}</p>
                    </article>
                )
            })}
        </section>
    )
}