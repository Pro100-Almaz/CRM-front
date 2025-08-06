<template>
  <div class="card p-4" style="width: 320px;">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div class="fw-bold fs-5">{{ title }}</div>
      <div v-if="amount" class="badge bg-success text-success text-success bg-opacity-25 fw-semibold">{{ amount }}</div>
    </div>

    <draggable
      v-model="localTasks"
      :group="group"
      item-key="title"
      class="d-flex flex-column gap-3"
      ghost-class="bg-light-primary"
    >
      <template #item="{ element: task }">
        <div
          class="bg-light rounded p-3 position-relative"
        >
          <!-- Colored Tag -->
          <div v-if="task.date" class="badge bg-light-{{ task.color }} text-{{ task.color }} mb-2">
            {{ task.date }}
          </div>

          <div class="fw-semibold">{{ task.title }}</div>
          <div class="text-muted small">{{ task.company }}</div>

          <!-- Price -->
          <div class="position-absolute top-25 end-0 m-2 text-success fw-bold small">
            {{ task.amount }}
          </div>

          <!-- Edit icon -->
          <i
            v-if="task.editable"
            class="bi bi-pencil position-absolute top-0 end-0 m-2 me-4 text-muted"
            style="cursor: pointer;"
          ></i>

          <!-- Avatar -->
        </div>
      </template>
    </draggable>

    <!-- Add button -->
    <div class="text-center mt-4">
      <button class="btn btn-light-primary w-100">
        <i class="bi bi-plus-circle me-2"></i> Добавить заявку
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import draggable from "vuedraggable";

const props = defineProps({
  title: String,
  amount: String,
  tasks: Array,
  group: String,
});

const emit = defineEmits(["update:tasks"]);

const localTasks = computed({
  get: () => props.tasks,
  set: (val) => emit("update:tasks", val),
});
</script>
