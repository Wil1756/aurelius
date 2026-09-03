import {z} from "zod";
import { NextResponse } from "next/server";
import { createTransactionSchema } from "../../../features/transactions/validation/transaction-api-schema";

export async function GET() {
    return NextResponse.json({
        data: []
    })
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

        return NextResponse.json(
            {
                data: result.data
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