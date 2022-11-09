<template>
<Navbar/>
<PokemonCard/>
 <div id="habilidades">

</div> 

  
</template>


<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import PokemonCard from '@/components/PokemonCard.vue'

export default {
data: () => ({
      show: false,
    }),
name:"habilidades",
  components: {
    Navbar,
    PokemonCard

  }
 
  
}
</script>