<template>
    <div>
        <Construction />
    </div>
</template>

<script setup lang="ts">
import Construction from "../components/construction.vue";
import { useArticlesStore } from "../stores/articlesStore";

const { articles } = useArticlesStore();
</script>
