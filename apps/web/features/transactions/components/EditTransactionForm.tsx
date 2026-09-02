"use client"

import { CalendarDays, ChevronDown, Save, X } from "lucide-react"
import type { ReactNode, SubmitEvent } from "react"
import type { Transaction } from "../types/transaction"
import { useState } from "react"


type EditTransFormProps = {
    transaction: Transaction
    onSave: (transaction: Transaction) => void
    onCancel: () => void
}

const categories = [
    "Groceries",
    "Transport",
    "Housing",
    "Utilities",
    "Entertainment",
    "Shopping",
    "Salary",
    "Other"
]

export function EditTransactionForm({transaction, onSave, onCancel}: EditTransFormProps) {
    const [merchant, setMerchant] = useState(transaction.merchant)
    const [amount, setAmount] = useState(String(transaction.amount))
    const [category, setCategory] = useState(transaction.category)
    const [date, setDate] = useState(transaction.date)
    const [description, setDescription] = useState(transaction.description)

    function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        onSave({
            ...transaction,
            merchant: merchant.trim(),
            amount: Number(amount),
            category,
            date,
            description: description.trim()
        })
    }

    return (
        <form onSubmit={handleSubmit} className="flex min-h-full flex-col">
            {/* header */}
            <div className="flex items-center justify-between border-b border-(--border) px-5 py-4">
                <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-(--muted)">Transaction</p>
                    <h2 className="mt-1 text-sm font-semibold text-(--foreground)">Edit transaction</h2>
                </div>
                <button 
                    type="button"
                    onClick={onCancel}
                    aria-label="Close edit transaction"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-(--border) text-(--muted) transition-colors hover:bg-white/4 hover:text-(--foreground)"
                >
                    <X size={16} strokeWidth={1.8}/>
                </button>
            </div>
            {/* form fields */}
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6">
                <Field label="Merchant" htmlFor="merchant">
                    <input 
                        id="merchant" 
                        value={merchant}
                        onChange={(e) => setMerchant(e.target.value)}
                        className="h-10 w-full rounded-lg border border-(--border) bg-white/2 px-3 text-xs text-(--foreground) outline-none transition-colors placeholder:text-(--muted) focus:border-(--secondary)"
                    />
                </Field>
                <Field label="Amount" htmlFor="amount">
                    <div className="relative">
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-(--muted)">
                            €
                        </span>
                        <input
                            id="amount"
                            type="number"
                            min="0"
                            step="0.01"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="h-10 w-full rounded-lg border border-(--border) bg-white/2 pl-8 pr-3 text-xs text-(--foreground) outline-none transition-colors focus:border-(--secondary)"
                        />
                    </div>
                </Field>
                <Field label="Category" htmlFor="category">
                    <div className="relative">
                        <select id="category" 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="h-10 w-full appearance-none rounded-lg border border-(--border) bg-white/2 px-3 pr-9 text-xs text-(--foreground) outline-none transition-colors focus:border-(--secondary)" 
                        >
                                {categories.map((item) => (
                                    <option
                                        key={item}
                                        value={item}
                                        className="bg-(--surface)"
                                    >
                                        {item}
                                    </option>
                                ))}
                            </select>

                            <ChevronDown
                                size={14}
                                strokeWidth={1.8}
                                aria-hidden="true"
                                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-(--muted)" 
                            />
                    </div>
                </Field>
                <Field label="Date" htmlFor="date">
                    <div className="relative">
                        <CalendarDays
                            size={14}
                            strokeWidth={1.8}
                            aria-hidden="true"
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-(--muted)"
                        />
                        <input
                            id="date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="h-10 w-full rounded-lg border border-(--border) bg-white/2 pl-9 pr-3 text-xs text-(--foreground) outline-none transition-colors focus:border-(--secondary)"
                        />
                    </div>
                </Field>
                <Field label="Description" htmlFor="descritpion">
                    <textarea
                        id="description"
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full resize-none rounded-lg border border-(--border) bg-white/2 px-3 py-2.5 text-xs  leading-5 text-(--foreground) outline-none transition-colors placeholder:text-(--muted) focus:border-(--secondary)"
                    />
                </Field>
            </div>
            <div className="border-t border-(--border) p-5">
                <button type="submit" className="flex h-10 w-full items-center gap-2 rounded-lg bg-(--primary) text-xs font-semibold text-[#06151A] transition-opacity hover:opacity-90">
                    <Save size={14} strokeWidth={1.8}/>
                    Save changes
                </button>
                <button 
                    type="button" 
                    onClick={onCancel} 
                    className="mt-2 h-9 w-full rounded-lg text-xs font-medium text-(--muted) transition-colors hover:text-(--foreground)"
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

function Field({label, htmlFor, children}: {label: string; htmlFor: string; children: ReactNode}) {
    return (
        <div className="space-y-2">
            <label htmlFor={htmlFor} className="text-[10px] font-medium uppercase tracking-widest text-(--muted)">
                {label}
            </label>
            {children}
        </div>
    )
}