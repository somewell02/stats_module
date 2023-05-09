<template>
  <base-layout>
    <router-view />
  </base-layout>
</template>

<script lang="ts" setup>
import BaseLayout from "@/layouts/BaseLayout.vue";
import { useStatsStore } from "@/store/statsStore";

const statsStore = useStatsStore();
statsStore.initStats();
</script>
