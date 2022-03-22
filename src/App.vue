<template>
  <div class="container my-4">
    <h2 class="text-2xl font-bold text-sky-700">Hello World</h2>
    <BaseButton @click="handleClick" />
  </div>
</template>
<script>
  import BaseButton from './components/BaseButton.vue';
  export default {
    name: 'App',
    components: { BaseButton },
    methods: {
      handleClick() {
        alert('Você apertou o botão!!');
      },
    },
  };
</script>
<style></style>
