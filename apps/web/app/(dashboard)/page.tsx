import { DashboardHeader } from "../../features/dashboard/components/DashboardHeader"
import { FinancialMetrics } from "../../features/dashboard/components/FinancialMetrics";

export default function DashboardPage() {
  return (
    <main>
      <DashboardHeader/>
      <FinancialMetrics/>
    </main>
  );
}