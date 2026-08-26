"use client"

import { Search, SlidersHorizontal, X } from "lucide-react"
import { useState } from "react";
import type { TransactionsFilters} from "../types/transaction";

const initialFilters: TransactionsFilters = {
    search: "",
    account: "all",
    category: "all",
    type: "all",
    dateRange: "all"
    
}

const categories = [
    { value: "all", label: "All categories" },
    { value: "groceries", label: "Groceries" },
    { value: "entertainment", label: "Entertainment" },
    { value: "shopping", label: "Shopping" },
    { value: "transport", label: "Transport" },
    { value: "utilities", label: "Utilities" },
    { value: "income", label: "Income" },
    { value: "freelance-income", label: "Freelance income" },
];

const accounts = [
    { value: "all", label: "All accounts" },
    { value: "visa", label: "Visa •••• 4021" },
    { value: "checking", label: "Checking •••• 8812" },
];

const types = [
    { value: "all", label: "All types" },
    { value: "income", label: "Income" },
    { value: "expense", label: "Expenses" },
];
  
const dateRanges = [
    { value: "all", label: "All time" },
    { value: "7d", label: "Last 7 days" },
    { value: "30d", label: "Last 30 days" },
    { value: "90d", label: "Last 90 days" },
];

export function TransactionsFilters() {
    const [filters, setFilters] = useState<TransactionsFilters>(initialFilters);

    const hasActiveFilters =
        filters.search !== "" ||
        filters.account !== "all" ||
        filters.category !== "all" ||
        filters.type !== "all" ||
        filters.dateRange !== "all";
    
    function updateFilter<K extends keyof TransactionsFilters>(
        key: K,
        value: TransactionsFilters[K],
    ){
        setFilters((current) => (
            {
                ...current,
                [key]: value
            }
        ))
    }

    function resetFilters() {
        setFilters(initialFilters)
    }

    return (
        <section 
            aria-label="Transaction filters"
            className="mb-4 rounded-xl border border-(--border) bg-(--surface) p-3"
        >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="relative min-w-0 flex-1">
                    <Search size={15} strokeWidth={1.8} 
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-(--muted)"
                        aria-hidden="true"
                    />
                    <input type="search" value={filters.search}
                        onChange={(event) => updateFilter("search", event.target.value)}
                        placeholder="Search transactions..."
                        aria-label="search transactions"
                        className="h-9 w-full rounded-lg border border-(--border) bg-(--background) pl-9 pr-2 text-xs text-(--foreground) outline-none placeholder:text-(--muted) focus:border-(--secondary)"
                    />
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:shrink-0">
                    <select
                        value={filters.account}
                        onChange={(event) => updateFilter("account", event.target.value)}
                        aria-label="Filter by account"
                        className="h-9 min-w-0 rounded-lg border border-(--border) bg-(--background) px-3 text-xs text-(--foreground) outline-none focus:border-(--secondary) lg:w-37.5"
                    >
                        {accounts.map((account) => (
                            <option key={account.value} value={account.value}>
                                {account.label}
                            </option>
                        ))}
                    </select>
                    <select 
                        value={filters.category}
                        onChange={(event) => updateFilter("category", event.target.value)}
                        aria-label="Filter by category"
                        className="h-9 min-w-0 rounded-lg border border-(--border) bg-(--background) px-3 text-xs text-(--foreground) outline-none focus:border-(--secondary) lg:w-38" 
                    >
                        {categories.map((category) => (
                            <option key={category.value} value={category.value} >
                                {category.label}
                            </option>
                        ))}
                    </select>
                    <select
                        value={filters.type}
                        onChange={(event) => updateFilter("type", event.target.value as TransactionsFilters["type"])}
                        aria-label="Filter by transaction type"
                        className="h-9 min-w-0 rounded-lg border border-(--border) bg-(--background) px-3 text-xs text-(--foreground) outline-none focus:border-(--secondary) lg:w-31"
                    >
                        {types.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                    <select
                        value={filters.dateRange}
                        onChange={(event) => updateFilter("dateRange", event.target.value as TransactionsFilters["dateRange"])}
                        aria-label="Filter by date range"
                        className="h-9 min-w-0 rounded-lg border border-(--border) bg-(--background) px-3 text-xs text-(--foreground) outline-none focus:border-(--secondary) lg:w-32"
                    >
                        {dateRanges.map((range) => (
                            <option key={range.value} value={range.value}>
                                {range.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            {hasActiveFilters && (
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-(--border) pt-3">
                    <div className="flex items-center gap-2 text-[11px] text-(--muted)">
                        <SlidersHorizontal size={13} strokeWidth={1.8}/>
                        <span>Filters applied</span>
                    </div>
                    <button type="button" onClick={resetFilters}
                        className="inline-flex items-center gap-1.5 text-[11px] font-medium text-(--secondary) transition-colors hover:text-(--foreground)"
                    >
                        <X size={12} strokeWidth={1.8}/>
                        Clear filters
                    </button>
                </div>
            )}
        </section>
    )
}