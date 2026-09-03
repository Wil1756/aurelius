import {z} from "zod"
import { NextResponse } from "next/server"
import { createTransactionSchema } from "../../../../features/transactions/validation/transaction-api-schema"
import { transactionRepository } from "../../../../features/transactions/repositories"

type TransactionRouteContext = {
    params: Promise<{id: string}>
}

export async function GET(_request: Request, context: TransactionRouteContext) {
        const {id} =  await context.params

        const transaction =  await transactionRepository.getTransactionById(id)
        
        if(!transaction) {
            return NextResponse.json(
                { error: "Transaction not found"},
                { status: 404 }
            )
        }

        return NextResponse.json({data: transaction})
}

export async function PUT(request: Request, context: TransactionRouteContext) {
    try {   
        const {id} = await context.params
        const body = await request.json()

        const result = createTransactionSchema.safeParse(body)

        if(!result.success) {
            return NextResponse.json(
                {
                    error: "Invalid transaction data",
                    details: z.flattenError(result.error)
                },
                {status: 400}
            )
        }

        const transaction = await transactionRepository.updateTransaction(id, result.data)

        if(!transaction) {
            return NextResponse.json(
                { error: "trnasaction not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({data: transaction})
    } catch {
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 }
        )
    }
}

export async function DELETE(_request: Request, context: TransactionRouteContext) {
        const {id} = await context.params

        const deleted  = await transactionRepository.deleteTransaction(id)

        if(!deleted) {
            return NextResponse.json(
                { error: "Transaction not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({data: {id, deleted: true}})
}