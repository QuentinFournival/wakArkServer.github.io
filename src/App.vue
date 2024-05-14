<template>
    <div class="background">
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import "./src/assets/variables/variables.scss";

.background {
    background: white;
    height: 100vh;
    margin: 0;
    padding: 0;
}
:where(.css-dev-only-do-not-override-16pw25h) a {
    color: white !important;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-pagination
    .ant-pagination-disabled
    .ant-pagination-item-link,
:where(.css-dev-only-do-not-override-16pw25h).ant-pagination
    .ant-pagination-disabled:hover
    .ant-pagination-item-link {
    color: white !important;
}
* {
    font-family: "Roboto", sans-serif;
}
.ant-layout {
    height: 100% !important;
}
.ant-menu-title-content {
    display: flex;
    align-items: center;
    height: 100%;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-pagination
    .ant-pagination-prev
    .ant-pagination-item-link,
:where(.css-dev-only-do-not-override-16pw25h).ant-pagination
    .ant-pagination-next
    .ant-pagination-item-link {
    color: white;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-pagination
    .ant-pagination-item-active {
    background: $color-text;
    border: none;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-table-wrapper
    .ant-table-thead
    > tr
    > th,
:where(.css-dev-only-do-not-override-16pw25h).ant-table-wrapper
    .ant-table-thead
    > tr
    > td {
    background: $color-side !important;
    color: white !important;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-table-wrapper
    .ant-table-column-sorter {
    color: white;
}
tr {
    background: $color-side;
    color: white;

    &:nth-child(odd) {
        background: $color-titre-avatar;
    }
}

:where(.css-dev-only-do-not-override-16pw25h).ant-table-wrapper
    .ant-table-tbody
    > tr.ant-table-row:hover
    > td,
:where(.css-dev-only-do-not-override-16pw25h).ant-table-wrapper
    .ant-table-tbody
    > tr
    > td.ant-table-cell-row-hover {
    background: none;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-table-wrapper
    td.ant-table-column-sort {
    background: transparent;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-menu-dark.ant-menu-horizontal
    > .ant-menu-item-selected,
:where(.css-dev-only-do-not-override-16pw25h).ant-menu-dark.ant-menu-horizontal
    > .ant-menu-submenu-selected {
    background: none;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-menu .ant-menu-item a {
    color: white !important;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-menu-dark {
    color: white;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-tabs {
    color: white;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-tabs
    .ant-tabs-tab.ant-tabs-tab-active
    .ant-tabs-tab-btn {
    color: white;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-tabs .ant-tabs-ink-bar {
    background: white;
}
:where(.css-dev-only-do-not-override-16pw25h)[class^="ant-table"]
    [class^="ant-table"],
:where(.css-dev-only-do-not-override-16pw25h)[class*=" ant-table"]
    [class^="ant-table"],
:where(.css-dev-only-do-not-override-16pw25h)[class^="ant-table"]
    [class*=" ant-table"],
:where(.css-dev-only-do-not-override-16pw25h)[class*=" ant-table"]
    [class*=" ant-table"] {
    overflow: auto;
    max-height: 65vh;
}
:where(.css-dev-only-do-not-override-16pw25h).ant-table-wrapper
    .ant-table-pagination.ant-pagination {
    overflow: inherit;
}
</style>
