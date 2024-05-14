import { setActivePinia, createPinia } from "pinia";
import { articlesMock } from "../../src/mock/articlesMock";
import { useArticleDetailStore } from "../../src/stores/articleDetailStore";
import router from "../../src/router";
import { useArticlesStore } from "../../src/stores/articlesStore";
import { periodsMock } from "../../src/mock/periodsMock";

describe("article Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("should get good articles id from params", async () => {
        const articleDetailStore = useArticleDetailStore();
        router.currentRoute.value.params.id = "1";
        const result = articleDetailStore.getArticleDetail;
        expect(result?.id).toBe(1);
    });

    it("getPeriodForSpecificArticle returns periods for specific article", () => {
        const articleDetailStore = useArticleDetailStore();
        const articleStore = useArticlesStore();
        articleStore.articles = articlesMock;

        const periods = periodsMock;
        articleDetailStore.periods = periods;

        const result = articleDetailStore.getPeriodForSpecificArticle;

        expect(result).toEqual([
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
        ]);
    });
});
