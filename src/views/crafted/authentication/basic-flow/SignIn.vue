<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10 border rounded-2 shadow-sm">
    <!--begin::Form-->
    <VForm class="form w-100" id="kt_login_signin_form" @submit="onSubmitLogin" :validation-schema="login"
      :initial-values="{ email: 'admin@demo.com', password: 'demo' }">
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-gray-900 mb-3">Вход в систему</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div>
          Выберите способ входа в CRM систему
        </div>
        <!-- <div class="text-gray-500 fw-semibold fs-4">
          New Here?

          <router-link to="/sign-up" class="link-primary fw-bold">
            Create an Account
          </router-link>
        </div> -->
        <!--end::Link-->
      </div>
      <!--begin::Heading-->

      <!--begin::Google link-->
      <a href="#" class="btn btn-flex btn-light btn-lg w-100 mb-5 bg-white border border-secondary">
        <img alt="Logo" :src="getAssetPath('media/svg/brand-logos/google-icon.svg')" class="h-20px me-3" />
        Continue with Google
      </a>
      <!--end::Google link-->
      <!--begin::Separator-->
      <div class="d-flex align-items-center text-muted text-uppercase fw-bold mb-5">
        <div class="flex-grow-1 border-bottom"></div>
        <div class="px-3">ИЛИ</div>
        <div class="flex-grow-1 border-bottom"></div>
      </div>
      <!--end::Separator-->
      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Label-->
        <label class="form-label fs-6 fw-bold text-gray-900">Email адрес</label>
        <!--end::Label-->

        <!--begin::Input-->
        <Field tabindex="1" v-model="email" class="form-control bg-white border rounded-2 form-control-lg form-control-solid" type="text" name="email"
          autocomplete="off" />
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <!--begin::Wrapper-->
        <div class="d-flex flex-column mb-2">
          <!--begin::Label-->
          <label class="form-label fw-bold text-gray-900 fs-6 mb-2">Пароль</label>
          <!--end::Label-->
          <Field tabindex="2" v-model="password" class="form-control bg-white border rounded-2 form-control-lg form-control-solid" type="password" name="password"
          autocomplete="off" />
        </div>
        <!--end::Wrapper-->

        <!--begin::Input-->

        <div class="d-flex justify-content-between mt-4">
          <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
            <input class="form-check-input" type="checkbox" value="1" v-model="isSave" />
            <span class="form-check-label user-select-none text-black"> Запомнить меня </span>
          </label>
          <!--begin::Link-->
          <router-link to="/password-reset" class="link-primary fs-6 text-black">
            Забыли пароль?
          </router-link>
        </div>

        <!--end::Link-->
        <!--end::Input-->
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Submit button-->
        <button tabindex="3" type="submit" ref="submitButton" id="kt_sign_in_submit"
          class="btn btn-lg btn-primary w-100 mb-5">
          <span class="indicator-label"> Войти в CRM </span>

          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
        <!--end::Submit button-->
        <router-link to="/sign-up" class="link-primary d-flex justify-content-center gap-1 text-black">
          <p>Нет аккаунта?</p>
          <p class=" fw-bold">Зарегистрироваться</p>
        </router-link>

        <!--begin::Google link-->
        <!-- <a href="#" class="btn btn-flex flex-center btn-light btn-lg w-100">
          <img
            alt="Logo"
            :src="getAssetPath('media/svg/brand-logos/apple-black.svg')"
            class="h-20px me-3"
          />
          Continue with Apple
        </a> -->
        <!--end::Google link-->
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const email = ref('');
    const isSave = ref(false)
    const store = useAuthStore();
    const password = ref('');
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    //Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Send login request
      await store.login(values);
      const error = Object.values(store.errors);

      if (error.length === 0) {
        Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-primary",
          },
        }).then(() => {
          // Go to page after successfully login
          router.push({ name: "dashboard" });
        });
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
    };

    return {
      onSubmitLogin,
      login,
      isSave,
      email,
      password,
      submitButton,
      getAssetPath,
    };
  },
});
</script>
