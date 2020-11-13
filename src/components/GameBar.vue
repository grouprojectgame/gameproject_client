<template>
  <div class="container">
      <h1>{{usr.user}}</h1>
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        :style="width"
        :aria-valuenow="score"
        aria-valuemin="0"
        aria-valuemax="500"
      ></div>
    </div>
    <h1>{{ score }}/{{ max }}</h1>
    <div>
      <p>MASUKAN A/D DISINI</p>
      <p>V</p>
      <input
        v-model="gameInput"
        type="text"
        @keydown="nameKeydown($event)"
        style="width: 10px"
      />
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'GameBar',
  props: ['usr'],
  data () {
    return {
      gameInput: '',
      score: 0,
      width: '',
      max: 20
    }
  },
  methods: {
    nameKeydown (e) {
      if (/^[^ad]$/.test(e.key)) {
        e.preventDefault()
      }
    }
  },
  watch: {
    gameInput (val) {
      this.gameInput = val.replace(/(.)\1{1,}/g, '')
      this.score = this.gameInput.length
      const progress = Math.floor(this.score / (this.max / 100))
      this.width = `width: ${progress}%`
      const payload = {
        gameInput: this.gameInput,
        score: this.score,
        width: this.width
      }
      this.$socket.emit('update-data', payload)
      if (this.score === this.max) {
        alert('GAME SELESAI')
        this.$router.push('/')
        this.gameInput = ''
      }
    }
  },
  sockets: {
    dataGame: (data) => {
      console.log(data)
    }
  }
}
</script>

<style>

</style>
