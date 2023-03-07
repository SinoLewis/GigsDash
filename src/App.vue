<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-title>
                <div class="flex items-center">
                  <ion-item button>
                    <ion-icon
                      :icon="logoIonic"
                      size="large"
                      color="primary"
                    ></ion-icon>
                    <ion-label color="primary">
                      <p class="uppercase p-3 font-bold hover:text-blue-600">
                        Gigs Dash
                      </p>
                    </ion-label>
                  </ion-item>
                  <ion-item button>
                    <ion-menu-toggle class="justify-self-end">
                      <ion-icon
                        :icon="closeCircleOutline"
                        size="large"
                        color="primary"
                      ></ion-icon>
                    </ion-menu-toggle>
                  </ion-item>
                </div>
                <!-- <h6
                    class="md:block uppercase text-blueGray-600 whitespace-nowrap uppercase font-bold"
                  >
                    Gigs Dash
                  </h6> -->
              </ion-title>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-list-header>
          <h6 class="md:min-w-full uppercase font-bold pt-1 pb-4">
            Admin Layout
          </h6>
        </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <a href="/home">
            <ion-item button>
              <ion-icon
                :icon="homeOutline"
                size="large"
                color="primary"
              ></ion-icon>
              <ion-label color="primary">
                <p class="uppercase p-3 font-bold hover:text-blue-600">Home</p>
              </ion-label>
            </ion-item>
          </a>
          <a href="/stats">
            <ion-item button>
              <ion-icon
                :icon="statsChartOutline"
                size="large"
                color="primary"
              ></ion-icon>
              <ion-label>
                <p class="uppercase p-3 font-bold hover:text-blue-600">Stats</p>
              </ion-label>
            </ion-item>
          </a>
          <a href="/settings">
            <ion-item button>
              <ion-icon
                :icon="settingsOutline"
                size="large"
                color="primary"
              ></ion-icon>
              <ion-label>
                <p class="uppercase p-3 font-bold hover:text-blue-600">
                  Settings
                </p>
              </ion-label>
            </ion-item>
          </a>
          <a href="/tables">
            <ion-item button>
              <ion-icon
                :icon="tabletLandscapeOutline"
                size="large"
                color="primary"
              ></ion-icon>
              <ion-label>
                <p class="uppercase p-3 font-bold hover:text-blue-600">
                  Tables
                </p>
              </ion-label>
            </ion-item>
          </a>
          <a href="/maps">
            <ion-item button>
              <ion-icon
                :icon="mapOutline"
                size="large"
                color="primary"
              ></ion-icon>
              <ion-label>
                <p class="uppercase p-3 font-bold hover:text-blue-600">Maps</p>
              </ion-label>
            </ion-item>
          </a>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-page id="main-content">
    <ion-header>
      <ion-grid>
        <ion-row>
          <ioc-col class="flex items-center">
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-item button>
              <ion-icon
                :icon="logoIonic"
                size="large"
                color="primary"
              ></ion-icon>
              <!-- <ion-label color="primary"> -->
              <!-- <p class="uppercase p-3 font-bold hover:text-blue-600">
                    Gigs Dash
                  </p> -->
              <!-- </ion-label> -->
            </ion-item>
          </ioc-col>
          <ion-col>
            <div class="flex">
              <ion-searchbar
                animated="true"
                placeholder="Search"
              ></ion-searchbar>
              <ion-avatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </ion-avatar>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-router-outlet />
    </ion-content>
    <ion-footer>
      <footer-admin />
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import {
  IonRouterOutlet,
  // IonNavLink,
  // IonTabButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonFooter,
  // IonCardContent,
  // IonCardHeader,
  // IonButton,
  // IonCardTitle,
  // IonCardSubtitle,
} from "@ionic/vue";
import { defineComponent } from "vue";
import FooterAdmin from "@/components/layouts/FooterAdmin.vue";
import {
  logoIonic,
  homeOutline,
  settingsOutline,
  mapOutline,
  tabletLandscapeOutline,
  closeCircleOutline,
  statsChartOutline,
} from "ionicons/icons";

export default defineComponent({
  components: {
    FooterAdmin,
    IonRouterOutlet,
    // IonNavLink
    // IonTabButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonFooter,
    // IonCardContent,
    // IonCardHeader,
    // IonButton,
    // IonCardTitle,
    // IonCardSubtitle,
  },
  setup() {
    return {
      logoIonic,
      homeOutline,
      settingsOutline,
      mapOutline,
      tabletLandscapeOutline,
      closeCircleOutline,
      statsChartOutline,
    };
  },
});
</script>