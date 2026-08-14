import { MetricCard } from "./MetricCard";

export function FinancialMetrics() {
    return (
        <section>
            <MetricCard
                label="Net Worth"
                value="€84,420.70"
                change="+8.42% this month"
            />

            <MetricCard
                 label="Cash Flow"
                 value="€2,840.00"
                 change="+14.2% this month"
            />

            <MetricCard
                label="Savings Rate"
                value="31.4%"
                change="+4.2% vs last month"
            />

            <MetricCard
                label="Available Balance"
                value="€8,920.00"
                change="+€1,240 vs last month"
            />
        </section>
    )
}