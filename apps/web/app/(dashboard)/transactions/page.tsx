import { TransactionSummary } from "../../../features/transactions/components/TransactionSummary";
import { TransactionHeader } from "../../../features/transactions/components/TransactionHeader";
import { TransactionWorkspace } from "../../../features/transactions/components/TransactionWorkspace";

export default function TransactionPage() {
    return (
        <main className="min-w-0">
            <TransactionHeader/>
            <TransactionSummary/>
            <TransactionWorkspace/>
        </main>
    )
}