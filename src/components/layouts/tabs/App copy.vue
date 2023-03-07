<template>
  <ion-app>
    <!--
    <admin-layout>
    </admin-layout>    
  
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header> Navigate </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <sidebar />
            <ion-item button>
              <ion-icon slot="start" name="home"></ion-icon>
              <ion-label> Home </ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
  -->
    <ion-menu content-id="main-content">
      <sidebar />
    </ion-menu>

    <ion-page class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>
      <admin-navbar />
      <header-stats />
      <ion-content class="ion-padding">
        <ion-router-outlet />
      </ion-content>
      <ion-footer>
        <footer-admin />
      </ion-footer>

    </ion-page>
  </ion-app>
  <ion-menu-controller></ion-menu-controller>
</template>

<script lang="ts">
import {
  IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle, IonPage, IonButtons, IonButton, IonIcon, IonFooter
} from '@ionic/vue';
import Sidebar from "@/components/layouts/Sidebar.vue";
import AdminNavbar from "@/components/layouts/AdminNavbar.vue";
import HeaderStats from "@/components/Cards/HeaderStats.vue";
import FooterAdmin from "@/components/layouts/FooterAdmin.vue";

// import AdminLayout from "@/components/layouts/AdminLayout.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    Sidebar,
    AdminNavbar,
    HeaderStats,
    FooterAdmin,
    IonFooter,
    // AdminLayout,
    IonMenu, IonHeader, IonToolbar, IonTitle, IonContent,
    // IonList, IonListHeader,
    IonMenuToggle, IonPage, IonButtons, IonButton, IonIcon
  },
});
</script>