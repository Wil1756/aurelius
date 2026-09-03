import {z} from "zod"

export const createTransactionSchema = z.object({
    merchant: z
        .string()
        .trim()
        .min(1, "Merchant is required")
        .max(100, "Merchant must be 100 characters or less"),
    
    amount: z
        .number()
        .positive({error: "Amount must be greater than 0"}),
    
    category: z
        .string()
        .trim()
        .min(1, "category is required"),

    date: z
        .string()
        .trim()
        .min(1, "Date is required")
        .refine(
            (value) => !Number.isNaN(Date.parse(`${value}T00:00:00`)),
            "Enter a avalid date"
        ),
    
    description: z
        .string()
        .trim()
        .max(500, "Description must be 500 caharacters or less")
})

export type CreateTransactionInput = z.infer<typeof createTransactionSchema>