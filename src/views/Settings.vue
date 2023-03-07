<template>
  <ion-content>
    <ion-title>Settings</ion-title>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-8/12 px-4">
        <CardSettings />
      </div>
      <div class="w-full lg:w-4/12 px-4">
        <CardProfile />
      </div>
    </div>
  </ion-content>
</template>
  
<script lang="ts">
import { IonContent, IonTitle } from "@ionic/vue";
import CardSettings from "@/components/Cards/CardSettings.vue";
import CardProfile from "@/components/Cards/CardProfile.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Settings",
  components: {
    IonContent,
    IonTitle,
    CardSettings,
    CardProfile,
  },
});
</script>