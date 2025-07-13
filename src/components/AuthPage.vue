<template>
  <div class="auth-page">
    <!-- Left Side: Background Image + SVG Gradient + Logo -->
    <div class="auth-left">
      <img src="@/assets/background-img.png" alt="Background" class="bg-img" />
      <img src="@/assets/screen.svg" alt="Gradient Overlay" class="gradient-svg" />
      <div class="left-bottom-text">
        <div class="headline">Управляй эффективно<br>своим бизнесом</div>
        <div class="desc">Современная CRM система для управления взаимоотношениями с клиентами. Увеличьте продажи и улучшите сервис с нашей платформой.</div>
      </div>
    </div>
    <!-- Right Side: Sign In Block -->
    <div class="auth-right">
      <div class="signin-block">
        <h1 class="signin-title">Вход в систему</h1>
        <div class="signin-minor">Выберите способ входа в CRM систему</div>
        <button class="google-btn" @click="handleGoogleAuth">
          <svg class="google-icon" viewBox="0 0 24 24"><g><path fill="#4285F4" d="M21.805 10.023h-9.82v3.955h5.627c-.243 1.3-1.47 3.82-5.627 3.82-3.38 0-6.13-2.8-6.13-6.25s2.75-6.25 6.13-6.25c1.93 0 3.23.82 3.97 1.53l2.71-2.64C17.09 2.98 14.73 2 12.01 2 6.48 2 2 6.48 2 12s4.48 10 10.01 10c5.77 0 9.59-4.05 9.59-9.75 0-.65-.07-1.15-.16-1.62z"/><path fill="#34A853" d="M3.153 6.345l3.27 2.4C7.68 7.13 9.64 5.75 12.01 5.75c1.93 0 3.23.82 3.97 1.53l2.71-2.64C17.09 2.98 14.73 2 12.01 2c-3.36 0-6.22 1.19-8.36 3.13z"/><path fill="#FBBC05" d="M12.01 22c2.62 0 4.81-.86 6.41-2.34l-2.96-2.42c-.82.58-1.93.93-3.45.93-2.65 0-4.89-1.8-5.7-4.22l-3.25 2.5C5.8 20.13 8.7 22 12.01 22z"/><path fill="#EA4335" d="M21.805 10.023h-9.82v3.955h5.627c-.243 1.3-1.47 3.82-5.627 3.82-3.38 0-6.13-2.8-6.13-6.25s2.75-6.25 6.13-6.25c1.93 0 3.23.82 3.97 1.53l2.71-2.64C17.09 2.98 14.73 2 12.01 2 6.48 2 2 6.48 2 12s4.48 10 10.01 10c5.77 0 9.59-4.05 9.59-9.75 0-.65-.07-1.15-.16-1.62z"/></g></svg>
          Войти через Google
        </button>
        <button class="thirdparty-btn" @click="handleThirdPartyAuth">Войти через Госуслуги</button>
        <div class="position-relative my-10">
          <hr class="border-gray-300" />
        </div>
        <form @submit.prevent="handleSubmit" class="signin-form">
          <div class="form-group fv-row">
            <label for="email" class="form-label">Email адрес</label>
            <div class="input-group">
              <span class="input-group-text">
                <i class="ki-duotone ki-sms fs-2"></i>
              </span>
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-control"
                placeholder="Введите ваш email"
                autocomplete="off"
                required
              />
            </div>
          </div>
          <div class="form-group fv-row">
            <label for="password" class="form-label">Пароль</label>
            <div class="input-group password-group">
              <span class="input-group-text">
                <i class="ki-duotone ki-password-check fs-2"></i>
              </span>
              <input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                class="form-control"
                placeholder="Введите ваш пароль"
                autocomplete="off"
                required
              />
              <button type="button" class="input-group-text password-toggle" @click="showPassword = !showPassword" tabindex="-1">
                <i v-if="showPassword" class="ki-duotone ki-eye-off fs-2"></i>
                <i v-else class="ki-duotone ki-eye fs-2"></i>
              </button>
            </div>
          </div>
          <div class="form-row">
            <label class="remember-me">
              <input type="checkbox" v-model="rememberMe" /> Запомнить меня
            </label>
            <a href="#" class="forgot-password">Забыли пароль?</a>
          </div>
          <button type="submit" class="signin-btn">Войти</button>
        </form>
        <div class="register-hint">Нет аккаунта? <a href="#" class="register-link">Зарегистрироваться</a></div>
      </div>
      <div class="signin-footer">
        <div class="footer-copy">© 2024 CRM Portal. Все права защищены.</div>
        <div class="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <span class="footer-divider">|</span>
          <a href="#">Условия использования</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const handleSubmit = () => {
  // Handle sign in logic
  alert(`Email: ${email.value}\nPassword: ${password.value}\nRemember me: ${rememberMe.value}`)
}
const handleGoogleAuth = () => {
  // Handle Google auth logic
  alert('Google Auth')
}
const handleThirdPartyAuth = () => {
  alert('Данная функция пока не реализована. Будет доступна в ближайшее время.')
}
</script>

<style scoped>
.auth-page {
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
}
.auth-left {
  position: relative;
  flex: 1.22;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #222;
  height: 100vh;
}
.bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.gradient-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  pointer-events: none;
}
.branding {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -40px;
}
.logo {
  width: 64px;
  height: 64px;
  margin-bottom: 12px;
}
.brand-title {
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
}
.left-bottom-text {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 48px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  text-align: center;
}
.headline {
  color: #fff;
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  line-height: 1.15;
  letter-spacing: 0.5px;
}
.desc {
  color: #e0e7ef;
  font-size: 1.1rem;
  font-weight: 400;
  max-width: 480px;
  line-height: 1.5;
}
.auth-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 100vh;
  position: relative;
}
.signin-block {
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.signin-title {
  text-align: center;
  font-size: 1.7rem;
  font-weight: 700;
  color: #222;
}
.signin-minor {
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  margin-bottom: 1rem;
}
.signin-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
}
.input-group {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
}
.input-group-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 2.8rem;
  border: 1px solid #d1d5db;
  border-radius: 6px 0 0 6px;
  border-right: none;
  background: #fff;
  transition: border 0.2s;
}
.input-group-text i {
  color: #3f4254; /* Metronic dark gray */
  transition: color 0.2s;
}
.form-control {
  height: 2.8rem;
  border: 1px solid #d1d5db;
  border-radius: 0 6px 6px 0;
  border-left: none;
  padding: 0 0.8rem;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  width: 100%;
  color: #222;
}
.form-control:focus {
  border-color: #2563eb;
}
.form-control:focus ~ .input-group-text,
.input-group-text:focus-within {
  border-color: #2563eb;
}
.form-control:focus ~ .input-group-text i,
.input-group-text:focus-within i {
  color: #2563eb;
}
.form-group input::placeholder {
  color: #6b7280;
  opacity: 1;
  font-weight: 400;
}
.form-group label {
  font-size: 0.97rem;
  color: #444;
  font-weight: 500;
}
.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.97rem;
}
.remember-me {
  display: flex;
  align-items: center;
  gap: 0.4em;
  color: #444;
}
.forgot-password {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.forgot-password:hover {
  color: #1d4ed8;
}
.signin-btn {
  width: 100%;
  height: 2.5rem;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.signin-btn:hover {
  background: #1d4ed8;
}
.divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #aaa;
  font-size: 0.95rem;
}
.divider span {
  flex: 1;
  border-bottom: 1px solid #eee;
  margin: 0 0.7em;
}
.google-btn {
  width: 100%;
  height: 2.5rem;
  background: #fff;
  color: #222;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1.05rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;
  margin-bottom: 0.5rem;
}
.google-btn:hover {
  background: #f3f4f6;
  border-color: #2563eb;
}
.google-icon {
  width: 1.3em;
  height: 1.3em;
}
.thirdparty-btn {
  width: 100%;
  height: 2.5rem;
  background: #f3f4f6;
  color: #222;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1.05rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
  cursor: pointer;
  margin-bottom: 1.1rem;
  transition: background 0.2s, border 0.2s;
}
.thirdparty-btn:hover {
  background: #e5e7eb;
  border-color: #2563eb;
}
.register-hint {
  text-align: center;
  color: #6b7280;
  font-size: 0.97rem;
  margin-top: 0.7rem;
}
.register-link {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.2em;
}
.register-link:hover {
  text-decoration: underline;
}
.signin-footer {
  width: 100%;
  margin-top: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #6b7280;
}
.footer-copy {
  margin-bottom: 0.1rem;
}
.footer-links {
  display: flex;
  align-items: center;
  gap: 0.7em;
}
.footer-links a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.97rem;
}
.footer-links a:hover {
  text-decoration: underline;
}
.footer-divider {
  color: #bdbdbd;
  font-size: 1.1em;
}
.password-group .password-toggle {
  border-left: 0;
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: #3f4254;
  display: flex;
  align-items: center;
}
.password-group .password-toggle:focus {
  color: #2563eb;
}
</style>

