<template>
  <header class="base-header container">
    <div class="base-header__title">
      <h1>Анализ данных</h1>
    </div>
    <nav class="base-header__nav">
      <router-link class="base-header__nav-item" :to="{ name: 'stats-chart' }">
        <base-button :is-active="route.name === 'stats-chart'">
          График
        </base-button>
      </router-link>
      <router-link class="base-header__nav-item" :to="{ name: 'stats-table' }">
        <base-button :is-active="route.name === 'stats-table'">
          Таблица
        </base-button>
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import BaseButton from "@/components/buttons/BaseButton.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped>
.base-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;

  &__title {
    text-align: center;
  }

  &__nav {
    display: flex;
    align-items: center;
    column-gap: 20px;

    @include media-xs {
      width: 100%;
      flex-direction: column;
      row-gap: 20px;

      &-item,
      :deep(.base-button) {
        width: 100%;
      }
    }
  }
}
</style>
