<template>
  <div class="stats-chart-view">
    <div v-if="statsStore.hasStatsData" class="stats-chart-list">
      <div
        v-for="item in statsStore.getStatsData"
        :key="item.id"
        class="stats-chart-list__item bordered-div"
      >
        <line-chart
          :data="item.data"
          :title="item.name"
          y-axis="Значение"
          line-name="Показатель"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LineChart from "@/components/charts/LineChart.vue";

import { useStatsStore } from "@/store/statsStore";

const statsStore = useStatsStore();
</script>

<style lang="scss" scoped>
.stats-chart-list {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
</style>
