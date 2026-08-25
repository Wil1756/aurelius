import Link from "next/link";
import { financialGoals } from "../data/goals";

function formatEuro(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
    }).format(amount)
}

function getProgress(current: number, target: number) {
    return Math.min(Math.round((current / target) * 100), 100)
}

export function GoalsProgress() {
    return (
        <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-(--border) bg-(--surface) p-4">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-sm font-semibold text-(--foreground)">Goals Progress</h2>
                    <p className="mt-1 text-xs text-(--muted)">Track what you're working toward</p>
                </div>
                <Link 
                    href="/goals"
                    className="shrink-0 text-[11px] font-medium text-(--secondary) transition-colors hover:text-(--foreground)"
                >
                    View all
                </Link>
            </div>
            <div className="mt-5 flex flex-1 flex-col justify-center gap-7">
                {financialGoals.map((goal) => {
                    const progress = getProgress(
                        goal.current,
                        goal.target
                    )
                    return (
                        <div key={goal.id}>
                            <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                    <p className="truncate text-xs font-medium text-(--foreground)">{goal.name}</p>
                                    <p className="mt-1 text-[11px] text-(--muted)">
                                    {formatEuro(goal.current)} /{" "}
                                    {formatEuro(goal.target)}
                                    </p>
                                </div>
                                <span className="shrink-0 text-xs font-medium text-(--foreground)">{progress}%</span>
                            </div>
                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/6">
                                <div className="h-full rounded-full bg-(--primary) transition-[width] duration-500"
                                    style={{
                                        width: `${progress}%`
                                    }}
                                />
                            </div>
                            <p className="mt-2 text-[10px] text-[--muted]">Est. completion: {goal.completionDate}</p>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}