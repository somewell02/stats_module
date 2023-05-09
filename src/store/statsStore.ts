import { defineStore } from "pinia";
import { computed, ref } from "vue";

import { StatsData, StatsItem } from "@/types/stats";
import { getAllStats } from "@/data/api/statsApi";

export const useStatsStore = defineStore("stats-store", () => {
  const statsData = ref<StatsData>();

  const initStats = async (): Promise<void> => {
    const stats = await getAllStats();
    statsData.value = stats ?? {
      data: [],
      has_data: false,
    };
  };

  const getStatsData = computed<StatsItem[]>(() =>
    statsData.value ? statsData.value?.data : []
  );

  const hasStatsData = computed<boolean>(() =>
    statsData.value ? statsData.value?.has_data : false
  );

  return { statsData, initStats, getStatsData, hasStatsData };
});
