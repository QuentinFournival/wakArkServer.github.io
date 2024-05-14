import { setActivePinia, createPinia } from "pinia";
import { articlesMock } from "../../src/mock/articlesMock";
import { useArticlesStore } from "../../src/stores/articlesStore";
import router from "../../src/router";
import { vi } from "vitest";

describe("article Store", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("should get all articles", async () => {
        const articleStore = useArticlesStore();

        expect(articleStore.articles).toStrictEqual(articlesMock);
    });

    it("should search article with empty value", async () => {
        const articleStore = useArticlesStore();
        articleStore.searchInput === "";
        expect(articleStore.getArticlesFromSearch).toStrictEqual(null);
    });

    it("should go to detail view", async () => {
        const articleStore = useArticlesStore();

        const pushSpy = vi.spyOn(router, "push");

        articleStore.goToArticleDetails("1");

        expect(pushSpy).toHaveBeenCalledWith({
            name: "article-detail",
            params: { id: "1" },
        });
        pushSpy.mockRestore();
    });
});
