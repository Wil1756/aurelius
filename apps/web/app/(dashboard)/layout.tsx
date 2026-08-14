import { ReactNode } from "react";
import { SideBar } from "../../components/navigation/SideBar";

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SideBar/>

      <div className="lg:pl-60">
        {/* <MobileHeader /> */}

        <main className="min-h-screen p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}