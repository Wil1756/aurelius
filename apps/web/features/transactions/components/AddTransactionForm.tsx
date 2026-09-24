"use client"

import { useState } from "react"
import { TransactionFormValues, transactionFormSchema } from "../validation/transaction-schema"
import { SubmitEvent } from "react"
import { createTransaction } from "../lib/transaction-api"
import { X } from "lucide-react"

type AddTransFormProps = {
    onSuccess: () => void
    onCancel: () => void
}

const initialValues: TransactionFormValues = {
    merchant: "",
    amount: "",
    category: "",
    date: "",
    description: ""
}

const categories = [
    "Housing",
    "Food",
    "Transport",
    "Utilites",
    "Shopping",
    "Entertainment",
    "Healthcare",
    "Other"
]

export function AddTransactionForm({onSuccess, onCancel}: AddTransFormProps) {
    const [values, setValues] = useState<TransactionFormValues>(initialValues)
    const [errors, setErrors] = useState<Partial<Record<keyof TransactionFormValues, string>>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState("")

    function handleChange(
        field: keyof TransactionFormValues,
        value: string
    ) {
        setValues((current) => ({
            ...current,
            [field]: value
        }))

        setErrors((current) => ({
            ...current,
            [field]: undefined
        }))

        setSubmitError("")
    }

    async  function handleSubmit(e: SubmitEvent) {
        e.preventDefault()

        const result  = transactionFormSchema.safeParse(values)

        if(!result.success) {
            const fieldErrors: Partial<Record<keyof TransactionFormValues, string>> = {}

            for(const issue of result.error.issues) {
                const field = issue.path[0]

                if(typeof field === "string" && field in values) {
                    fieldErrors [
                        field as keyof TransactionFormValues
                    ]= issue.message
                }
            }
            setErrors(fieldErrors)
            return
        }
        setIsSubmitting(true)
        setSubmitError("")

        try {
            await createTransaction({
                merchant: result.data.merchant,
                amount: Number(result.data.amount),
                category: result.data.category,
                date: result.data.date,
                description: result.data.description
            })

            onSuccess()
        } catch (error) {
            setSubmitError(
                error instanceof Error
                ? error.message
                : "Failed to create transaction"
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-[2px] lg:items-center">
            <div className="max-h-92vh] w-full overflow-y-auto rounded-t-2xl border border-(--border) bg-(--surface) shadow-2xl lg:max-w-lg lg:rounded-2xl">
                <div className="flex items-center justify-between border-b border-(--border) px-5 py-4">
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-(--muted)">Transactions</p>
                        <h2 className="mt-1 text-sm font-semibold text-(--foreground)">Add Transactions</h2>
                    </div>

                    <button type="button"
                        onClick={onCancel}
                        aria-label="Close"
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-(--border) text-(--muted) transition-colors hover:bg-white/4 hover:text-(--foreground)"
                    >
                        <X size={18} strokeWidth={1.8}/>
                    </button>
                </div>

                <form onSubmit={handleSubmit}
                    className="space-y-5 p-5"
                >
                    <div>
                        <label htmlFor="merchant" className="mb-2 block text-xs font-medium text-(--foreground)">
                            Merchant
                        </label>
                        <input
                            id="merchant"
                            type="text"
                            value={values.merchant}
                            onChange={(e) => handleChange("merchant", e.target.value)}
                            aria-invlaid={Boolean(errors.merchant)}
                            className="h-10 w-full rounded-lg border border-(--border) bg-(--surfaceElevated) px-3 text-xs text-(--foreground) outline-none transition-colors placeholder:text-(--muted) focus:border-(--primary)"
                            placeholder="e.g. REWE"
                        />

                        {errors.merchant && (
                            <p className="mt-2 text-[11px] text-(--danger)">{errors.merchant}</p>
                        )}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="amount" className="mb-2 block text-xs font-medium text-()--foreground">
                                Amount
                            </label>
                            <input 
                                id="amount"
                                type="number"
                                min="0"
                                step="0.01"
                                value={values.amount}
                                onChange={(e) => handleChange("amount", e.target.value)}
                                aria-invlaid={Boolean(errors.amount)}
                                className="h-10 w-full rounded-lg border border-(--border) bg-(--surfaceElevated) px-3 text-xs text-(--foreground) outline-none transition-colors placeholder:text-(--muted) focus:border-(--primary)"
                                placeholder="0.00"
                            />

                            {errors.amount && (
                                <p className="mt-2 text-[11px] text-(--danger)">{errors.amount}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="date" className="mb-2 block text-xs font-medium text-(--foreground)">
                                Date
                            </label>
                            <input
                                id="date"
                                type="date"
                                value={(values.date)}
                                onChange={(e) => handleChange("date",e.target.value)}
                                aria-invalid={Boolean(errors.date)}
                                className="h-10 w-full rounded-lg border border-(--border) bg-(--surfaceElevated) px-3 text-xs text-(--foreground) outline-none transition-colors placeholder:text-(--muted) focus:border-(--primary)"
                            />

                            {errors.date && (
                                <p className="mt-2 text-[11px] text-(--danger)">{errors.date}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="category" className="mb-2 block text-xs font-medium text-(--foreground)">
                                Category
                            </label>
                            <select 
                                id="category"
                                value={values.category}
                                onChange={(e) => handleChange("category",e.target.value)}
                                aria-invalid={Boolean(errors.category)}
                                className="h-10 w-full rounded-lg border border-(--border) bg-(--surfaceElevated) px-3 text-xs text-(--foreground) outline-none transition-colors placeholder:text-(--muted) focus:border-(--primary)"
                            >
                                <option value="">Select category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                            {errors.category && (
                                <p className="mt-2 text-[11px] text-(--danger)">{errors.category}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="description" className="mb-2 block text-xs font-medium text-(--foreground)">Description</label>
                            <textarea
                                id="description"
                                value={values.description}
                                onChange={(e) => handleChange("description", e.target.value)}
                                aria-invalid={Boolean(errors.description)}
                                rows={4}
                                className="w-full resize-none rounded-lg border border-(--border) bg-(--surfaceElevated) px-3 py-3 text-xs text-(--foreground) outline-none placeholder:text-(--muted) focus:border-(--primary)"
                                placeholder="Optional description"
                            />
                            {errors.description && (
                                <p className="mt-2 ntext-[11px] text-(--danger)">{errors.description}</p>
                            )}
                        </div>

                        {submitError && (
                            <div role="alert" className="rounded-lg border border-(--danger)/30 bg-(--danger)/5 px-3 py-3 text-[11px] text-(--danger)">
                                {submitError}
                            </div>
                        )}

                        <div className="flex gap-2 pt-1">
                            <button
                                type="button"
                                onClick={onCancel}
                                disabled={isSubmitting}
                                className="h-10 flex-1 rounded-lg border border-(--border) text-xs font-medium text-(--muted) transition-colors hover:bg-white/4 hover:text-(--foreground) disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button type="submit" disabled={isSubmitting}
                                className="h-10 flex p-2  rounded-lg bg-(--primary) text-xs font-semibold text-[#06151A] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {isSubmitting ? "Saving.." : "Add Transaction"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}