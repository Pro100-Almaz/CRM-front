<template>
  <div class="flex grow">
    <!-- Sidebar -->
    <div class="kt-sidebar bg-background border-e border-e-border fixed top-0 bottom-0 z-20 hidden lg:flex flex-col items-stretch shrink-0 [--kt-drawer-enable:true] lg:[--kt-drawer-enable:false]" 
         data-kt-drawer="true" 
         data-kt-drawer-class="kt-drawer kt-drawer-start top-0 bottom-0" 
         id="sidebar">
      
      <!-- Sidebar Header -->
      <div class="kt-sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 shrink-0" id="sidebar_header">
        <a class="dark:hidden" href="#">
          <img class="default-logo min-h-[22px] max-w-none" src="/media/app/default-logo.svg"/>
          <img class="small-logo min-h-[22px] max-w-none" src="/media/app/mini-logo.svg"/>
        </a>
        <a class="hidden dark:block" href="#">
          <img class="default-logo min-h-[22px] max-w-none" src="/media/app/default-logo-dark.svg"/>
          <img class="small-logo min-h-[22px] max-w-none" src="/media/app/mini-logo.svg"/>
        </a>
        <button class="kt-btn kt-btn-outline kt-btn-icon size-[30px] absolute start-full top-2/4 -translate-x-2/4 -translate-y-2/4 rtl:translate-x-2/4" 
                data-kt-toggle="body" 
                data-kt-toggle-class="kt-sidebar-collapse" 
                id="sidebar_toggle">
          <i class="ki-filled ki-black-left-line kt-toggle-active:rotate-180 transition-all duration-300 rtl:translate rtl:rotate-180 rtl:kt-toggle-active:rotate-0"></i>
        </button>
      </div>

      <!-- Sidebar Content -->
      <div class="kt-sidebar-content flex grow shrink-0 py-5 pe-2" id="sidebar_content">
        <div class="kt-scrollable-y-hover grow shrink-0 flex ps-2 lg:ps-5 pe-1 lg:pe-3" 
             data-kt-scrollable="true" 
             data-kt-scrollable-dependencies="#sidebar_header" 
             data-kt-scrollable-height="auto" 
             data-kt-scrollable-offset="0px" 
             data-kt-scrollable-wrappers="#sidebar_content" 
             id="sidebar_scrollable">
          
          <!-- Sidebar Menu -->
          <div class="kt-menu flex flex-col grow gap-1" 
               data-kt-menu="true" 
               data-kt-menu-accordion-expand-all="false" 
               id="sidebar_menu">
            
            <!-- Dashboard Menu Item -->
            <div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
              <div class="kt-menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabindex="0">
                <span class="kt-menu-icon items-start text-muted-foreground w-[20px]">
                  <i class="ki-filled ki-element-11 text-lg"></i>
                </span>
                <span class="kt-menu-title text-sm font-medium text-foreground kt-menu-item-active:text-primary kt-menu-link-hover:!text-primary">
                  Dashboards
                </span>
                <span class="kt-menu-arrow text-muted-foreground w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                  <span class="inline-flex kt-menu-item-show:hidden">
                    <i class="ki-filled ki-plus text-[11px]"></i>
                  </span>
                  <span class="hidden kt-menu-item-show:inline-flex">
                    <i class="ki-filled ki-minus text-[11px]"></i>
                  </span>
                </span>
              </div>
              <div class="kt-menu-accordion gap-1 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-border">
                <div class="kt-menu-item">
                  <a class="kt-menu-link border border-transparent items-center grow kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" 
                     href="#" 
                     tabindex="0">
                    <span class="kt-menu-bullet flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary"></span>
                    <span class="kt-menu-title text-2sm font-normal text-foreground kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary">
                      Main Dashboard
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <!-- User Menu Item -->
            <div class="kt-menu-item pt-2.25 pb-px">
              <span class="kt-menu-heading uppercase text-xs font-medium text-muted-foreground ps-[10px] pe-[10px]">
                User
              </span>
            </div>
            
            <div class="kt-menu-item" data-kt-menu-item-toggle="accordion" data-kt-menu-item-trigger="click">
              <div class="kt-menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] ps-[10px] pe-[10px] py-[6px]" tabindex="0">
                <span class="kt-menu-icon items-start text-muted-foreground w-[20px]">
                  <i class="ki-filled ki-profile-circle text-lg"></i>
                </span>
                <span class="kt-menu-title text-sm font-medium text-foreground kt-menu-item-active:text-primary kt-menu-link-hover:!text-primary">
                  Profile
                </span>
                <span class="kt-menu-arrow text-muted-foreground w-[20px] shrink-0 justify-end ms-1 me-[-10px]">
                  <span class="inline-flex kt-menu-item-show:hidden">
                    <i class="ki-filled ki-plus text-[11px]"></i>
                  </span>
                  <span class="hidden kt-menu-item-show:inline-flex">
                    <i class="ki-filled ki-minus text-[11px]"></i>
                  </span>
                </span>
              </div>
              <div class="kt-menu-accordion gap-1 ps-[10px] relative before:absolute before:start-[20px] before:top-0 before:bottom-0 before:border-s before:border-border">
                <div class="kt-menu-item">
                  <a class="kt-menu-link border border-transparent items-center grow kt-menu-item-active:bg-accent/60 dark:menu-item-active:border-border kt-menu-item-active:rounded-lg hover:bg-accent/60 hover:rounded-lg gap-[14px] ps-[10px] pe-[10px] py-[8px]" 
                     href="#" 
                     tabindex="0">
                    <span class="kt-menu-bullet flex w-[6px] -start-[3px] rtl:start-0 relative before:absolute before:top-0 before:size-[6px] before:rounded-full rtl:before:translate-x-1/2 before:-translate-y-1/2 kt-menu-item-active:before:bg-primary kt-menu-item-hover:before:bg-primary"></span>
                    <span class="kt-menu-title text-2sm font-normal text-foreground kt-menu-item-active:text-primary kt-menu-item-active:font-semibold kt-menu-link-hover:!text-primary">
                      My Profile
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex grow flex-col">
      <!-- Header -->
      <div class="kt-header bg-background border-b border-b-border flex items-center justify-between px-3 lg:px-6 py-3 lg:py-4 shrink-0" id="header">
        <div class="flex items-center gap-2">
          <button class="kt-btn kt-btn-outline kt-btn-icon size-[30px] lg:hidden" 
                  data-kt-toggle="body" 
                  data-kt-toggle-class="kt-sidebar-mobile-show" 
                  id="sidebar_toggle_mobile">
            <i class="ki-filled ki-menu text-lg"></i>
          </button>
          <h1 class="text-lg font-semibold text-foreground">IDM CRM</h1>
        </div>
        
        <div class="flex items-center gap-2">
          <!-- Theme Toggle -->
          <button class="kt-btn kt-btn-outline kt-btn-icon size-[30px]" 
                  data-kt-toggle="body" 
                  data-kt-toggle-class="dark" 
                  id="kt-theme-toggle">
            <i class="ki-filled ki-moon text-lg dark:hidden"></i>
            <i class="ki-filled ki-sun text-lg hidden dark:block"></i>
          </button>
          
          <!-- User Menu -->
          <div class="kt-menu" data-kt-menu="true" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
            <button class="kt-btn kt-btn-outline kt-btn-icon size-[30px]" 
                    data-kt-menu-trigger="click" 
                    data-kt-menu-placement="bottom-end">
              <i class="ki-filled ki-user text-lg"></i>
            </button>
            <div class="kt-menu-dropdown kt-menu-dropdown-custom kt-menu-dropdown-fit-bottom kt-menu-dropdown-mw-200px">
              <div class="kt-menu-item">
                <a class="kt-menu-link" href="#">
                  <i class="ki-filled ki-profile-circle kt-menu-icon text-lg"></i>
                  <span class="kt-menu-title">My Profile</span>
                </a>
              </div>
              <div class="kt-menu-item">
                <a class="kt-menu-link" href="#">
                  <i class="ki-filled ki-exit kt-menu-icon text-lg"></i>
                  <span class="kt-menu-title">Sign Out</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Page Content -->
      <div class="flex grow flex-col">
        <div class="kt-content bg-background flex grow flex-col" id="kt_content">
          <div class="kt-content-container kt-content-container-fluid flex grow flex-col" id="kt_content_container">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
/* Component-specific styles can be added here */
</style> 