<template>
  <div class="base-table">
    <div v-if="title" class="base-table__title">
      <h3>{{ title }}</h3>
    </div>
    <table class="base-table__content">
      <tr
        v-if="titles?.length"
        class="base-table__content-row base-table__content-titles"
      >
        <th
          v-for="title in titles"
          :key="title"
          class="base-table__content-row-cell base-table__content-titles-item"
        >
          {{ title }}
        </th>
      </tr>
      <tr
        v-for="item in data"
        :key="JSON.stringify(item)"
        class="base-table__content-row"
      >
        <td
          v-for="value in item"
          :key="value"
          class="base-table__content-row-cell"
        >
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface Props {
  data: string[][];
  title?: string;
  titles?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
});

const rowLength = computed<number>(() => props.data[0].length);
</script>

<style lang="scss" scoped>
.base-table {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__title {
    text-align: center;
  }

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-collapse: collapse;

    &-titles {
      border-radius: var(--base-rounded) var(--base-rounded) 0 0;
      overflow: hidden;

      &-item {
        background: var(--primary-color);
        color: var(--primary-text-color);
      }
    }

    &-row {
      display: grid;
      grid-template-columns: repeat(v-bind(rowLength), 1fr);

      &:nth-child(even) {
        background-color: #f2f2f2;
      }

      &:not(:last-of-type) {
        border-bottom: 1px solid var(--border-color);
      }

      &:last-of-type {
        border-radius: 0 0 var(--base-rounded) var(--base-rounded);
      }

      &-cell {
        display: flex;
        padding: 10px 20px;

        &:not(:last-of-type) {
          border-right: 1px solid var(--border-color);
        }
      }
    }
  }
}
</style>
