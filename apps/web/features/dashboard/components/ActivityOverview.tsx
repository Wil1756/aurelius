import { GoalsProgress } from "./GoalsProgress";
import { RecentTransactions } from "./RecentTransactions";

export function ActivityOverview() {
    return (
        <section aria-labelledby="activity-overview-heeading" className="mb-6">
            <h2 id="activity-overview-heading" className="sr-only">Recent financial activity and goals</h2>
            <div className="grid min-w-0 grid-cols-1 gap-3 xl:grid-cols-12">
                <div className="min-w-0 xl:col-span-8">
                    <RecentTransactions/>
                </div>
                <div className="min-w-0 xl:col-span-4">
                    <GoalsProgress/>
                </div>
            </div>
        </section>
    )
}