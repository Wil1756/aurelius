"use client"

import { useMemo, useState } from "react";
import { TransactionFilters  as TFilters} from "./TransactionFilters";
import { filterTransactions } from "../lib/filter-transactions";
import { transactions } from "../data/tansaction";
import type { TransactionFilters } from "../types/transaction";
import { TransactionTable } from "./TransactionTable";

const initialFilters: TransactionFilters = {
    search: "",
    account: "all",
    category: "all",
    type: "all",
    dateRange: "all"
}


export function TransactionsWorkspace() {
    const [filters, setFilters] = useState<TransactionFilters>(initialFilters)

    const filteredTransactions = useMemo(
        () => filterTransactions(transactions, filters),[filters]
    )

    return (
        <div className="min-w-0">
            <TFilters
                filters={filters}
                onFiltersChange={setFilters}
            />
            <TransactionTable transactions={filteredTransactions}/>
        </div>
    )
}
