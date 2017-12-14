<template>
  <div>
    <p>List of all available pokemons:</p>
    <p><b>{{loading}}</b></p>
    <table>
      <tr v-for="(pokemon, index) in pokemons">
        <td>{{pokemons[index].id}}</td>
        <td class="name">
          {{pokemons[index].name}}
        </td>
        <td>
          <img v-bind:src="pokemons[index].img">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      pokemons: [],
      loading: ''
    }
  },
  methods: {
    getPokemon(id) {
      if(this.pokemons[0] == undefined) this.loading = "LOADING..."
      var link = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
      this.$http.get(link)
        .then(response => response.json())
        .then(result => this.pokemons.push({name:result.name, id:result.id, img:result.sprites.front_default}))
        .then(result => this.loading = "")
    }
  },
  created: function () {
    for(var i = 1; i <= 721; i++) this.getPokemon(i)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
