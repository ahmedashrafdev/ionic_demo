<template>
  <ion-page>
    <app-header title="Account"/>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Account</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="Account page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import AppHeader from '@/components/layouts/AppHeader.vue'

export default  {
  name: 'Tab3',
  components: { AppHeader , ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>