<template>
  <div>
    <div class="box">
    <p>YOUR TEAM NAME: <input v-model="name" v-on:keyup="setName()" id="inputName" type="text" maxlength="30"></p>
    <p>YOUR TEAM: </p>
    <table>
      <tr v-for="(pokemon, index) in team">
        <td>{{team[index].id}}</td>
        <td class="name">{{team[index].name}}</td>
        <td><img v-bind:src="team[index].img"></td>
        <td><input v-on:click="remove(index)" type="submit" value="REMOVE FROM TEAM"></td>
      </tr>
    </table>
  </div>
  <div class="box">
    <p>ADD NEW:</p>
    <p>SEARCH BY ID (1-721): <input v-model="searching" v-on:keyup.enter="search()" type="text">
      <input v-on:click="search()" type="button" value="SEARCH">
    </p>
    <p><b>{{loading}}</b></p>
    <table>
      <tr v-for="(pokemon, index) in pokemons">
        <td>{{pokemons[index].id}}</td>
        <td class="name">{{pokemons[index].name}}</td>
        <td><img v-bind:src="pokemons[index].img"></td>
        <td><input v-on:click="add(index)" type="submit" value="ADD TO TEAM"></td>
      </tr>
    </table>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'team',
    data() {
      return {
        name: '',
        searching: '',
        pokemons: [],
        team: [],
        loading: ''
      }
    },
    methods: {
      search() {
        this.loading = "LOADING..."
        var link = 'http://pokeapi.salestock.net/api/v2/pokemon/' + this.searching + '/';
        this.$http.get(link)
          .then(response => response.json())
          .then(result => this.pokemons.unshift({name:result.name, id:result.id, img:result.sprites.front_default}))
          .then(result => this.loading = "")
      },
      add(pokemon) {
        if(Object.keys(this.team).length >= 4){
          alert("You can have only 4 pokemons in your team")
          return 0;
        }
        this.team.push(this.pokemons[pokemon])
        localStorage.setItem('team', JSON.stringify(this.team))
        this.$parent.showTeam()
      },
      remove(pokemon) {
        this.team.splice(pokemon, 1)
        localStorage.setItem('team', JSON.stringify(this.team))
        this.$parent.showTeam()
      },
      setName() {
        localStorage.setItem('name', JSON.stringify(this.name))
        this.$parent.showTeam()
      },
      getName() {

      }
    },
    created: function() {
        var team = JSON.parse(localStorage.getItem('team'))
        for (var index in team) {
          this.team.push(team[index])
        }
        var name = JSON.parse(localStorage.getItem('name'))
        this.name = name
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  table {
    margin: 10px auto;
  }

  td.name::first-letter {
    text-transform: uppercase;
  }
  div.box {
    background-color: darkorange;
    margin: 30px;
    padding: 20px;
  }
</style>
