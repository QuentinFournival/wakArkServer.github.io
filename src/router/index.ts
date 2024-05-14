import {
    createMemoryHistory,
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
    type Router,
} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "index",
        component: import("../views/index.vue"),
    },
    {
        path: "/leaderboard",
        name: "leaderboard",
        component: () => import("../views/leaderboard.vue"),
    },
];
const isServer = typeof window === "undefined";
const history = isServer
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL);

const routerOptions = {
    routes,
};

const router = createRouter(routerOptions);
export default router;
