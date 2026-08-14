import type { ReactNode } from "react";

interface CardProps{
    children: ReactNode
    className?: string
}   

export function Card({children, className=""}: CardProps) {
    return (
        <div className={[
            "rounded-xl",
            "border",
            "border-[var(--border)",
            "bg-[var(--surface)]",
            "p-5",
            className
        ].join("")}>
            {children}
        </div>
    )
}