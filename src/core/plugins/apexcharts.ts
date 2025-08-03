import { createApp } from "vue";
import App from "@/App.vue";
import { initApexCharts } from "@/core/plugins/apexcharts";


const app = createApp(App);
initApexCharts(app);
app.mount("#app");
