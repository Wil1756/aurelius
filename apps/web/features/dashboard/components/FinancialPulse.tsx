import { PiggyBank, Target, TrendingDown } from "lucide-react"

const insights = [
    {
        icon: TrendingDown,
        text: "You spent 18% less on dining this month",
        iconClassName: "bg-(--primary-soft) text-(--primary)"
    },
    {
        icon: PiggyBank,
        text: "Your savings rate increased to 31%",
        iconClassName: "bg-(--secondary-soft) text-(--secondary)"
    },
    {
        icon: Target,
        text: "You are on track to reach your emergency fund 47 days earlier",
        iconClassName: "bg-(--warning-soft) text-(--warning)"
    }
]

export function FinancialPulse() {
    return (
        <article className="min-w-0 overflow-hidden rounded-xl border border-(--border) bg-(--surface) p-4">
            <div>
                <h2 className="text-sm font-semibold text-(--foreground)">Financial Plan</h2>
                <p className="mt-1 text-xs text-(--muted)">A quick read on your financial worth</p>
            </div>
            <div className="mt-5 space-y-4">
                {insights.map((insight) => {
                    const Icon = insight.icon

                    return (
                        <div key={insight.text} className="flex items-start gap-3">
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${insight.iconClassName}`}>
                                <Icon size={15} strokeWidth={1.8}/>
                            </div>
                            <p className="pt-1 text-xs leading-5 text-(--muted)">{insight.text}</p>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}