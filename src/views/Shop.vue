<template>
  <ion-page>
    <app-header title="shop"/>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Shop</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Shop page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import AppHeader from '@/components/layouts/AppHeader.vue'

export default  {
  name: 'Tab2',
  components: { AppHeader , ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>