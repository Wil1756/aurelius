import { SidebarIconName } from "./SidebarItem"

export const navigationItems = [
    {
        label: "Overview",
        href: "/",
        icon: "dashboard",
        section: "primary"
    },
    {
        label: "Transactions",
        href: "/transactions",
        icon: "transactions",
        section: "primary"
    },
    {
        label: "Accounts",
        href: "/accounts",
        icon: "accounts",
        section: "primary"
    },
    {
        label: "Budgets",
        href: "/budgets",
        icon: "budgets",
        section: "primary"
    },
    {
        label: "Goals",
        href: "/goals",
        icon: "goals",
        section: "primary"
    },
    {
        label: "Analytics",
        href: "/analytics",
        icon: "analytics",
        section: "primary"
    },
    {
        label: "AI advisor",
        href: "/advisor",
        icon: "advisor",
        section: "primary"
    },
    {
        label: "Import",
        href: "/import",
        icon: "import",
        section: "secondary"
    },
    {
        label: "Reports",
        href: "/reports",
        icon: "reports",
        section: "secondary"
    },
    {
        label: "Settings",
        href: "/settings",
        icon: "settings",
        section: "tertiary"
    },
    {
        label: "Help & support",
        href: "/help",
        icon: "help",
        section: "tertiary"
    }
] satisfies ReadonlyArray<{
    label: string
    href: string
    icon: SidebarIconName
    section: "primary" | "secondary" | "tertiary"
}>