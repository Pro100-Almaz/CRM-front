import { defineStore } from 'pinia'
import api from '@/services/api'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    accessToken: null,
  }),
  actions: {
    async signIn(email, password, remember) {
      const { data } = await api.post('/auth/login', { email, password, remember })
      this.accessToken = data.accessToken
      this.user = data.user
      api.defaults.headers.common.Authorization = `Bearer ${this.accessToken}`
    },
    async signOut() {
      try {
        await api.post('/auth/logout')
      } catch (e) {
        // ignore errors
      }
      this.user = null
      this.accessToken = null
      delete api.defaults.headers.common.Authorization
    },
  },
}) 