import { Card } from "../../ui/Card";

interface MetricCardProps {
    label: string
    value: string
    change: string
}

export function MetricCard ({label,value,change}: MetricCardProps) {
    return (
        <Card>
            <div className="space-y-3">
                <p className="text-sm text-[var(--muted)]">
                    {label}
                </p>
                <p className="text-2xl font-semibold tracking-tight">{value}</p>
                <p className="text-sm font-medium text-[var(--primary)]">{change}</p>
            </div>
        </Card>
    )
}