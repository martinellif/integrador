<template>
  <div>
    <h1>Mostrar dato Formulario</h1>

    <section>
      <p>{{ elDato }}</p>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Mostrar',
  data () {
    return {
      elDato: null
    }
  },
  mounted() {
    this.elDato = localStorage.get("datoFormulario");
    console.log(this.elDato);
  }
}
</script>
