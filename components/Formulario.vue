<template>
  <div>
    <form @submit.prevent="">
      <input type="number" :value="value" @input="setValue">
      <br>
      <p>{{value*2}}</p>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Model, Emit } from 'nuxt-property-decorator';

@Component({})
export default class Formulario extends Vue {
  @Model('input', { type: Number })
  readonly value!: number;

  @Emit('input')
  setValue (e: any) {
    const data = e.target.value;
    return parseInt(data);
  }
}
</script>
<style lang="scss"></style>
