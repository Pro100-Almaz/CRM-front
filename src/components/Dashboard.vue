<template>
  <MetronicLayout>
    <div class="kt-content-wrapper">
      <!-- Page Header -->
      <div class="kt-page-header kt-page-header-fluid kt-page-header-lg">
        <div class="kt-page-header-content">
          <div class="kt-page-header-title">
            <h3 class="kt-page-header-heading">Dashboard</h3>
          </div>
          <div class="kt-page-header-toolbar">
            <div class="kt-page-header-actions">
              <button class="kt-btn kt-btn-primary" @click="logout">
                <i class="ki-filled ki-exit text-lg"></i>
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Dashboard Content -->
      <div class="kt-content">
        <div class="kt-content-container kt-content-container-fluid">
          
          <!-- Welcome Message -->
          <div class="row mb-5">
            <div class="col-12">
              <div class="kt-card bg-body">
                <div class="kt-card-body">
                  <h4>Добро пожаловать в CRM систему!</h4>
                  <p class="text-muted">Вы вошли как: {{ userEmail }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Stats Cards -->
          <div class="row g-5 g-xl-8 mb-5">
            <div class="col-xl-3">
              <div class="kt-card bg-body hoverable card-xl-stretch mb-xl-8">
                <div class="kt-card-body">
                  <div class="d-flex align-items-center">
                    <div class="kt-symbol kt-symbol-50px me-3">
                      <div class="kt-symbol-label bg-light-primary">
                        <i class="ki-filled ki-element-11 text-primary fs-2x"></i>
                      </div>
                    </div>
                    <div class="d-flex flex-column">
                      <span class="text-gray-900 fw-bold fs-6">Total Sales</span>
                      <span class="text-gray-500 fw-semibold">$50,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-xl-3">
              <div class="kt-card bg-body hoverable card-xl-stretch mb-xl-8">
                <div class="kt-card-body">
                  <div class="d-flex align-items-center">
                    <div class="kt-symbol kt-symbol-50px me-3">
                      <div class="kt-symbol-label bg-light-success">
                        <i class="ki-filled ki-profile-user text-success fs-2x"></i>
                      </div>
                    </div>
                    <div class="d-flex flex-column">
                      <span class="text-gray-900 fw-bold fs-6">New Customers</span>
                      <span class="text-gray-500 fw-semibold">+2,300</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-xl-3">
              <div class="kt-card bg-body hoverable card-xl-stretch mb-xl-8">
                <div class="kt-card-body">
                  <div class="d-flex align-items-center">
                    <div class="kt-symbol kt-symbol-50px me-3">
                      <div class="kt-symbol-label bg-light-warning">
                        <i class="ki-filled ki-chart-line text-warning fs-2x"></i>
                      </div>
                    </div>
                    <div class="d-flex flex-column">
                      <span class="text-gray-900 fw-bold fs-6">Growth</span>
                      <span class="text-gray-500 fw-semibold">+15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-xl-3">
              <div class="kt-card bg-body hoverable card-xl-stretch mb-xl-8">
                <div class="kt-card-body">
                  <div class="d-flex align-items-center">
                    <div class="kt-symbol kt-symbol-50px me-3">
                      <div class="kt-symbol-label bg-light-info">
                        <i class="ki-filled ki-abstract-26 text-info fs-2x"></i>
                      </div>
                    </div>
                    <div class="d-flex flex-column">
                      <span class="text-gray-900 fw-bold fs-6">Orders</span>
                      <span class="text-gray-500 fw-semibold">1,250</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts Row -->
          <div class="row g-5 g-xl-8 mb-5">
            <div class="col-xl-8">
              <div class="kt-card">
                <div class="kt-card-header">
                  <div class="kt-card-title">
                    <h3 class="kt-card-label">Sales Overview</h3>
                  </div>
                  <div class="kt-card-toolbar">
                    <button class="kt-btn kt-btn-sm kt-btn-outline kt-btn-outline-default">
                      Export
                    </button>
                  </div>
                </div>
                <div class="kt-card-body">
                  <div id="kt_charts_widget_1" style="height: 350px;">
                    <div class="d-flex align-items-center justify-content-center h-100">
                      <p class="text-muted">Chart placeholder - integrate with your charting library</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-xl-4">
              <div class="kt-card">
                <div class="kt-card-header">
                  <div class="kt-card-title">
                    <h3 class="kt-card-label">Recent Orders</h3>
                  </div>
                </div>
                <div class="kt-card-body">
                  <div class="kt-timeline">
                    <div class="kt-timeline-item">
                      <div class="kt-timeline-badge kt-timeline-badge-success">
                        <i class="ki-filled ki-check text-white"></i>
                      </div>
                      <div class="kt-timeline-content">
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h6 class="mb-1">Order #12345</h6>
                            <p class="text-muted mb-0">$1,200 - Electronics</p>
                          </div>
                          <span class="badge badge-light-success">Completed</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="kt-timeline-item">
                      <div class="kt-timeline-badge kt-timeline-badge-warning">
                        <i class="ki-filled ki-clock text-white"></i>
                      </div>
                      <div class="kt-timeline-content">
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h6 class="mb-1">Order #12344</h6>
                            <p class="text-muted mb-0">$850 - Clothing</p>
                          </div>
                          <span class="badge badge-light-warning">Processing</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="kt-timeline-item">
                      <div class="kt-timeline-badge kt-timeline-badge-info">
                        <i class="ki-filled ki-gear text-white"></i>
                      </div>
                      <div class="kt-timeline-content">
                        <div class="d-flex align-items-center">
                          <div class="flex-grow-1">
                            <h6 class="mb-1">Order #12343</h6>
                            <p class="text-muted mb-0">$650 - Books</p>
                          </div>
                          <span class="badge badge-light-info">Shipped</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Table Row -->
          <div class="row g-5 g-xl-8">
            <div class="col-xl-12">
              <div class="kt-card">
                <div class="kt-card-header">
                  <div class="kt-card-title">
                    <h3 class="kt-card-label">Recent Customers</h3>
                  </div>
                  <div class="kt-card-toolbar">
                    <div class="kt-card-toolbar-actions">
                      <button class="kt-btn kt-btn-sm kt-btn-outline kt-btn-outline-default">
                        <i class="ki-filled ki-filter text-lg"></i>
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
                <div class="kt-card-body">
                  <div class="table-responsive">
                    <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      <thead>
                        <tr class="fw-bold text-muted">
                          <th class="w-25px">
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input class="form-check-input" type="checkbox" value="1"/>
                            </div>
                          </th>
                          <th class="min-w-150px">Customer</th>
                          <th class="min-w-140px">Email</th>
                          <th class="min-w-120px">Phone</th>
                          <th class="min-w-100px">Status</th>
                          <th class="min-w-100px">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input class="form-check-input" type="checkbox" value="1"/>
                            </div>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="kt-symbol kt-symbol-45px me-5">
                                <img src="/media/avatars/300-1.png" alt=""/>
                              </div>
                              <div class="d-flex justify-content-start flex-column">
                                <a href="#" class="text-dark fw-bold text-hover-primary fs-6">John Doe</a>
                                <span class="text-muted fw-semibold text-muted d-block fs-7">Customer</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" class="text-dark fw-bold text-hover-primary d-block fs-6">john.doe@example.com</a>
                          </td>
                          <td>
                            <span class="text-muted fw-semibold text-muted d-block fs-7">+1 234 567 890</span>
                          </td>
                          <td>
                            <span class="badge badge-light-success">Active</span>
                          </td>
                          <td>
                            <button class="kt-btn kt-btn-sm kt-btn-outline kt-btn-outline-default">
                              <i class="ki-filled ki-eye text-lg"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                              <input class="form-check-input" type="checkbox" value="1"/>
                            </div>
                          </td>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="kt-symbol kt-symbol-45px me-5">
                                <img src="/media/avatars/300-2.png" alt=""/>
                              </div>
                              <div class="d-flex justify-content-start flex-column">
                                <a href="#" class="text-dark fw-bold text-hover-primary fs-6">Jane Smith</a>
                                <span class="text-muted fw-semibold text-muted d-block fs-7">Customer</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" class="text-dark fw-bold text-hover-primary d-block fs-6">jane.smith@example.com</a>
                          </td>
                          <td>
                            <span class="text-muted fw-semibold text-muted d-block fs-7">+1 234 567 891</span>
                          </td>
                          <td>
                            <span class="badge badge-light-warning">Pending</span>
                          </td>
                          <td>
                            <button class="kt-btn kt-btn-sm kt-btn-outline kt-btn-outline-default">
                              <i class="ki-filled ki-eye text-lg"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MetronicLayout>
</template>

<script setup>
import MetronicLayout from './MetronicLayout.vue'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const router = useRouter()
const userEmail = ref('')

onMounted(() => {
  userEmail.value = localStorage.getItem('userEmail') || 'Unknown User'
})

function logout() {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('userEmail')
  router.push({ name: 'Auth' })
}
</script>

<style scoped>
/* Dashboard-specific styles can be added here */
</style> 