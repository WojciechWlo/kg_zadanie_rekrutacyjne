import { DebtData, sortDirection } from "./Types";

function sortDebts(
    data: DebtData | null,
    column: string,
    direction: sortDirection
): DebtData {
    if (!data) return [];

    return [...data].sort((item1, item2) => {
        const key = column as keyof typeof item1;

        const aVal = item1[key];
        const bVal = item2[key];

        let comparison = 0;

        // Sprawdzamy typy danych, aby porównać wartości
        if (typeof aVal === 'number' && typeof bVal === 'number') {
            comparison = aVal - bVal;
        } else if (typeof aVal === 'string' && typeof bVal === 'string') {
            comparison = aVal.localeCompare(bVal);
        } else if (aVal instanceof Date && bVal instanceof Date) {
            comparison = aVal.getTime() - bVal.getTime();
        } else {
            comparison = String(aVal).localeCompare(String(bVal));
        }

        return direction === 'asc' ? comparison : -comparison;
    });
}

export default sortDebts;