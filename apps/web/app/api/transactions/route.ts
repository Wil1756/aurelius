import {z} from "zod";
import { NextResponse } from "next/server";
import { createTransactionSchema } from "../../../features/transactions/validation/transaction-api-schema";
import { transactionRepository } from "../../../features/transactions/repositories";

export async function GET() {
    try {
        const transactions = await transactionRepository.getTransactions()

        return NextResponse.json({
            data: transactions
        })
    } catch {
        return NextResponse.json(
            {
                error: "Failed to fetch transactions",
            },
            {
                status: 500
            }
        )
    }
    
}

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const result = createTransactionSchema.safeParse(body)

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

        const transaction = await transactionRepository.createTransaction(
            result.data
        )

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