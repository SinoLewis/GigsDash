<template>
  <ion-content>
    <ion-title>Statistics</ion-title>
    <p>Too Short - So You Wanna Be A Gangsta - LYRICS</p>
    <header-stats />
  </ion-content>
</template>
  
<script lang="ts">
import { IonContent, IonTitle } from "@ionic/vue";
import HeaderStats from "@/components/Cards/HeaderStats.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Stats",
  components: {
    HeaderStats,
    IonContent,
    IonTitle,
  },
});
</script>