"use client";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis}  from "recharts";

const netWorthData = [
    {month: "Mar" , value: "42000"},
    {month: "Apr", value: "48000"},
    {month: "May" , value: "53000"},
    {month: "Jun" , value: "61000"},
    {month: "Jul" , value: "69000"},
    {month: "Aug" , value: "84420.7"}
] 

function formatEuro(value: number) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
    }).format(value)
}

function ChartTooltip({active, payload}: {active?: boolean; payload?:Array<{value: number}>}){
    if(!active || !payload?.length) {
        return null
    }
    return (
        <div className="rounded-lg border border-(--border) bg-(--surface-elevated) px-3 py-2 shadow-xl">
            <p className="text-[11px] text-(--muted)">Net Worth</p>
            <p className="mt-0.5 text-sm font-semibold text-(--foreground)">{formatEuro(payload[0].value)}</p>
        </div>
    )
}

export function NetWorthTrend() {
    return (
        <article className="flex flex-col h-full min-w-0 overflow-hidden rounded-xl border-(--border) bg-(--surface) p-4">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-sm font-semibold text-(--foreground)">Net Worth Trend</h2>
                    <p className="mt-1 text-xs text-(--muted)">Your total wealth over time</p>
                </div>
                <button type="button" className="hidden rounded-md px-2 py-1 text-[11px] text-(--muted) transition-colors hover:bg-white/4 hover:text-(--foreground) sm:block">6 months</button>
            </div>
            <div className="mt-5 h-55 min-w-0 sm:h-57.5">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                        data={netWorthData}    
                        margin={{top: 8, right: 8, bottom: 0, left: 0}}
                    >
                        <CartesianGrid 
                            stroke="var(--border)" 
                            strokeDasharray="3.3" 
                            vertical={false}
                        />
                        <XAxis 
                            dataKey="month" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: "var(--muted)", fontSize: 10}} 
                            dy={8}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            width={42}
                            tick={{fill: "var(--muted)", fontSize: 10}}
                            tickFormatter={(value)=> `€${Math.round(value / 1000)}k`}
                        />
                        <Tooltip
                            content={<ChartTooltip/>}
                            cursor={{stroke: "var(--border)"}}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="var(--primary)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                                r:4,
                                fill: "var(--primary)",
                                stroke: "var(--surface)",
                                strokeWidth: 2
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </article>
    )
}