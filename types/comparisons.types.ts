export type DailyStats = {
    calories: number;
    weight: number;
    carbs: number;
    fat: number;
    protein: number;
    sugar: number;
}

export const statHeadings = [
    "calories",
    "carbs",
    "fat",
    "protein",
    "sugar",
    "weight",
] as const;
