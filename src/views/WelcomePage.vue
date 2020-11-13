<template>
    <div id="welcome-page">
    <div class="welcome-page">

      <img src="../assets/daryal.png" width="200px">
      <h1>Quiz Aci Acian with Daryal</h1>
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
      const payload = {
        user: this.user
      }
      this.$socket.emit('add-user', payload)
      const sound = require(('../assets/tariksissemongko.mp3'))
      if (sound) {
        const audio = new Audio(sound)
        audio.play()
      }
      localStorage.user = this.user
      this.$router.push('/game')
    }
  }

}
</script>

<style>

</style>
