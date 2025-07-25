<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10 border rounded-2 shadow-sm">
    <!--begin::Form-->
    <VForm class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" novalidate @submit="onSubmitRegister"
      id="kt_login_signup_form" :validation-schema="registration">
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 class="text-gray-900 mb-3">Регистрация</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-500 fw-semibold fs-4">
          Выберите способ входа в CRM систему
        </div>
        <!--end::Link-->
      </div>
      <!--end::Heading-->

      <!--begin::Action-->
      <a href="#" class="btn btn-flex btn-light btn-lg w-100 mb-5 bg-white border border-secondary">
        <img alt="Logo" :src="getAssetPath('media/svg/brand-logos/google-icon.svg')" class="h-20px me-3" />
        Continue with Google
      </a>
      <!--end::Action-->

      <!--begin::Separator-->
      <div class="d-flex align-items-center mb-10">
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
        <span class="fw-semobold text-gray-500 fs-7 mx-2">ИЛИ</span>
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
      </div>
      <!--end::Separator-->

      <!--begin::Input group-->
      <div class="fv-row mb-7">
        <label class="form-label fw-bold text-gray-900 fs-6">Email адрес</label>
        <Field v-model="email" class="form-control form-control-lg form-control-solid bg-white border rounded-2" type="email"
          placeholder="" name="email" autocomplete="off" />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="mb-10 fv-row" data-kt-password-meter="true">
        <!--begin::Wrapper-->
        <div class="mb-1">
          <!--begin::Label-->
          <label class="form-label fw-bold text-gray-900 fs-6"> Пароль </label>
          <!--end::Label-->

          <!--begin::Input wrapper-->
          <div class="position-relative mb-3">
            <Field v-model="password" class="form-control form-control-lg bg-white border rounded-2 form-control-solid" type="password"
              placeholder="Пароль" name="password" autocomplete="off" />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
            </div>
          </div>
          <!--end::Input wrapper-->
          <!--begin::Meter-->
          <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
          </div>
          <!--end::Meter-->
        </div>
        <!--end::Wrapper-->
        <!--begin::Hint-->
        <div class="text-muted">
          Use 8 or more characters with a mix of letters, numbers & symbols.
        </div>
        <!--end::Hint-->
      </div>
      <!--end::Input group--->

      <!--begin::Input group-->
      <div class="fv-row mb-5">
        <label class="form-label fw-bold text-gray-900 fs-6">Подтвердите пароль</label>
        <Field class="form-control form-control-lg form-control-solid bg-white border rounded-2" type="password"
          placeholder="" name="password_confirmation" autocomplete="off" />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password_confirmation" />
          </div>
        </div>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <label class="form-check form-check-custom form-check-solid d-flex align-items-start">
          <Field class="form-check-input" type="checkbox" name="toc" value="1" />
          <span class="form-check-label fw-semibold text-gray-700 fs-6">
            Я согласен с
            <a href="#" class="fs-base text-decoration-underline text-black">условиями использования и политикой
              конфиденциальности</a>.
          </span>
        </label>
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="fv-row mb-10">
        <label class="form-check form-check-custom form-check-solid d-flex align-items-start">
          <Field class="form-check-input" type="checkbox" name="toc" value="1" />
          <span class="form-check-label fw-semibold text-gray-700 fs-6">
            Я согласен получать полезный материал на свой email
          </span>
        </label>
      </div>
      <!--end::Input group-->

      <!--begin::Actions-->
      <div class="text-center">
        <button id="kt_sign_up_submit" ref="submitButton" type="submit" class="btn btn-lg btn-primary">
          <span class="indicator-label"> Войти в CRM </span>
          <span class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, nextTick, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import { PasswordMeterComponent } from "@/assets/ts/components";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "sign-up",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const store = useAuthStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    const registration = Yup.object().shape({
      first_name: Yup.string().required().label("Name"),
      last_name: Yup.string().required().label("Surname"),
      email: Yup.string().min(4).required().email().label("Email"),
      password: Yup.string().required().label("Password"),
      password_confirmation: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .label("Password Confirmation"),
    });

    onMounted(() => {
      nextTick(() => {
        PasswordMeterComponent.bootstrap();
      });
    });

    const onSubmitRegister = async (values: any) => {
      values = values as User;

      // Clear existing errors
      store.logout();

      // eslint-disable-next-line
      submitButton.value!.disabled = true;

      // Activate indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // Send login request
      await store.register(values);

      const error = Object.values(store.errors);

      if (!error) {
        Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semibold btn-light-primary",
          },
        }).then(function () {
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
        });
      }

      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
      submitButton.value!.disabled = false;
    };

    return {
      registration,
      onSubmitRegister,
      submitButton,
      getAssetPath,
      email,
      password
    };
  },
});
</script>
