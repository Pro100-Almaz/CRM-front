<template>
  <!--begin::Menu-->
  <div class="hover-scroll-overlay-y my-1 my-lg-2" id="kt_aside_menu_wrapper" data-kt-scroll="true"
    data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
    data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu" data-kt-scroll-offset="5px">
    <div id="kt_aside_menu"
      class="menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-semibold"
      data-kt-menu="true">


      <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="'/events'" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="chart-simple-2" icon-class="fs-5" :class="{ 'text-primary': route.path === '/events' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5" :class="{ 'text-primary': route.path === '/events' }">Продвижения</span>
        </router-link>
      </div>
      <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="'/events'" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="people" icon-class="fs-5" :class="{ 'text-primary': route.path === '' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5" :class="{ 'text-primary': route.path === '' }">Понимания</span>
        </router-link>
      </div>
      <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="'/sales'" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="book" icon-class="fs-5" :class="{ 'text-primary': route.path === '/sales' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5" :class="{ 'text-primary': route.path === '/sales' }">Продажи</span>
        </router-link>
      </div>
      <!-- <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="'/events'" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="home" icon-class="fs-5" :class="{ 'text-primary': route.path === '/events' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5">Лента</span>
        </router-link>
      </div> -->
      <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="'/events'" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="bill" icon-class="fs-5" :class="{ 'text-primary': route.path === '' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5" :class="{ 'text-primary': route.path === '' }">Доходов</span>
        </router-link>
      </div>
      <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="'/events'" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="credit-cart" icon-class="fs-5" :class="{ 'text-primary': route.path === '' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5" :class="{ 'text-primary': route.path === '' }">Расходов</span>
        </router-link>
      </div>

      <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="'/events'" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="notepad-edit" icon-class="fs-5" :class="{ 'text-primary': route.path === '' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5" :class="{ 'text-primary': route.path === '' }">Учета</span>
        </router-link>
      </div>

      <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="''" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="note-2" icon-class="fs-5" :class="{ 'text-primary': route.path === '' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5" :class="{ 'text-primary': route.path === '' }">Планирования</span>
        </router-link>
      </div>

      <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="''" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="delivery" icon-class="fs-5" :class="{ 'text-primary': route.path === '' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5" :class="{ 'text-primary': route.path === '' }">Обеспечения</span>
        </router-link>
      </div>


      <div class="menu-item p-0">
        <router-link class="menu-link d-flex align-items-center m-0" :to="''" active-class="active-menu-link"
          exact-active-class="exact-active-menu-link" style="flex-direction: row; gap: 10px;">
          <span class="d-flex align-items-center justify-content-center me-2">
            <KTIcon icon-name="briefcase" icon-class="fs-5" :class="{ 'text-primary': route.path === '' }" />
          </span>
          <span class="menu-title flex-grow-1 fs-5" :class="{ 'text-primary': route.path === '' }">Проиводства</span>
        </router-link>
      </div>
    </div>
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { version } from "@/core/helpers/system";
import { asideMenuIcons } from "@/layouts/default-layout/config/helper";
import MainMenuConfig from "@/layouts/default-layout/config/MainMenuConfig";

export default defineComponent({
  name: "kt-menu",
  components: {},
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });

    const translate = (text: string) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const hasActiveChildren = (match: string) => {
      return route.path.indexOf(match) !== -1;
    };

    const currentActive = (current: string) => {
      return route.path === current;
    };

    return {
      hasActiveChildren,
      currentActive,
      MainMenuConfig,
      asideMenuIcons,
      version,
      translate,
      getAssetPath,
      route,
    };
  },
});
</script>
<style scoped>
.menu-item .menu-link {
  height: 46px !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
@/core/helpers/system