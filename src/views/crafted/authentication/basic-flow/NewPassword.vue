<template>
    <!--begin::Wrapper-->
    <div class="w-lg-500px p-10 border rounded-2 shadow-sm">
        <!--begin::Form-->
        <VForm class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" @submit="onSubmitForgotPassword"
            id="kt_login_password_reset_form" :validation-schema="forgotPassword">
            <!--begin::Heading-->
            <div class="text-center mb-10">
                <!--begin::Title-->
                <h1 class="text-gray-900 mb-3">Установите новый пароль</h1>
                <!--end::Title-->

                <!--begin::Link-->
                <div class="text-gray-500 fw-semibold fs-4">
                    Придумайте сложный пароль от 8 символов
                </div>
                <!--end::Link-->
            </div>
            <!--begin::Heading-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <label class="form-label fw-bold text-gray-900 fs-6">Новый пароль</label>
                <Field tabindex="2" v-model="password"
                    class="form-control bg-white border rounded-2 form-control-lg form-control-solid" type="password"
                    name="password" autocomplete="off" />
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="email" />
                    </div>
                </div>
            </div>
            <!--end::Input group-->
            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <label class="form-label fw-bold text-gray-900 fs-6">Новый пароль</label>
                <Field tabindex="2" v-model="password"
                    class="form-control bg-white border rounded-2 form-control-lg form-control-solid" type="password"
                    name="password" autocomplete="off" />
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="email" />
                    </div>
                </div>
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <button type="submit" ref="submitButton" id="kt_password_reset_submit"
                class="btn btn-lg btn-primary fw-bold w-100">
                <span class="indicator-label"> Изменить пароль </span>
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
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useRouter } from "vue-router";



export default defineComponent({
    name: "password-reset",
    components: {
        Field,
        VForm,
        ErrorMessage,
    },
    setup() {
        const password = ref(null)
        const confirmPassword = ref(null)

        const store = useAuthStore();
        const router = useRouter();
        const email = ref('');
        const submitButton = ref<HTMLButtonElement | null>(null);

        //Create form validation object
        const forgotPassword = Yup.object().shape({
            email: Yup.string().email().required().label("Email"),
        });

        //Form submit function
        const onSubmitForgotPassword = async (values: any) => {
            router.push('/validation-code')
            console.log('onSubmitForgotPassword')
        };

        return {
            onSubmitForgotPassword,
            email,
            forgotPassword,
            submitButton,
            password,
            confirmPassword
        };
    },
});
</script>