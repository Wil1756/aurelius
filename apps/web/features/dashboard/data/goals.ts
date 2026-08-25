export type FinancialGoals = {
    id: string
    name: string
    current: number
    target: number
    completionDate: string
}

export const financialGoals: FinancialGoals[] = [
   { 
    id: "goal-001",
    name: "Emergency Fund",
    current: 4800,
    target: 10000,
    completionDate: "Oct 14, 2026"
    },
    { 
    id: "goal-002",
    name: "New Macbook",
    current: 7800,
    target: 12000,
    completionDate: "Nov 4, 2026"
    },
]