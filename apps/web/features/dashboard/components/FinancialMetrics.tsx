import { CircleDollarSign, PiggyBank, Wallet, WalletCards } from "lucide-react"
import { MetricCard } from "./MetricCard"

const metrics = [
    {
        label:"Net Worth",
        value: "€84,420.70",
        change:"+8.42%",
        changeLabel:"this month",
        icon:<Wallet size={15} strokeWidth={1.9}/>,
        iconClassName:"bg-(--primary-soft) text-(--primary)"
    },
    {
        label:"Cash Flow",
        value:"€2,840.00",
        change:"+14.2%",
        changeLabel:"this month",
        icon:<CircleDollarSign size={15} strokeWidth={1.9}/>,
        iconClassName:"bg-(--primary-soft) text-(--primary)"
    },
    {
        label:"Savings Rate",
        value:"31.4%",
        change:"+4.2%",
        changeLabel:"vs last month",
        icon:<PiggyBank size={15} strokeWidth={1.9}/>,
        iconClassName:"bg-(--seconadry-soft) text-(--secondary)",
    },
    {
        label:"Avaiilable balance",
        value:"€8,920.00",
        change:"+€1,240",
        changeLabel:"vs last month",
        icon:<WalletCards size={15} strokeWidth={1.9}/>,
        iconClassName:"bg-(--warning-soft) text-(--warning)"
    }
]

export function FinancialMetrics() {
    return (
        <section aria-labelledby="financial-snapshot-heading" className="mb-4">
            <h2 id="financial-snapshot-heading" className="sr-only">Financial snapshot</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((metric)=> (
                <MetricCard 
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    change={metric.change}
                    changeLabel={metric.changeLabel}
                    icon={metric.icon}
                    iconClassName={metric.iconClassName}
                />
            ))}</div>
        </section>
    )
}