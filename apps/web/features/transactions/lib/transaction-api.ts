import { ApiErrorResponse, DeleteTransactionResponse,  TransactionResponse, TransactionsResponse } from "../types/transaction-api";

export async function getTransactions(): Promise<TransactionsResponse>{
    const response = await fetch("/api/transactions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        const error = (await response.json()) as ApiErrorResponse

        throw new Error(error.error || "Failed to fetch transactions")
    }
    return response.json()
}

export async function getTransaction(id: string): Promise<TransactionResponse>{
    const response = await fetch(
        `/api/transactions/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )

    if(!response) {
        const error = (await response.json()) as ApiErrorResponse

        throw new Error(error.error || "Failed to fetch transaction")
    }
    return response.json()
}

export async function updateTransaction(id: string, 
    data: {
        merchant: string
        amount: number
        category: string
        date: string
        description: string
    }): Promise<TransactionResponse> {
        const response = await fetch(
            `/api/transactions/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            },
        )
        if(!response.ok) {
            const error = (await response.json()) as ApiErrorResponse

            throw new Error(error.error || "Failed to update transaction")
        }
        return response.json()
}

export async function deleteTransaction(id: string): Promise<DeleteTransactionResponse> {
    const response = await fetch(
        `/api/transactions/${id}`,
        {
            method: "DELETE"
        }
    )
    if(!response.ok) {
        const error = (await response.json()) as ApiErrorResponse

        throw new Error(error.error || "Failed to delete transaction")
    }

    return response.json()
}