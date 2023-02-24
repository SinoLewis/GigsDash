<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AdminNavbar from "@/components/layouts/AdminNavbar.vue";
import Sidebar from "@/components/layouts/Sidebar.vue";
import HeaderStats from "@/components/layouts/HeaderStats.vue";
import FooterAdmin from "@/components/layouts/FooterAdmin.vue";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    HeaderStats,
    FooterAdmin,
  },
};
</script>
