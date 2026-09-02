import {z} from "zod";
import { NextResponse } from "next/server";
import type { Transaction } from "../../../features/transactions/types/transaction";
import { transactionFormSchema } from "../../../features/transactions/validation/transaction-schema";

export async function GET() {
    const transactions: Transaction[] = []

    return NextResponse.json({
        data: transactions
    })
}

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const result = transactionFormSchema.safeParse(body)

        if(!result.success) {
            return NextResponse.json(
                {
                    error: "Invalid transaction data",
                    details: z.flattenError(result.error),
                },
                {
                    status: 400,
                }
            )
        }
        const transaction = {
            ...result.data,
            amount: Number(result.data.amount)
        }
        return NextResponse.json(
            {
                data: transaction
            },
            {
                status: 201
            }
        )
    } catch {
        return NextResponse.json(
            {
                error: "Invalid request body",
            },
            {
                status: 400
            }
        )
    }
}