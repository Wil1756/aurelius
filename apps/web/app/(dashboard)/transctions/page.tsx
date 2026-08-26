import { TransactionFilters } from "../../../features/transactions/components/TransactionFilters";
import { TransactionSummary } from "../../../features/transactions/components/TransactionSummary";
import { TransactionTable } from "../../../features/transactions/components/TransactionTable";
import { TransactionHeader } from "../../../features/transactions/components/TransactionHeader";
import { TransactionsWorkspace } from "../../../features/transactions/components/TransactionWorkspace";

export default function TransactionPage() {
    return (
        <main className="min-w-0">
            <TransactionHeader/>
            <TransactionSummary/>
            <TransactionsWorkspace/>
        </main>
    )
}