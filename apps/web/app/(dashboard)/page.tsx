// import { DashboardHeader } from "@/features/dashboard/components/DashboardHeader";
// import { FinancialMetrics } from "@/features/dashboard/components/FinancialMetrics";
// import { NetWorthChart } from "@/features/dashboard/components/NetWorthChart";
// import { SpendingOverview } from "@/features/dashboard/components/SpendingOverview";
// import { FinancialPulse } from "@/features/dashboard/components/FinancialPulse";
// import { RecentTransactions } from "@/features/dashboard/components/RecentTransactions";
// import { GoalsProgress } from "@/features/dashboard/components/GoalsProgress";

import { FinancialMetrics } from "../../components/dashboard/components/FinancialMetrics";

export default function DashboardPage() {
  return (
    <main className="space-y-6">
      <header>
        <p className="text-sm text-[var(--muted)]">Good morning, William 👋</p>
        <h1 className="mt-1 text-2xl font-semibold">Here's whats happening with your finances today</h1>
      </header>
      {/* <DashboardHeader /> */}

      {/* <FinancialMetrics /> */}
      <FinancialMetrics/>
      

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr_0.9fr]">
        {/* <NetWorthChart /> */}
        {/* <SpendingOverview /> */}
        {/* <FinancialPulse /> */}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.8fr]">
        {/* <RecentTransactions /> */}
        {/* <GoalsProgress /> */}
      </section>
    </main>
  );
}