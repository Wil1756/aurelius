import Link from "next/link"
import { navigationItems } from "./navigation-items"
import { SidebarItem } from "./SidebarItem"

export function Sidebar() {
  const primaryItems = navigationItems.filter((item)=> item.section === "primary")
  const secondaryItems = navigationItems.filter((item)=> item.section === "secondary")
  const tertiaryItems = navigationItems.filter((item)=> item.section === "tertiary")

    return (
<aside className="fixed inset-y-0 left-0 z-40 hidden w-44 border-r border-(--border) bg-(--surface) lg:block">
            <div className="flex h-full flex-col px-2.5 py-3">
              {/* brand */}
                <div className="mb-5 px-2 py-1">
                  <Link href="/" className="group flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center shrink-0 justify-center rounded-lg border border-[rgba(56,189,248,0.30)] bg-[rgba(56,189,248,0.06)]">
                      <span className="text-sm font-semibold text-(--seconadry)">A</span>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold tracking-[0.06em] text-(--foreground)">AURELIUS</p>
                      <p className="truncate text-[8px] font-medium uppercase tracking-[0.08em] text-(--muted)">Finance Intelligence</p>
                    </div>
                  </Link>
                </div>
                {/* primary navigation */}
                <nav aria-label= "Primary navigation" className="space-y-1">
                  {primaryItems.map((item)=> (
                    <SidebarItem key={item.href} label={item.label} href={item.href} icon={item.icon}/>
                  ))}
                </nav>
                {/* finance tools */}
                <div className="my-5 border-t border-(--border)">
                  <nav aria-label="Finance tools" className="space-y-1">
                    {secondaryItems.map((item)=> (
                      <SidebarItem key={item.href} label={item.label} href={item.href} icon={item.icon}/>
                    ))}
                  </nav>
                </div>
                {/* support*/}
                <div className="my-5 border-t border-(--border)">
                  <nav aria-label="Support" className="mt-5 border-t border-(--border)">
                    {tertiaryItems.map((item)=> (
                      <SidebarItem key={item.href} label={item.label} href={item.href} icon={item.icon}/>
                    ))}
                  </nav>
                  {/* user profile */}
                  <div className="mt-auto border-t border-(--border) pt-4">
                    <button type="button" className="flex w-full items-center gap-3 rounded-xl border border-transparent p-2.5 text-left transition-colors hover:border-(--border) hover:bg-white/3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--surface-elevated) text-sm font-semibold text-(--secondary)">WO</div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-(--foreground)">William Opio</p>
                        <p className="text-xs text-(--muted)">Premium Plan</p>
                      </div>
                      <span className="text-xs text-(--muted)">⌄</span>
                    </button>                 
                    </div>
                </div>
            </div>
        </aside>
    )
}