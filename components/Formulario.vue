<template>
  <form @submit.prevent="submitForm()">
    <input type="number" :value="value" @input="setValue">
    <br>
    <div>
      <p>{{ value*2 }}</p>
      <p class="number">
        {{ calculo }}
      </p>
    </div>
    <button>
      Enviar
    </button>
  </form>
</template>
<script lang="ts">
import { Component, Vue, Model, Emit } from 'nuxt-property-decorator';

@Component({
})
export default class Formulario extends Vue {
  calculo: number = 0;

  @Model('input', { type: Number })
  readonly value!: number;

  @Emit('input')
  setValue (e: any) {
    const data = e.target.value;
    return parseInt(data);
  }

  submitForm () {
    this.calculo = 5;
  }
}
</script>
<style lang="scss"></style>
