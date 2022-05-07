<template>
  <div class="container flex h-screen flex-col items-center justify-center space-y-10">
    <h1 class="text-4xl font-bold text-green-400">Boilerplate Vite + Vue3</h1>
    <div class="flex gap-4">
      <img
        class="w-32"
        src="../../assets/img/vitejs.svg"
        alt="vitejs"
        title="vitejs"
      />
      <img
        class="w-32"
        src="../../assets/img/vue.svg"
        alt="vue"
        title="vue"
      />
    </div>
    <div class="flex gap-4">
      <img
        class="w-10"
        src="../../assets/img/javascript.svg"
        alt="javascript"
        title="javascript"
      />
      <img
        class="w-10"
        src="../../assets/img/tailwindcss.svg"
        alt="tailwindcss"
        title="tailwindcss"
      />

      <img
        class="w-10"
        src="../../assets/img/eslint.svg"
        alt="eslint"
        title="eslint"
      />
      <img
        class="w-10"
        src="../../assets/img/prettier.svg"
        alt="prettier"
        title="prettier"
      />
    </div>
    <div class="h-1 w-1/2 bg-green-400"></div>
    <div>
      <router-link
        class="rounded bg-green-400 px-6 py-2 transition ease-in hover:bg-green-300"
        :to="{ name: 'About' }"
        >Sobre</router-link
      >
    </div>
    <a
      href="https://github.com/fernandoprestes/boilerplate-vue3-js"
      target="_blank"
      class="flex items-center justify-center gap-2 rounded border border-green-400 px-2 hover:bg-green-400 hover:text-green-50"
    >
      Github
      <Icon
        name="Github"
        color="#000"
      />
    </a>
  </div>
</template>
<script>
  import Icon from '../../components/Icon/Index.vue';
  export default {
    name: 'App',
    components: { Icon },
  };
</script>
<style></style>
