<template>
    <div class="container py-5 bg-light min-vh-100">
      <!-- Поле ввода нового сообщения -->
      <div class="card mb-4">
        <div class="card-body d-flex">
          <img :src="getAssetPath('media/misc/Avatar.png')" alt="User" class="rounded-circle me-3" width="40" height="40" />
          <textarea class="form-control" placeholder="Написать сообщение..." rows="2"></textarea>
        </div>
      </div>
  
      <!-- Пост 1 -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="d-flex align-items-center mb-2">
            <img :src="getAssetPath('media/misc/Avatar-girl.png')" alt="Жулдыз Арланова" class="rounded-circle me-3" width="40" height="40" />
            <div>
              <h6 class="mb-0">Жулдыз Арланова</h6>
              <small class="text-muted">Вчера в 16:34</small>
            </div>
          </div>
          <p>
            Коллеги, необходимо подписать выставленный акт выполненных работ за производственные работы на складе.
            <a href="#">@Темирлан Омаров</a> можете проверить.
          </p>
          <div class="d-flex gap-4 text-muted">
            <span>💬 24</span>
            <span>❤️ 75</span>
          </div>
        </div>
      </div>
  
      <!-- Пост 2 -->
      <div class="card mb-4">
        <div class="card-body">
          <div class="d-flex align-items-center mb-2">
            <img :src="getAssetPath('media/misc/Avatar.png')" alt="Данияр Муратханов" class="rounded-circle me-3" width="40" height="40" />
            <div>
              <h6 class="mb-0">Данияр Муратханов</h6>
              <small class="text-muted">Вчера в 13:26</small>
            </div>
          </div>
          <img :src="getAssetPath('media/misc/banner.jpg')" class="img-fluid rounded mb-3" alt="Banner" />
          <p>
            Вчера были доделаны конструкторские работы от нашего подрядчика ТОО “СтройМаксимум”. Прошу проверьте работу и оставьте свои комментарии.
          </p>
          <div class="d-flex gap-4 text-muted">
            <span>💬 24</span>
            <span>❤️ 75</span>
          </div>
        </div>
      </div>
  
      <!-- Пост 3 -->
      <div class="card">
        <div class="card-body">
          <div class="d-flex align-items-center mb-2">
            <img :src="getAssetPath('media/misc/Avatar-girl.png')" alt="Жулдыз Арланова" class="rounded-circle me-3" width="40" height="40" />
            <div>
              <h6 class="mb-0">Жулдыз Арланова</h6>
              <small class="text-muted">13 августа 2025 в 14:43</small>
            </div>
          </div>
          <p>
            Выставила задачи касательно нашего проекта в городе Алматы. Коллеги, необходимо будет проверить поставленные таски и отписаться о сроке выполнения.
          </p>
          <div class="d-flex gap-4 text-muted mb-3">
            <span>💬 24</span>
            <span>❤️ 75</span>
          </div>
  
          <!-- Комментарии -->
          <div class="border-top pt-3">
            <div class="d-flex mb-3">
              <img :src="getAssetPath('media/misc/Avatar.png')" alt="Арслан Сергаззы" class="rounded-circle me-3" width="32" height="32" />
              <div>
                <div class="fw-bold">Арслан Сергаззы</div>
                <small class="text-muted">13 августа 2025 в 15:32</small>
                <p>Можете пожалуйста приложить документы по проекту, чтобы понимать задание</p>
              </div>
            </div>
  
            <div class="d-flex">
              <img :src="getAssetPath('media/misc/Avatar-girl.png')" alt="Бибигуль Ренатова" class="rounded-circle me-3" width="32" height="32" />
              <div>
                <div class="fw-bold">Бибигуль Ренатова</div>
                <small class="text-muted">13 августа 2025 в 17:01</small>
                <p>Проверила и отписалась вам в задаче. Прошу проверить.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { getAssetPath } from "@/core/helpers/assets";
  
  export default defineComponent({
    name: "EventsPage",
    setup() {
      return {
        getAssetPath,
      };
    },
  });
  </script>
  
  <style scoped>
  body {
    background-color: #f8f9fa;
  }
  </style>
  