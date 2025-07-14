import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

// Add a response interceptor
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const refreshResponse = await api.post('/auth/refresh')
        const newToken = refreshResponse.data?.accessToken || refreshResponse.data?.token
        if (newToken) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`
          return api(originalRequest)
        }
      } catch (refreshError) {
        window.location.href = '/sign-in'
        return Promise.reject(refreshError)
      }
    }
    return Promise.reject(error)
  }
)

export default api 