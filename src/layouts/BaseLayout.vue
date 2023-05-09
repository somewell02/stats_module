<template>
  <div class="base-layout">
    <base-header class="base-layout__header" />
    <main class="base-layout__main container">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import BaseHeader from "@/components/layout/BaseHeader.vue";
</script>

<style lang="scss" scoped>
.base-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  padding: 30px 0;

  &__main {
    flex-grow: 3;
  }
}
</style>
