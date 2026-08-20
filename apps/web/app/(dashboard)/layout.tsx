import { ReactNode } from "react";
import { Sidebar } from "../../components/navigation/Sidebar";
interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar/>

      <div className="lg:pl-[248px]">
        <main className="min-h-screen p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}