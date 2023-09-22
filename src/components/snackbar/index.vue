<template>
   <div class="text-center">
    <v-snackbar
      v-model="store.state.snackbar.active"
      multi-line
      timeout="3000"
      :color="store.state.snackbar.color"
    >
      {{ store.state.snackbar.body }}

      <template v-slot:actions>
        <v-btn
          variant="text"
          @click="updateWay"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script setup name="snackbar">
import { useStore } from 'vuex';

const store = useStore()

const updateWay = () => {
  store.dispatch('snackbar/show', { active: false, text: '' })
}


</script>