export const CalendarComponents = ["one", "two"] as const;
export type CalendarComponent = typeof CalendarComponents[number];
