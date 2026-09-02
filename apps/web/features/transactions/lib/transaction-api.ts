import { ApiErrorResponse, TransactionsResponse } from "../types/transaction-api";

export async function getTransactions(): Promise<TransactionsResponse>{
    const response = await fetch("api/transactions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        const error =
            (await response.json()) as ApiErrorResponse

        throw new Error(
            error.error || "Failed to fetch transactions",
        )
    }
    return response.json()
}