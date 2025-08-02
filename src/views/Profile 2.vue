<template>
    <div class="container my-4">
        <!-- Header -->
        <div class="flex flex-col gap-8 justify-between mb-4">
            <div class="card d-flex pt-7 px-7 mb-4">
                <div class="d-flex flex-row align-items-start">
                    <img :src="getAssetPath('media/misc/profile.png')" alt="Данияр Муратханов" class="rounded me-6"
                        width="120" height="120" />
                    <div class="flex-grow-1">
                        <h5 class="mb-0">
                            Батырхан Алиханов
                            <span class="badge bg-success text-success bg-opacity-25 mb-2 ms-2">Администратор</span>
                        </h5>
                        <div class="d-flex gap-4 text-muted">
                            <div>
                                <img :src="getAssetPath('media/misc/users.svg')" alt="arrow-up" class="rounded me-1" />
                                Интегратор CRM
                            </div>
                            <div>
                                <img :src="getAssetPath('media/misc/geolocation.svg')" alt="arrow-up"
                                    class="rounded me-1" />
                                г. Астана, ул. Мангилик Ел
                            </div>
                            <div>
                                <img :src="getAssetPath('media/misc/sms.svg')" alt="arrow-up" class="rounded me-1" />
                                info@crm.kz
                            </div>
                        </div>
                        <div class="d-flex gap-2 mt-7">
                            <div class="border p-2 rounded" style="border-style: dashed;">
                                <div class="d-flex gap-1 align-items-center">
                                    <img :src="getAssetPath('media/misc/arrow-up.svg')" alt="arrow-up"
                                        class="rounded me-2" />
                                    <p class="text-center m-0 fw-bold">33%</p>
                                </div>
                                <p class="text-muted m-0">Продуктивность</p>
                            </div>
                            <div class="border p-2 rounded" style="border-style: dashed;">
                                <div class="d-flex gap-1 align-items-center">
                                    <img :src="getAssetPath('media/misc/arrow-down.svg')" alt="arrow-down"
                                        class="rounded me-2" />
                                    <p class="text-center m-0 fw-bold">23</p>
                                </div>
                                <p class="text-muted m-0">Сделки</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex gap-3">
                        <button type="button" class="btn btn-sm btn-light text-muted px-3">Уволить</button>
                        <button type="button" class="btn btn-sm btn-primary px-3">Назначить роль</button>
                        <button type="button" class="btn btn-sm p-0 d-flex align-items-center">
                            <img :src="getAssetPath('media/misc/dots-square.svg')" alt="dots" class="rounded" />
                        </button>
                    </div>
                </div>
                <!-- Metronic Bootstrap Tabs -->
                <ul class="nav nav-tabs nav-line-tabs fs-6 mt-4">
                    <li class="nav-item">
                        <a class="nav-link active" data-bs-toggle="tab" href="#tab-profile">Профиль</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-settings">Настройки</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-tasks">Задачи</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-calendar">Календарь</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-disk">Диск</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="tab" href="#tab-feed">Лента</a>
                    </li>
                </ul>
            </div>


            <div class="tab-content">
                <!-- Profile Tab -->
                <div class="tab-pane fade show active" id="tab-profile">
                    <p class="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore...
                    </p>
                </div>

                <!-- Settings Tab -->
                <div class="tab-pane fade" id="tab-settings">
                    <!-- Profile Form -->
                    <div class="card p-4 pt-7 mb-4">
                        <h5 class="mb-4 fw-semibold">Данные профиля</h5>
                        <form>
                            <!-- Avatar Row -->
                            <div class="row mb-4 align-items-center">
                                <div class="col-md-3 fw-semibold">Аватар</div>
                                <div class="text-center">
                                    <div class="rounded-4 overflow-hidden d-inline-block position-relative"
                                        style="width: 160px; height: 160px; background-color: #f8f9fa;">
                                        <img :src="getAssetPath('media/misc/profile.png')" alt="Аватар"
                                            class="w-100 h-100 object-fit-cover" />
                                        <div
                                            class="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-3 mt-4">
                                            <button type="button" class="btn btn-light rounded-4 shadow-sm p-2">
                                                <i class="bi bi-x fs-5 pe-0"></i>
                                            </button>
                                            <button type="button" class="btn btn-light rounded-4 shadow-sm p-2">
                                                <i class="bi bi-pencil fs-5 pe-0"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="text-muted small mt-3">Доступные типы: png, jpg, jpeg.</div>
                                </div>
                            </div>

                            <!-- Full Name -->
                            <div class="row mb-3">
                                <div class="col-md-3 fw-semibold">Полное имя <span class="text-danger">*</span></div>
                                <div class="col-md-4 mb-2 mb-md-0">
                                    <input type="text" class="form-control bg-light border-0" placeholder="Батырхан"
                                        disabled />
                                </div>
                                <div class="col-md-5">
                                    <input type="text" class="form-control bg-light border-0" placeholder="Алиханов"
                                        disabled />
                                </div>
                            </div>

                            <!-- Phone -->
                            <div class="row mb-3">
                                <div class="col-md-3 fw-semibold">
                                    Телефон <span class="text-danger">*</span> <i class="bi bi-info-circle"></i>
                                </div>
                                <div class="col-md-9">
                                    <input type="tel" class="form-control bg-light border-0"
                                        placeholder="+7 777 777 7777" disabled />
                                </div>
                            </div>

                            <!-- Country -->
                            <div class="row mb-3">
                                <div class="col-md-3 fw-semibold">
                                    Страна <span class="text-danger">*</span> <i class="bi bi-info-circle"></i>
                                </div>
                                <div class="col-md-9">
                                    <select class="form-select bg-light border-0" disabled>
                                        <option selected disabled>Выберите страну…</option>
                                        <option>Казахстан</option>
                                        <option>Россия</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Timezone -->
                            <div class="row mb-4">
                                <div class="col-md-3 fw-semibold">Часовой пояс <span class="text-danger">*</span></div>
                                <div class="col-md-9">
                                    <select class="form-select bg-light border-0" disabled>
                                        <option selected disabled>Выберите часовой пояс</option>
                                        <option>GMT +5</option>
                                        <option>GMT +6</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="d-flex justify-content-end mt-10">
                                <button type="button" class="btn btn-light me-2">Discard</button>
                                <button type="submit" class="btn btn-primary">Save Changes</button>
                            </div>
                        </form>
                    </div>

                    <!-- Account Info -->
                    <div class="card p-4 pt-7 mb-4">
                        <h5 class="mb-8">Данные аккаунта</h5>
                        <div class="mb-3">
                            <label class="form-label">Почта</label>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>support@keenthemes.com</span>
                                <button class="btn btn-sm btn-light">Поменять почту</button>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Пароль</label>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>**************</span>
                                <button class="btn btn-sm btn-light">Восстановить пароль</button>
                            </div>
                        </div>
                        <div
                            class="bg-primary border border-primary bg-opacity-10 alert d-flex justify-content-between align-items-center mt-4">
                            <div class="d-flex gap-2">
                                <img :src="getAssetPath('media/misc/shield-cross.svg')" alt="arrow-up"
                                    class="rounded me-1" />
                                <div>
                                    <p class="m-0 fw-bolder">Защитите свой аккаунт</p>
                                    <p class="m-0 text-muted">Подключите функцию двухфакторной аутентификации</p>
                                </div>
                            </div>
                            <button class="btn btn-primary btn-sm">Подключить</button>
                        </div>
                    </div>

                    <!-- Delete Account -->
                    <div class="card shadow-sm border-0 rounded-3 mx-auto">
                        <div class="card-body p-4 pt-8">
                            <h5 class="card-title mb-8">Удалить аккаунт</h5>
                            <div class="alert alert-warning border-warning bg-warning bg-opacity-10 rounded-2 mb-4">
                                <p class="m-0 fw-bolder text-warning">Обратите внимание!</p>
                                <p class="m-0 text-muted">Эта процедура необратима...</p>
                            </div>
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="checkbox" id="confirmDelete" />
                                <label class="form-check-label text-muted" for="confirmDelete">
                                    Я подтверждаю, что хочу удалить аккаунт
                                </label>
                            </div>
                            <div class="text-end">
                                <button class="btn btn-danger px-4" id="deleteButton" disabled>Удалить аккаунт</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Other Tabs -->
                <div class="tab-pane fade" id="tab-tasks">
                    <p>Задачи контент…</p>
                </div>
                <div class="tab-pane fade" id="tab-calendar">
                    <p>Календарь контент…</p>
                </div>
                <div class="tab-pane fade" id="tab-disk">
                    <p>Диск контент…</p>
                </div>
                <div class="tab-pane fade" id="tab-feed">
                    <p>Лента контент…</p>
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
.card {
    border-radius: 1rem;
}
</style>