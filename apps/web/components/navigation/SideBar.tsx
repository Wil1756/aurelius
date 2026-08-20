import Link from "next/link"
import { navigationItems } from "./navigation-items"
import { SidebarItem } from "./SidebarItem"

export function Sidebar() {
  const primaryItems = navigationItems.filter((item)=> item.section === "primary")
  const secondaryItems = navigationItems.filter((item)=> item.section === "secondary")
  const tertiaryItems = navigationItems.filter((item)=> item.section === "tertiary")

    return (
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-[248px] border-r border-[var(--border)] bg-[var(--surface)] lg:block">
            <div className="flex h-full flex-col px-3 py-4">
              {/* brand */}
                <div className="mb-7 px-3 py-2">
                  <Link href="/" className="group inline-flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(56,189,248,0.30)] bg-[rgba(56,189,248,0.06)]">
                      <span className="text-lg font-semibold text-[var(--seconadry)]">A</span>
                    </div>
                  </Link>
                  <div>
                    <p className="text-[15px] font-semibold tracking-[0.08em] text-[var(--foreground)]">AURELIUS</p>
                    <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">Finance Intelligence</p>
                  </div>
                </div>
                {/* primary navigation */}
                <nav aria-label= "Primary navigation" className="space-y-1">
                  {primaryItems.map((item)=> (
                    <SidebarItem key={item.href} label={item.label} href={item.href} icon={item.icon}/>
                  ))}
                </nav>
                {/* finance tools */}
                <div className="my-5 border-t border-[var(--border)]">
                  <nav aria-label="Finance tools" className="space-y-1">
                    {secondaryItems.map((item)=> (
                      <SidebarItem key={item.href} label={item.label} href={item.href} icon={item.icon}/>
                    ))}
                  </nav>
                </div>
                {/* support*/}
                <div className="my-5 border-t border-[var(--border)]">
                  <nav aria-label="Support" className="mt-5 border-t border-[var(--border)]">
                    {tertiaryItems.map((item)=> (
                      <SidebarItem key={item.href} label={item.label} href={item.href} icon={item.icon}/>
                    ))}
                  </nav>
                  {/* user profile */}
                  <div className="mt-auto border-t border-[var(--border)] pt-4">
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl border border-transparent p-2.5 text-left transition-colors hover:border-[var(--border)] hover:bg-white/[0.03]">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-elevated)] text-sm font-semibold text-[var(--secondary)]">WO</div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-[var(--foreground)]">William Opio</p>
                        <p className="text-xs text-[var(--muted)]">Premium Plan</p>
                      </div>
                      <span className="text-xs text-[var(--muted)]">⌄</span>
                    </button>                 
                    </div>
                </div>
            </div>
        </aside>
    )
}