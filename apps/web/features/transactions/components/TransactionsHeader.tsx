import { Plus } from "lucide-react";

export function TransactionsHeader() {
    return( 
        <header className="mb-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-(--secondary)">Finance Activity</p>
                    <h1 className="mt-1 text-2xl font-semibold tracking-tight text-(--foreground)">Transactions</h1>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-(--muted)">Review, categorize and manage your financial activity</p>
                </div>
                <button type="button" 
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-(--primary) px-3.5 text-xs font-semibold text-[#061019] transition-opacity hover:opacity-90"
                >
                    <Plus size={15} strokeWidth={2}/>
                    Add transaction
                </button>
            </div>
        </header>
    )
}