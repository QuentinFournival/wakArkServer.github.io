import { Period } from "../models/period";

export const periodsMock: Period[] = [
    {
        article_id: 1,
        start_date: "2023-02-01",
        end_date: "2023-02-14",
        type: "SEASON",
        score: 10,
    },
    {
        article_id: 1,
        start_date: "2023-01-01",
        end_date: "2023-06-05",
        type: "OPERATION",
        score: 8,
    },
    {
        article_id: 2,
        start_date: "2023-03-01",
        end_date: "2023-12-14",
        type: "OPERATION",
        score: 8,
    },
    {
        article_id: 3,
        start_date: "2023-03-15",
        end_date: "2023-03-31",
        type: "SEASON",
        score: 15,
    },
];



