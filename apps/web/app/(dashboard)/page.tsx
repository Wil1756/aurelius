import { ActivityOverview } from "../../features/dashboard/components/ActivityOverview";
import { AnalyticsOverview } from "../../features/dashboard/components/AnalyticsOverview";
import { DashboardHeader } from "../../features/dashboard/components/DashboardHeader"
import { FinancialMetrics } from "../../features/dashboard/components/FinancialMetrics";

export default function DashboardPage() {
  return (
    <main className="min-w-0">
      <DashboardHeader/>
      <FinancialMetrics/>
      <AnalyticsOverview/>
      <ActivityOverview/>
    </main>
  );
}