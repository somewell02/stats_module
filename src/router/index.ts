import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: { name: "stats-chart" },
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("@/views/stats/StatsView.vue"),
    redirect: { name: "stats-chart" },
    children: [
      {
        path: "chart",
        name: "stats-chart",
        component: () => import("@/views/stats/StatsChartView.vue"),
      },
      {
        path: "table",
        name: "stats-table",
        component: () => import("@/views/stats/StatsTableView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
