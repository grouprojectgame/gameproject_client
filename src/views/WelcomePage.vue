<template>
    <div id="welcome-page">
    <div class="welcome-page">

      <img src="../assets/runrun.gif" width="200px">
      <h1>A/D BREAKER</h1>
      <div id="userJoin">
        <form @submit.prevent="addUser">
          <label for="name">enter your name</label>
          <br />
          <input v-model="user" type="text" name="name" id="name" placeholder="your name" />
          <br />
          <br />
          <button class="btn btn-dark" type="submit">Submit</button>
        </form>
        <a href="/howTo">How to play</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    addUser () {
      let payload = {
        user : this.user
      }
      this.$socket.emit('add-user',payload)
      const sound = require(('../assets/submitNameTheme.mp3'))
      if (sound) {
        const audio = new Audio(sound)
        audio.play()
      }
      this.$router.push('/lobby')
    }
  }

}
</script>

<style>

</style>
