"use client"

import { Trash2, X } from "lucide-react";
import type { Transaction } from "../types/transaction";

type DeleteTransProps = {
    transaction: Transaction
    onCancel: () => void
    onConfirm: () => void
}

export function DeleteTransaction({transaction, onCancel, onConfirm}) {
    return (
        <>
            {/* Backdrop */}
            <button
                type="button"
                aria-label="Close delete confirmation"
                onClick={onCancel}
                className="fixed inset-0 z-60 bg-black/50 backdrop-blur-[2px]"
            />
            {/* Dialog */}
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="delete-transaction-title"
                aria-describedby="delete-transaction-description"
                className="fixed inset-x-4 bottom-4 z-70 rounded-2xl border border-(--border) bg-(--surface) shadow-2xl sm:inset-x-auto sm:left-1/2 sm:w-105 sm:-translate-x-1/2"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-(--border) px-5 py-4">
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-(--danger)">
                            Delete transaction
                        </p>
                        <h2 id="delete-transaction-title"
                            className="mt-1 text-sm font-semibold text-(--foreground)"
                        >
                            Are you sure?
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onCancel}
                        aria-label="Close"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-(--border) text-(--muted) transition-colors hover:bg-white/4 hover:text-(--foreground)"
                    >
                        <X size={16} strokeWidth={1.8} />
                    </button>
                </div>
                {/* Content */}
                <div className="px-5 py-6">
                    <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--danger)/10 text-(--danger)">
                            <Trash2 size={16} strokeWidth={1.8} />
                        </div>
                        <div className="min-w-0">
                            <p id="delete-transaction-description"
                                className="text-xs leading-5 text-(--foreground)"
                            >
                                You are about to delete this transaction.
                                This action cannot be undone.
                            </p>
                            <div className="mt-4 rounded-lg border border-(--border) bg-white/2.5 px-3 py-3">
                                <p className="truncate text-xs font-medium text-(--foreground)">
                                    {transaction.merchant}
                                </p>
                                <p className="mt-1 text-[11px] text-(--muted)">
                                    This transaction will be permanently removed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Actions */}
                <div className="border-t border-(--border) p-5">
                    <div className="grid gap-2 sm:grid-cols-2">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="h-10 rounded-lg border border-(--border) text-xs font-medium text-(--muted) transition-colors hover:bg-white/4 hover:text-(--foreground)"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={onConfirm}
                            className="flex h-10 items-center justify-center gap-2 rounded-lg bg-(--danger) text-xs font-semibold text-white transition-opacity hover:opacity-90"
                        >
                            <Trash2 size={14} strokeWidth={1.8} />
                            Delete transaction
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}