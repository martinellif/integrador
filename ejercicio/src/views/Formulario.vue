<template>
  <div>
    <h1>Formulario</h1>

    <section>
      <input v-model="dato" placeholder="ingresar">
      <p>El mensaje es: {{ dato }}</p>
      <button type="submit" @click="mostrarConsola()"><h1>Mostrar consola</h1></button>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Formulario',
  data () {
    return {
      dato: null
    }
  },
  watch:{
    dato(ingr) {
      localStorage.set("datoFormulario", ingr);
			console.log(localStorage.get("datoFormulario"));
    }
  },
}
</script>
