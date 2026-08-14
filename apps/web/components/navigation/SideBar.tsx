import Link from "next/link"

const navigationItems = [
    {
      label: "Overview",
      href: "/",
    },
    {
      label: "Transactions",
      href: "/transactions",
    },
    {
      label: "Accounts",
      href: "/accounts",
    },
    {
      label: "Budgets",
      href: "/budgets",
    },
    {
      label: "Goals",
      href: "/goals",
    },
    {
      label: "Analytics",
      href: "/analytics",
    },
    {
      label: "AI Advisor",
      href: "/advisor",
    },
  ];

export function SideBar() {
    return (
        <aside className="fixed inset-y-0 left-0 hidden w-60 border-[var(--border)]">
            <div className="flex h-full flex-col p-4">
                <div className="mb-8 px-3 py-4">
                    <p className="text-lg font-semibold tracking-tight">AURELIUS</p>
                    <p className="text-xs text-[var(--muted)]">Finance Intelligence</p>
                </div>

                <nav className="space-y-1">
                    {navigationItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-sm text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--foreground)]"
                    >
                    {item.label}
                    </Link>
                ))}
                </nav>
                <div className="mt-auto border-t border-[var(--border)] pt-4">
                    <Link href="" className="block rounded-lg px-3 py-2 text-sm text-[var(--muted)]">
                        Settings
                    </Link>
                </div>
            </div>
        </aside>
    )
}