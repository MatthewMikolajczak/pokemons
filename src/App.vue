<template>
  <div id="app">
    <h1>YOUR POKEMON TEAM!</h1>
    <div v-if="localTeam[0]" id="team"><div>{{name}} </div><img v-for="(pokemon, index) in localTeam" v-bind:src="localTeam[index].img"></div>
    <ul id="navi">
      <li><a href="/">MAIN PAGE</a></li>
      <li><a href="/team">TEAM</a></li>
      <li><a href="/list">LIST</a></li>
    </ul>
    <router-view />
    <div id="foot">&copy; Mateusz Mikolajczak</div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        name: '',
        localTeam: [],
        teamInNav: false
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
        }
        this.name = name;
        if(this.localTeam[0] != undefined) this.teamInNav = true
      }
    },
    created: function () {
      this.showTeam()
    }
  }
</script>

<style>
  body {
    width: 100%;
    padding: 0;
    margin: 0;

    font-family: Ubuntu, Tahoma, sans-serif;
    text-align: center;
    background-color: #4b5d7a;
  }
  #app {
    background-color: #00B6CC;
    color: #ffffff;

    margin: 0;
    padding-top: 30px;
    width: 100%;
    height: 100%;
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
      font-weight: bold;
  }
  #foot {
    padding: 30px 0;
    background-color: #4b5d7a;
  }
  a {
    color: navy;
  }
  table {
    margin: 10px auto;
  }
  td.name::first-letter {
    text-transform: uppercase;
  }
  div.box {
    background-color: #00727F;
    margin: 30px auto 30px auto;
    padding: 20px;
    max-width: 600px;
  }
  input {
    height: 25px;
    width: 200px;
    position: relative;
    top: -2px;
    padding: 2px;
  }
  input.txt {
    height: 17px;
  }
</style>
