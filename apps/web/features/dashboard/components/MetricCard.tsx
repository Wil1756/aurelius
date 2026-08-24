import type { ReactNode } from "react"


interface MetricCardProps {
    label: string
    value: string
    change: string
    changeLabel: string
    icon: ReactNode
    iconClassName: string
    trend?: "positive" | "neutral"
}

export function MetricCard({
    label, value, change, icon ,changeLabel, iconClassName, trend="positive"
}: MetricCardProps) {
    return (
    <article className="group relative overflow-hidden rounded-xl border border-(--border) bg-(--surface) p-4 transition-colors duration-200 hover:border-white/10 hover:bg-(--surface-elevated)">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-lineaer-to-r from-transparent via-white/10 to-transparent"/>
        {/* metric reading */}
        <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${iconClassName}`}>{icon}</div>
                <p className="truncate text-xs font-medium text-(--muted)">{label}</p>
            </div>
        </div>

        {/* value */}
        <p className="mt-4 text-[22px] font-semibold tracking-light text-(--foreground)">{value}</p>

        {/* change */}
        <div className="mt-2 flex items-center gap-1.5">
            <span className={trend=== "positive" ? "text-xs font-semibold text-(--primary)" : "text-xs font-semibold text-(--muted)"}>{change}</span>
            <span className="text-[11px] text-(--muted)">{changeLabel}</span>
        </div>
    </article>
    )
}