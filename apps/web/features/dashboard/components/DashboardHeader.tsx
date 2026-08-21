import { Bell, Plus } from "lucide-react";

export function DashboardHeader() {
    return (
        <header className="mb-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                {/* greetings */}
                <div className="min-w-0">
                    <p className="text-sm font-medium text-(--muted)">Good Morning, Williams 👋</p>
                    <p className="mt-1 text-xs text-(--muted)">Here's what's happening with your finances today.</p>
                </div>
                {/* actions */}
                <div className="flex shrink-0 items-center gap-2">
                    {/* add transactions */}
                    <button
                        type="button"
                        className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-(--primary) px-3.5 text-xs font-semibold text-(--background) shadow-[0_6px_18px_rgba(37,214,162,0.14)] transition-transform hover:-translate-y-px"
                    >
                    <Plus size={15} strokeWidth={2.2}/>
                    <span>Add Transaction</span>
                    </button>
                    {/* notifications */}
                    <button type="button" aria-label="View notifications" className="relative inline-flex h-9 items-center justify-center rounded-lg border border-(--border) bg-(--surface) text-(--muted) transition-colors hover:bg-white/4 hover:text-(--foreground) hover:border-white/15">
                        <Bell 
                            size={16}   
                            strokeWidth={1.8} 
                        />
                        <span aria-hidden="true" className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-(--danger)"/>
                    </button>
                </div>
            </div>
            {/* date context */}
            <div className="mt-3 flex items-center justify-end">
                <button 
                    type="button" 
                    className="inline-flex h-8 items-center rounded-md border border-(--border) bg-(--surface) px-3 text-[11px] font-medium text-(--muted) transition-colors hover:text-(--foreground)"
                    >Aug 7 - Aug 13, 2026
                </button>
            </div>
        </header>
    )
}