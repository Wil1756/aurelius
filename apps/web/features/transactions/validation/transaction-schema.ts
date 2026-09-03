import {z} from "zod"

export const transactionFormSchema = z.object({
    merchant: z
        .string()
        .trim()
        .min(1, "Merchant is required")
        .max(100, "Merchant must be 100 characters or less"),

    amount: z
        .string()
        .trim()
        .min(1, "Amount is required")
        .refine(
            (value) => {
                const parsed = Number(value)
                return Number.isFinite(parsed) && parsed > 0 
            },
            "Enter a valid amount greater than 0"
        ),
    category: z
        .string()
        .trim()
        .min(1, "Category is required"),

    date : z
        .string()
        .trim()
        .min(1, "Date is required")
        .refine(
            (value) => !Number.isNaN(Date.parse(`${value}T00:00:00`)),
            "Enter a valid date",
        ),
    
    description: z
        .string()
        .trim()
        .max(500, "Description must be 500 characters or less")
})

export type TransactionFormValues = z.infer<typeof transactionFormSchema>