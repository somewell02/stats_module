<template>
  <div class="stats-table-view">
    <div v-if="statsStore.hasStatsData" class="stats-table-list">
      <div
        v-for="item in statsStore.getStatsData"
        :key="item.id"
        class="stats-table-list__item bordered-div"
      >
        <base-table
          :data="modifyDataForTable(item.data)"
          :titles="tableTitles"
          :title="item.name"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseTable from "@/components/tables/BaseTable.vue";

import { useStatsStore } from "@/store/statsStore";
import { statsValue } from "@/types/stats";
import { msToDayMonthYear } from "@/services/datetime";
import { ref } from "vue";

const statsStore = useStatsStore();

const tableTitles = ref(["Дата", "Значение"]);

const modifyDataForTable = (data: statsValue[]): string[][] => {
  return data.map((item) => {
    const date = msToDayMonthYear(item[0]);
    const value = item[1].toString();
    return [date, value];
  });
};
</script>

<style lang="scss" scoped>
.stats-table-list {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
</style>
