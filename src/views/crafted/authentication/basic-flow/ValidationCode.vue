<template>
    <!--begin::Wrapper-->
    <div class="w-lg-500px p-10 border rounded-2 shadow-sm">
        <!--begin::Form-->
        <VForm class="form ..." @submit="onSubmitValidationCode" id="kt_login_password_reset_form">
            <!--begin::Heading-->
            <div class="text-center mb-10">
                <!--begin::Title-->
                <h1 class="text-gray-900 mb-3">Введите код</h1>
                <!--end::Title-->

                <!--begin::Link-->
                <div class="text-gray-500 fw-semibold fs-4">
                    Мы отправили вам код для подтверждения
                </div>
                <!--end::Link-->
            </div>
            <!--begin::Heading-->

            <!--begin::Input group-->
            <div class="d-flex justify-content-center gap-3 mb-10">
                <input v-for="(digit, index) in code" :key="index" v-model="code[index]"
                    class="form-control form-control-solid text-center fs-2 fw-bold" maxlength="1" type="text"
                    inputmode="numeric" pattern="[0-9]*" @input="focusNext(index, $event)"
                    style="width: 60px; height: 60px;" />
            </div>

            <!--begin::Actions-->
            <button type="submit" ref="submitButton" id="kt_password_reset_submit"
                class="btn btn-lg btn-primary fw-bold w-100">
                <span class="indicator-label"> Восстановить пароль </span>
                <span class="indicator-progress">
                    Please wait...
                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
            </button>
            <router-link to="/sign-in" class="mt-7 link-primary d-flex justify-content-center gap-1 text-black">
                <p>Есть пароль?</p>
                <p class=" fw-bold">Авторизироваться</p>
            </router-link>
            <!--end::Actions-->
        </VForm>
        <!--end::Form-->
    </div>
    <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
    name: "password-reset",
    components: {
        Field,
        VForm,
        ErrorMessage,
    },
    setup() {
        const router = useRouter();
        const store = useAuthStore();
        const submitButton = ref<HTMLButtonElement | null>(null);


        const code = ref(["", "", "", "", "", ""]);

        const focusNext = (index: number, event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target.value.length === 1 && index < 5) {
                const nextInput = target.nextElementSibling as HTMLInputElement;
                nextInput?.focus();
            }
        };

        const onSubmitValidationCode = async () => {
            router.push('/new-password');
            console.log('onSubmitValidationCode')
            const verificationCode = code.value.join("");

            if (verificationCode.length < 6) {
                Swal.fire({
                    text: "Введите полный код из 6 цифр.",
                    icon: "warning",
                    confirmButtonText: "OK",
                    customClass: {
                        confirmButton: "btn fw-semibold btn-light-warning",
                    },
                });
                return;
            }

            submitButton.value!.disabled = true;
            submitButton.value?.setAttribute("data-kt-indicator", "on");


            const error = Object.values(store.errors);

            if (!error.length) {
                Swal.fire({
                    text: "Код подтверждён успешно!",
                    icon: "success",
                    confirmButtonText: "Ок, понял!",
                    customClass: {
                        confirmButton: "btn fw-semibold btn-light-primary",
                    },
                });
            } else {
                Swal.fire({
                    text: error[0] as string,
                    icon: "error",
                    confirmButtonText: "Попробуйте снова!",
                    customClass: {
                        confirmButton: "btn fw-semibold btn-light-danger",
                    },
                });
            }

            submitButton.value?.removeAttribute("data-kt-indicator");
            submitButton.value!.disabled = false;
        };
        return {
            code,
            onSubmitValidationCode,
            focusNext,
            submitButton,
        };
    },
});
</script>