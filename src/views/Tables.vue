<template>
  <ion-content>
    <ion-title>Tables</ion-title>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-table />
      </div>
      <div class="w-full mb-12 px-4">
        <card-table color="dark" />
      </div>
    </div>
  </ion-content>
</template>
  
<script lang="ts">
import { IonContent, IonTitle } from "@ionic/vue";
import CardTable from "@/components/Cards/CardTable.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tables",
  components: {
    IonContent,
    IonTitle,
    CardTable,
  },
});
</script>