import { computed, ref } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import { Article } from "../models/article";
import { articlesMock } from "../mock/articlesMock";
import router from "../router";

export const useArticlesStore = defineStore("article", () => {
    // State
    const articles: Ref<Article[]> = ref(articlesMock);
    const searchInput: Ref<string> = ref("");

    // Getters
    const getArticles = computed(() => articles.value);

    // Actions
    const getArticlesFromSearch = computed(() => {
        return searchInput.value !== ""
            ? getArticles.value.filter((article) =>
                  article.numero
                      .toString()
                      .toLocaleLowerCase()
                      .startsWith(searchInput.value.toLocaleLowerCase())
              )
            : null;
    });

    const goToArticleDetails = (id: string) => {
        router.push({
            name: "article-detail",
            params: {
                id,
            },
        });
    };

    return {
        // state
        articles,
        searchInput,

        // Getters
        getArticles,
        // Actions
        getArticlesFromSearch,
        goToArticleDetails,
    };
});
