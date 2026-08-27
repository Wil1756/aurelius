"use client"

import { useMemo, useState } from "react";
import { TransactionFilters  as TFilters} from "./TransactionFilters";
import { filterTransactions } from "../lib/filter-transactions";
import { transactions } from "../data/transaction";
import type { TransactionFilters, TransactionSortDirection, TransactionSortField } from "../types/transaction";
import { TransactionTable } from "./TransactionTable";
import { sortTransaction } from "../lib/sort-transactions";
import { paginateTransactions } from "../lib/paginate-transactions";
import { TransactionPagination } from "./TransactionPagination";

const initialFilters: TransactionFilters = {
    search: "",
    account: "all",
    category: "all",
    type: "all",
    dateRange: "all"
}


export function TransactionsWorkspace() {
    const [filters, setFilters] = useState<TransactionFilters>(initialFilters)
    const [sortField, setSortField] = useState<TransactionSortField>("date")
    const [sortDirection, setSortDirection] = useState<TransactionSortDirection>("desc")
    const [page, setPage] = useState(1)

    const PAGE_SIZE = 5
    const filteredTransactions = useMemo(
        () => filterTransactions(transactions, filters),[filters]
    )

    const sortedTransactions = useMemo(
        () => 
            sortTransaction(
                filteredTransactions,
                sortField,
                sortDirection
            ),
            [
                filteredTransactions,
                sortField,
                sortDirection
            ]
    )

    const paginatedTransactions = useMemo(
        () => 
            paginateTransactions(
                sortedTransactions,
                page,
                PAGE_SIZE
            ),
            [
                sortedTransactions,
                page
            ]
    )

    function handleFiltersChange(nextFilters: TransactionFilters) {
        setFilters(nextFilters)
        setPage(1)
    }

    return (
        <div className="min-w-0">
            <TFilters
                filters={filters}
                onFiltersChange={handleFiltersChange}
            />
            <TransactionTable 
                transactions={paginatedTransactions.items}
                sortField={sortField}
                sortDirection={sortDirection}
                onSortChange={(field) => {
                    if(field === sortField) {
                        setSortDirection((current) =>
                            current === "asc"
                            ? "desc"
                            : "asc"
                        )
                    } else {
                        setSortField(field)
                        setSortDirection("desc")
                    }
                    setPage(1)
                }}

            />
            <TransactionPagination
                page={paginatedTransactions.page}
                totalPages={paginatedTransactions.totalPages}
                totalItems={paginatedTransactions.totalItems}
                pageSize={PAGE_SIZE}
                onPageChange={setPage}
            />
        </div>
    )
}

  