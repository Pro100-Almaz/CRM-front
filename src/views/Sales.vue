<template>
    <!-- Full height wrapper (adjust height as needed) -->
    <div class="kanban-wrapper position-relative" style="height: calc(100vh - 100px);">
      <!-- Horizontal scroll -->
      <div class="overflow-x-auto d-flex flex-row align-items-start gap-4 mt-8 h-100" style="white-space: nowrap;">
        <!-- Existing Columns -->
        <div
          v-for="(column, index) in columns"
          :key="index"
          class="flex-shrink-0"
          style="width: 320px; height: 100%;"
        >
          <KanbanColumn
            :title="column.title"
            :amount="column.amount"
            v-model:tasks="columns[index].tasks"
            :group="'kanban-group'"
          />
        </div>
  
        <!-- Add New Column Button -->
        <div
          class="d-flex justify-content-center align-items-start flex-shrink-0"
          style="width: 320px; min-height: 150px;"
        >
          <button class="btn btn-light-primary w-100" @click="addColumn">
            <i class="bi bi-plus-circle me-2"></i> Добавить столбец
          </button>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { ref } from "vue";
import KanbanColumn from "@/components/sales/KanbanColumn.vue";

const columns = ref([
    {
        title: "Новые",
        amount: null,
        tasks: [],
    },
    {
        title: "В процессе",
        amount: "694 000 тг",
        tasks: [
            {
                date: "15.03.2025",
                title: "Продажа цемента",
                company: "Алихан Т., ТОО 'СтройТоп'",
                color: "warning",
                amount: "15 000 тг",
            },
            {
                title: "Заливка бетона",
                company: "Алина Б., ИП 'ЖилойКомплекс'",
                color: "success",
                amount: "34 000 тг",
            },
            {
                date: "25.03.2025",
                title: "Управление финансами",
                company: "Темирлан Р., ТОО 'ФинансРезиденс'",
                color: "info",
                amount: "21 000 тг",
            },
            {
                date: "03.03.2025",
                title: "Строительство",
                company: "Гульнара Н., ИП 'Триумф'",
                color: "danger",
                amount: "624 000 тг",
                editable: true,
            },
        ],
    },
    {
        title: "Завершенные",
        amount: null,
        tasks: [],
    },
]);

function addColumn() {
    const index = columns.value.length + 1;
    columns.value.push({
        title: `Новая колонка ${index}`,
        amount: null,
        tasks: [],
    });
}
</script>