import { TransactionsFilters } from "../../../features/transactions/components/TransactionFilters";
import { TransactionSummary } from "../../../features/transactions/components/TransactionSummary";
import { TransactionsHeader } from "../../../features/transactions/components/TransactionsHeader";

export default function TransactionPage() {
    return (
        <main className="min-w-0">
            <TransactionsHeader/>
            <TransactionSummary/>
            <TransactionsFilters/>
        </main>
    )
}