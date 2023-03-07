<template>
  <ion-content>
    <ion-title>Maps</ion-title>
    <div class="flex flex-wrap">
      <div class="w-full px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
        >
          <map-example />
        </div>
      </div>
    </div>
  </ion-content>
</template>
  
<script lang="ts">
import { IonContent, IonTitle } from "@ionic/vue";
import MapExample from "@/components/Maps/MapExample.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Maps",
  components: {
    IonContent,
    IonTitle,
    MapExample,
  },
});
</script>