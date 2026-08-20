"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    ArrowLeftRight,
    BarChart3,
    CircleHelp,
    Download,
    FileChartColumn,
    LayoutDashboard,
    PiggyBank,
    Settings,
    Sparkles,
    Target,
    WalletCards,
  } from "lucide-react";

const icons = {
    dashboard: LayoutDashboard,
    transactions: ArrowLeftRight,
    accounts: WalletCards,
    budgets: PiggyBank,
    goals: Target,
    analytics: BarChart3,
    advisor: Sparkles,
    import: Download,
    reports: FileChartColumn,
    settings: Settings,
    help: CircleHelp,
  }

export type SidebarIconName = keyof typeof icons

interface SidebarItemsProps {
    label: string
    href: string
    icon: SidebarIconName
}

export function SidebarItem ({label, href, icon}: SidebarItemsProps) {
    const pathname = usePathname();
    const Icon = icons[icon]

    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return (
        <Link href={href} aria-current={isActive ? "page" : undefined}
            className={["group flex items-center gap-3 rounded-lg px-3 py-2.5",
                "text-sm font-medium transition-colors duration-150", isActive 
                ? ["bg-[rgba(37,214,162,0.10)]","text-[var(--primary)]", "shadow-[inset_0_0_0_1px_rgba(37,214,162,0.14)]",].join("")
                :["text-[var(--muted)]", "hover:bg-white/[0.04]", "hover:text-[var(--foreground)]"].join(""),].join("")
            }
        >
            <Icon size={18} strokeWidth={isActive ? 2.2 : 1.8} className="shrink-0"/>
            <span className="truncate">{label}</span>
            {isActive && (
                <span aria-hidden ="true" className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--primary)]"/>
            )}
        </Link>
    )
}