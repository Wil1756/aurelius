"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";

type TPaginationProps = {
    page: number,
    totalPages: number,
    totalItems: number,
    pageSize: number,
    onPageChange: (page: number) => void
}

export function TransactionPagination({
    page,
    totalPages,
    totalItems,
    pageSize,
    onPageChange
}: TPaginationProps) {
    const start = totalItems === 0 ? 0 : (page - 1) * pageSize + 1
    const end = Math.min(page * pageSize, totalItems)

    return (
        <div className="flex flex-col gap-3 border-t border-(--border) px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] text-(--muted)]">Showing{" "}
                <span className="font-medium text-(--foreground)">{start}-{end}</span>{" "} of {" "}
                <span className="font-medium text-(--foreground)">{totalItems}</span>{" "} transactions
            </p>
            <div className="flex items-center gap-1.5">
                <button
                    type="button"
                    disabled={page === 1}
                    onClick={() => onPageChange(page - 1)}
                    aria-label="Previous page"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-(--border) text-(--muted) transition-colors hover:bg-white/3 hover:text-(--foreground) disabled:cursor-not-allowed disabled:opacity-40"  
                >
                    <ChevronLeft size={14}/>
                </button>
                <span className="min-w-16 text-center text-[10px] text-(--muted)">Page{" "}
                    <span className="font-medium text-(--foreground)">{page}</span>{" "} of {totalPages}
                </span>
                <button 
                    type="button"
                    disabled={page === totalPages}
                    onClick={() => onPageChange(page + 1)}
                    aria-label="Next page"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-(--border) text-(--muted) transition-colors hover:bg-white/3 hover:text-(--foreground) disabled:cursor-not-allowed disabled:opacity-40"
                >
                    <ChevronRight size={14}/>
                </button>
            </div>
        </div>
    )
}