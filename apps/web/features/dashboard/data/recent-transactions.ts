export type RecentTranscations = {
    id: string
    merchant: string
    category: string
    amount: number
    date: string
    account: string
    type: "income" | "expense"
}

export const recentTransactions: RecentTranscations[] = [
    {
        id: "txn-001",
        merchant: "Netflix",
        category: "Entertainment",
        amount: -19.99,
        date: "Aug 04, 2026",
        account: "Visa •••• 4021",
        type: "expense"
    },
    {
        id: "txn-002",
        merchant: "Salary",
        category: "Income",
        amount: 4800,
        date: "Aug 04, 2026",
        account: "Checking •••• 8812",
        type: "income"
    },
    {
        id: "txn-003",
        merchant: "Amazon",
        category: "Shopping",
        amount: -84.2,
        date: "Aug 10, 2026",
        account: "Visa •••• 4021",
        type: "expense"
    },
    {
        id: "txn-004",
        merchant: "Electricity",
        category: "Utilities",
        amount: -622.4,
        date: "Aug 13, 2026",
        account: "Checking •••• 8812",
        type: "expense"
    },
]