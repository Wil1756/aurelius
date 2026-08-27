export function paginateTransactions<T>(items: T[], page: number, pageSize: number) {
    const totalItems = items.length
    const totalPages = Math.max(Math.ceil(totalItems / pageSize), 1)
    const safePage = Math.min(Math.max(page, 1), totalPages)
    const startIndex = (safePage - 1) * pageSize

    return {
        items: items.slice(
            startIndex,
            startIndex + pageSize,
        ),
        page: safePage,
        pageSize,
        totalItems,
        totalPages
    }
}