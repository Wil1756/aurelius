import { FinancialPulse } from "./FinancialPulse";
import { NetWorthTrend } from "./NetWorthTrend";
import { SpendingOverview } from "./SpendingOverview";

export function AnalyticsOverview() {
    return (
        <section aria-labelledby="analytics-overview-heading" className="mb-4">
            <h2 id="analytics-overview-heading" className="sr-only">Financial Analytics Overview</h2>
            <div className="grid min-w-0 grid-cols-1 gap-3  xl:grid-cols-12">
                <div className="min-w-0 xl:col-span-5">
                    <NetWorthTrend />
                </div>
                <div className="min-w-0 xl:col-span-3">
                    <SpendingOverview/>
                </div>
                <div className="min-w-0 xl:col-span-4">
                    <FinancialPulse/>
                </div>
            </div>
        </section>
    )
}