import { ReactNode } from "react";
import { Sidebar } from "../../components/navigation/Sidebar";
interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-(--background)]">
      <Sidebar/>

      <div className="lg:pl-44">
        <main className="min-h-screen px-4 py-4 sm:px-5 lg:px-5 lg:py-5">
          {children}
        </main>
      </div>
    </div>
  );
}