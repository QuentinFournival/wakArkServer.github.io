import { defineStore } from "pinia";
import { Article } from "../models/article";
import router from "../router";
import { useArticlesStore } from "./articlesStore";
import { Ref, computed, ref } from "vue";
import { Period } from "../models/period";
import { periodsMock } from "../mock/periodsMock";

export const useArticleDetailStore = defineStore("articleDetail", () => {
    const articlesStore = useArticlesStore();

    // State
    const articleDetail: Ref<Article> = ref({} as Article);
    const periods: Ref<Period[]> = ref(periodsMock);
    const startDate: Ref<string> = ref(new Date().toISOString().split("T")[0]);
    const lastDate: Ref<string> = ref("2999-12-13");
    const type: Ref<string> = ref("CUSTOM");
    const score: Ref<string> = ref("12");
    const openCreation: Ref<boolean> = ref(false);
    const showAddBtn: Ref<boolean> = ref(true);
    const specificPeriodForArticle: Ref<Period[]> = ref([]);
    const editingIndex: Ref<number> = ref(-1);
    const editedValues: Ref<Period> = ref({} as Period);

    // Getters

    const getArticleDetail = computed(() => {
        const articleId = router.currentRoute.value.params.id;
        return (
            articlesStore.articles.find(
                (article) => article.id === +articleId
            ) || null
        );
    });

    const getPeriodForSpecificArticle = computed(() => {
        return (specificPeriodForArticle.value = periods.value.filter(
            (period: Period) => period.article_id === getArticleDetail.value?.id
        ));
    });

    // Actions
    const toggleCreationLine = () => {
        openCreation.value = !openCreation.value;
    };

    const loadArticleDetail = (articleId: number) => {
        const article = articlesStore.articles.find(
            (article) => article.id === articleId
        );
        if (article) {
            articleDetail.value = article;
        }
    };

    const addPeriod = () => {
        const newPeriod: Period = {
            article_id: +articleDetail.value.id,
            start_date: startDate.value,
            end_date: lastDate.value,
            type: type.value,
            score: +score.value,
        };

        specificPeriodForArticle.value.push(newPeriod);
        showAddBtn.value = false;
        toggleCreationLine();
    };
    const deletePeriod = (index: number) => {
        specificPeriodForArticle.value.splice(index, 1);
        editingIndex.value = -1;
        showAddBtn.value = true;
    };
    const toggleEdit = (index) => {
        editingIndex.value = index;
    };
    const editEvent = (event) => {
        editedValues.value = {
            article_id: +articleDetail.value.id,
            start_date: event.start_date,
            end_date: event.end_date,
            type: event.type,
            score: event.score,
        };
        showAddBtn.value = false;
        cancelEdit();
    };
    const goBack = () => {
        router.go(-1);
        showAddBtn.value = true;
    };

    const cancelEdit = () => {
        editingIndex.value = -1;
    };
    return {
        // State
        articleDetail,
        startDate,
        lastDate,
        type,
        score,
        openCreation,
        toggleCreationLine,
        specificPeriodForArticle,
        showAddBtn,
        periods,
        editingIndex,
        editedValues,

        // Getters
        getArticleDetail,
        getPeriodForSpecificArticle,

        // Actions
        loadArticleDetail,
        addPeriod,
        deletePeriod,
        cancelEdit,
        editEvent,
        toggleEdit,
        goBack,
    };
});
