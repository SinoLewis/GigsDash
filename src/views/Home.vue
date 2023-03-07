<template>
  <!-- 
    <ion-page>
        <ion-header>

            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title>Tab1</ion-title>
            </ion-toolbar>
        </ion-header>
    </ion-page>
            -->

  <ion-content>
    <ion-title>Home</ion-title>
    <p>Alessia Cara - Here (Official Video)</p>
  </ion-content>
</template>
  
<script lang="ts">
import { IonContent, IonTitle } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    // IonBackButton,
    // IonButtons,
    IonContent,
    // IonHeader,
    // IonPage,
    IonTitle,
    // IonToolbar,
  },
});
</script>