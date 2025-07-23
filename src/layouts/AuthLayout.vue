<template>
  <!--begin::Authentication Layout -->
  <div class="d-flex flex-column flex-lg-row flex-column-fluid">
    <!--begin::Body-->

    <!--begin::Aside-->

    <div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover align-items-end order-1 order-lg-1"
      :style="`background-image: url('${getAssetPath('media/misc/bg-img.png')}')`">
      <!--begin::Content-->
      <div class="d-flex flex-column py-7 py-lg-15 px-5 px-md-15 w-100">

        <!--begin::Image-->

        <!--end::Image-->

        <!--begin::Title-->
        <h1 class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">
          Управляй эффективно <br>
          своим бизнесом
        </h1>
        <!--end::Title-->

        <!--begin::Text-->
        <div class="d-none d-lg-block text-white fs-xl text-center">
          Современная CRM система для управления <br> взаимоотношениями с клиентами. Увеличьте продажи и <br>улучшите сервис с
          нашей платформой.
        </div>
        <!--end::Text-->
      </div>
      <!--end::Content-->
    </div>
    <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-2">
      <!--begin::Form-->
      <div class="d-flex flex-center flex-column flex-lg-row-fluid">
        <!--begin::Wrapper-->
        <div class="w-lg-500px p-10">
          <router-view></router-view>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Form-->

      <!--begin::Footer-->
      <div class="d-flex flex-center flex-wrap px-5">
        <!--begin::Links-->
        <div class="d-flex  flex-column fw-semibold text-primary fs-base justify-content-center">
          <p class="text-center text-black">© 2024 CRM Portal. Все права защищены.</p>
          <div class="d-flex gap-1">
            <a href="#" target="_blank" class="text-black">Политика конфиденциальности</a>

            <a href="#" target="_blank" class="text-black">Условия использования</a>
          </div>

        </div>
        <!--end::Links-->
      </div>
      <!--end::Footer-->
    </div>
    <!--end::Body-->

    <!--end::Aside-->
  </div>
  <!--end::Authentication Layout -->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, onMounted } from "vue";
import LayoutService from "@/core/services/LayoutService";
import { useBodyStore } from "@/stores/body";

export default defineComponent({
  name: "auth-layout",
  components: {},
  setup() {
    const store = useBodyStore();

    onMounted(() => {
      LayoutService.emptyElementClassesAndAttributes(document.body);

      store.addBodyClassname("app-blank");
      store.addBodyClassname("bg-body");
    });

    return {
      getAssetPath,
    };
  },
});
</script>
