<template>
  <div>
    <GameBar v-for="(usr, i) in users" :key="i" :usr="usr" />
  </div>
</template>

<script>
import GameBar from '@/components/GameBar.vue'
export default {
  name: 'Lobby',
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  components: {
    GameBar
  }
}
</script>

<style>
</style>
