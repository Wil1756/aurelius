"use client"

import { useState } from "react"
import { CalendarDays, CheckCircle2, CreditCard, FileText, Pencil, Tag, Trash2, X } from "lucide-react"
import  type { Transaction } from "../types/transaction"
import type {ReactNode } from "react"
import { EditTransactionForm } from "./EditTransactionForm"

type TransDetailsDrawerProps = {
    transaction: Transaction | null
    onClose: () => void
}

function formatAmount(amount: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(amount)
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    }).format(new Date(`${date}T00:00:00`))
}

export function TransactionDetailsDrawer({transaction, onClose}: TransDetailsDrawerProps) {  
    const [isEditing, setIsEditing] = useState(false);

    // nothing is selectDomainDefinition, so there is nothing to render
    if(!transaction) {
        return null
    }

    const isIncome = transaction.type === "income"

    if(isEditing) {
        return (
            <aside
                aria-label="Edit transaction"
                className="fixed inset-x-0 bottom-0 z-50 max-h-[92vh] overflow-y-auto rounded-t-2xl border-t border-(--border) bg-(--surface) shadow-2xl lg:inset-y-0 lg:right-0 lg:left-auto lg:w-105 lg:max-h-none lg:rounded-none lg:border-t-0 lg:border-l"
                >
                <EditTransactionForm
                    transaction={transaction}
                    onCancel={() => setIsEditing(false)}
                    onSave={(updatedTransaction) => {
                        console.log("updated transaction:", updatedTransaction)
                        setIsEditing(false)
                    }}
                />
            </aside>
        )
    }

     return (
        <>
            <button
                type="button"
                aria-label="Close transaction details"
                onClick={onClose}
                className="fixed inset-0 z-40 hidden bg-black/40 backdrop-blur-[2px] lg:block"
            />
            <aside aria-label="Transaction details"
                className="fixed inset-x-0 bottom-0 z-50 max-h-[92vh] overflow-y-auto rounded-t-2xl border-t border-(--border) bg-(--surface) shadow-2xl lg:inset-y-0 lg:right-0 lg:left-auto lg:w-105 lg:max-h-none lg:rounded-none lg:border-t-0 lg:border-l"
            >
                <div className="flex min-h-full flex-col">
                    {/* header */}
                    <div className="flex items-center justify-between border-b border-(--border) px-5 py-4">
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-(--muted)">Transaction</p>
                            <h2 className="mt-1 text-sm font-semibold text-(--foreground)">Details</h2>
                        </div>
                        <button type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="flex h-8 w-8 items-center justify-items-center rounded-lg border border-(--border) text-(--muted) transition-colors hover:bg-white/4 hover:text-(--foreground) "
                        >
                            <X size={24} strokeWidth={1.8} />
                        </button>
                    </div>
                    {/* transaction identity */}
                    <div className="px-5 py-7 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-white/2.5">
                            <CreditCard size={20} strokeWidth={1.7} className="text-(--secondary)"/>
                        </div>
                        <p className="mt-4 text-base font-semibold text-(--foreground)">
                            {transaction.merchant}
                        </p>
                        <p className={`mt-2 text-2xl font-semibold tracking-tight ${isIncome ? "text-(--primary)" : "text-(--foreground)"}`}>
                            {isIncome ? "+" : "-"} 
                            {formatAmount(transaction.amount)}
                        </p>
                        <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-(--primary)">   
                            <CheckCircle2 size={13} strokeWidth={1.8}/>
                            {transaction.status}
                        </div>
                    </div>
                    {/* { details} */}
                    <div className="border-y border-(--border)">
                        <div className="px-5 py-4">
                            <p className="text-[10px] font-medium uppercase tracking-widest text-(--muted)">Details</p>
                        </div>
                        <div className="divide-y divide-(--border)">
                                <DetailRow 
                                icon={<Tag size={14} strokeWidth={1.7}/>}
                                label="Category"
                                value={transaction.category}
                                />
                                <DetailRow 
                                icon={<CreditCard size={14} strokeWidth={1.7}/>}
                                label="Account"
                                value={`${transaction.account} .... ${transaction.accountLastFour}`}
                                />
                                <DetailRow 
                                icon={<CalendarDays size={14} strokeWidth={1.7}/>}
                                label="Date"
                                value={formatDate(transaction.date)}
                                />
                                <DetailRow 
                                icon={<CheckCircle2 size={14} strokeWidth={1.7}/>}
                                label="Status"
                                value={transaction.status}
                                />
                        </div>
                    </div>
                    {/* { description} */}
                    <div className="px-5 py-5">
                        <div className="flex items-center gap-2">
                            <FileText size={14} strokeWidth={1.7} className="text-(--muted)"/>
                            <p className="text-[10px] font-medium uppercase tracking-widest text-(--muted)">Description</p>
                        </div>
                        <p className="mt-3 text-xs leading-5 text-(--foreground)">
                            {transaction.description}
                        </p>
                    </div>
                    {/* {actions} */}
                    <div className="mt-auto border-t border-(--border) p-5">
                        <div className="grid gap-2">
                            <button type="button" 
                                onClick={() => setIsEditing(true)}
                                className="flex items-center h-10 justify-center gap-2 rounded-lg bg-(--primary) text-xs font-semibold text-[#06151A] transition-opacity hover:opacity-90">
                                <Pencil size={14} strokeWidth={1.8}/>
                                Edit transaction
                            </button>
                            <button type="button" className="flex h-10 items-center justify-center gap-2 rounded-lg border border-(--border) text-xs font-medium text-(--danger) transition-colors hover:bg-(--danger)/6">
                                <Trash2 size={14} strokeWidth={1.8}/>
                                Delete transaction
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

function DetailRow({icon, label, value}: {icon: ReactNode, label: string, value: string}) {
    return (
        <div className="flex items-center justify-between gap-4 px-5 py-3.5">
            <div className="flex items-center gap-2.5 text-(--muted)">{icon}
                <span className="text-[11px]">{label}</span>
            </div>
            <span className="max-w-[55%] truncate text-right text-[11px] font-medium text-(--foreground)">{value}</span>
        </div>
    )
}