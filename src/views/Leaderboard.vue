<template>
  <div class="lb-container bordered">
      <div class="lb-card">
          <div style="text-align: right;">
              <span>X</span>
          </div>
          <div class="lb-content bordered">
            <span class="lb-content-title">Leaderboard</span>
            <ul v-for="(user,i) in dataUser" :key="i" class="lb-list">
              <li class="lb-list-item">{{user.name}} - {{user.score}}<a v-if="i<1" @click.prevent="showModal" class="lb-list-price" href=""> Claim Prize</a></li>
            </ul>
            <router-link to='/'>back to home</router-link>
          </div>
      </div>
      <!-- {{JSON.stringify(dataUser)}} -->
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Leaderboard',
  data: () => ({

  }),
  methods: {
    ...mapActions(['getAllPlayers', 'deleteAllPlayers'])
  },
  computed: {
    ...mapState(['dataUser'])
  },
  created () {
    this.getAllPlayers()
  }
}
</script>
<style scoped>
.lb-card {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 24px 48px;
    -webkit-box-shadow: 0px 3px 12px -4px rgba(0,0,0,0.59);
    -moz-box-shadow: 0px 3px 12px -4px rgba(0,0,0,0.59);
    box-shadow: 0px 3px 12px -4px rgba(0,0,0,0.59);
    min-width: 400px;
}
.lb-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #000000;
}
.lb-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.lb-content-img {
    height: 200px;
    margin: 30px 0px;
}
.lb-content-title {
    font-size: 2rem;
    margin-bottom: 10px;
}
.lb-content-subtitle {
    margin-bottom: 10px;
}
.lb-content-text {
    text-align: center;
    color: rgba(0,0,0,0.59);
    font-size: .75rem;
    line-height: 2;
}
.lb-list-item {
  list-style: none;
  font-size: 1.2rem;
}
.lb-list {
  padding: 0;
  line-height: 1.5;
}
.lb-list-price {
  font-size: .8rem;
}
.lb-footer {
    min-width: 400px;
    min-height: 150px;
}
.bordered {
    /* border: 1px solid rgba(0,0,0,.2); */
}
</style>
