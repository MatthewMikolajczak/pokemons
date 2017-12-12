<template>
  <div id="app">
    <h1>YOUR POKEMON TEAM!</h1>
    <div id="team"><div id="teamName">{{name}} </div><img v-for="(pokemon, index) in localTeam" v-bind:src="localTeam[index].img"></div>
    <ul id="navi">
      <li><a href="/">MAIN PAGE</a></li>
      <li><a href="/team">TEAM</a></li>
      <li><a href="/list">LIST</a></li>
    </ul>
    <router-view />
    &copy; Mateusz Mikolajczak
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        name: '',
        localTeam: []
      }
    },
    methods: {
      showTeam() {
        var name = JSON.parse(localStorage.getItem('name'))
        var team = JSON.parse(localStorage.getItem('team'))
        this.localTeam = []
        this.name = ''
        for (var index in team) {
          this.localTeam.push(team[index])
          this.name = name;
        }
      }
    },
    created: function () {
      this.showTeam()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #navi{
      border:1px solid #ccc;
      border-width:1px 0;
      list-style:none;
      margin:0;
      padding:0;
      text-align:center;
  }
  #navi li{
      display:inline;
  }
  #navi a{
      display:inline-block;
      padding:10px;
      text-decoration: none;
      color: navy;
      font-weight: bold;
  }
</style>
