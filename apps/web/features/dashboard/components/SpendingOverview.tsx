"use client";

import { Pie, PieChart, ResponsiveContainer, Sector, Tooltip } from "recharts";

const spendingData = [
    {
        name: "Housing",
        amount: 1400,
        percentage: 32
    },
    {
        name: "Food",
        amount: 620,
        percentage: 14
    },
    {
        name: "Transport",
        amount: 470,
        percentage: 11
    },
    {
        name: "Utilities",
        amount: 390,
        percentage: 9
    },
    {
        name: "Entertainment",
        amount: 300,
        percentage: 7
    },
    {
        name: "Other",
        amount: 1100,
        percentage: 25
    }
]

const spendingColors = [
    "var(--primary)",
    "var(--secondary)",
    "var(--warning)",
    "var(--danger)",
    "#8B5CF6",
    "#64748B",
]

export function SpendingOverview() {
    return (
        <article className="flex flex-col h-full min-w-0 overflow-hidden rounded-xl border border-(--border) bg-(--surface) p-4">
            <div>
                <h2 className="text-sm font-semibold text-(--foreground)">Spending Overview</h2>
                <p className="mt-1 text-xs text-(--muted)">Where your money went</p>
            </div>
            <div className="mt-4 flex min-w-0 flex-col items-center gap-4 sm:flex-row sm:items-center">
                <div className="h-42 w-full min-w-0 sm:h-45 sm:w-[48%]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie 
                                data={spendingData}
                                dataKey="amount"
                                nameKey="name"
                                innerRadius="68%"
                                outerRadius="98%"
                                paddingAngle={2}
                                stroke="none"
                                shape={(props:any) => {
                                    const {index, ...rest} = props
                                    return (
                                        <Sector {...rest} fill={spendingColors[index]}/>
                                    )
                                }}
                            />
                            <Tooltip
                                contentStyle={{
                                    borderRadius: "8px",
                                    border: "1px solid var(--border)",
                                    background: "var(--surface-elevated)",
                                    color: "var(--foreground)",
                                    fontSize: "12px"
                                }}
                                formatter={(value) => [
                                    `€${Number(value).toLocaleString("en-US")}`,
                                    "Spent"
                                ]}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="mt-4 pointer-events-none flex flex-col items-center">
                        <span className="text-[10px] text-(--muted)">Total Spent</span>
                        <span className="mt-0.5 text-base font-semibold text-(--foreground)"> €4,280</span>
                    </div>
                </div>
                <div className="w-full min-w-0 space-y-2">
                    {spendingData.map((item, index) => (
                        <div key={item.name} className="flex items-center gap-2">
                            <span 
                                aria-hidden="true" 
                                className="h-1.5 w-1.5 shrink-0 rounded-full" 
                                style={{backgroundColor: spendingColors[index]}}
                            />
                            <span className="min-w-0 flex-1 truncate text-[11px] text-(--muted)">{item.name}</span>
                            <span className="shrink-0 text-[11px] font-medium text-(--foreground)">€{item.amount.toLocaleString("en-US")}</span>
                            <span className="w-7 shrink-0 text-right text-[10px] text-(--muted)">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}