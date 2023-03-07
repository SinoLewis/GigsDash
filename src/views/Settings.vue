<template>
  <ion-content>
    <ion-title>Settings</ion-title>
    <p>Janelle Monáe, Jidenna - Yoga</p>
  </ion-content>
</template>
  
<script lang="ts">
import { IonContent, IonTitle } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Settings",
  components: {
    IonContent,
    IonTitle,
  },
});
</script>