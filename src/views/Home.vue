<template>
  <ion-page>
    <app-header title="home"/>
    <ion-content :fullscreen="true">
      <ExploreContainer name="Home page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import AppHeader from '@/components/layouts/AppHeader.vue'
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'Tab1',
  components: { AppHeader , ExploreContainer, IonContent, IonPage }
}
</script>