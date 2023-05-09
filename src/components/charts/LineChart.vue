<template>
  <div class="value-line-chart">
    <high-chart v-if="props.data" :options="chartOptions" />
  </div>
</template>

<script lang="ts" setup>
import { Chart as HighChart, ChartOptions } from "highcharts-vue";
import { computed } from "vue";
import { msToDayMonthYear } from "@/services/datetime";
import { statsValue } from "@/types/stats";

interface Props {
  data: statsValue[];
  title?: string;
  yAxis?: string;
  lineName?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  yAxis: "",
  lineName: "",
});

const chartOptions = computed<ChartOptions>(() => {
  if (!props.data) return {};

  return {
    chart: {
      type: "line",
    },
    title: {
      text: props.title,
      align: "center",
    },
    yAxis: {
      title: {
        text: props.yAxis,
      },
    },
    xAxis: {
      categories: props.data.map((val) => msToDayMonthYear(val[0])),
    },
    legend: {
      layout: "horizontal",
      align: "center",
      verticalAlign: "bottom",
    },
    series: [
      {
        name: props.lineName,
        data: props.data.map((val) => val[1]),
      },
    ],
  } as ChartOptions;
});
</script>
