<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="secondary">
          <ion-button fill="outline">
            <ion-icon slot="start" :icon="star"></ion-icon>
            Star
          </ion-button>
        </ion-buttons>
        <ion-title>{{title}}</ion-title>
        <ion-buttons slot="primary">
          <ion-button color="danger" fill="outline">
            Edit
            <ion-icon slot="end" :icon="create"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
</template>

<script>
import { defineComponent } from 'vue';
import { 
  ellipsisHorizontal,
  ellipsisVertical, 
  helpCircle, 
  personCircle, 
  search, 
  star
} from 'ionicons/icons';
export default defineComponent({
  props:['title'],
  setup() {
    return {
      ellipsisHorizontal,
      ellipsisVertical, 
      helpCircle, 
      personCircle, 
      search, 
      star
    }
  }
})
</script>