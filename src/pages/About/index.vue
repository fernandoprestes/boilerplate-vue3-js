<template>
  <button
    class="flex items-center justify-center gap-2"
    @click="$router.push({ name: 'Home' })"
  >
    <span
      class="iconify"
      data-icon="ic:baseline-arrow-back"
    ></span
    >Voltar
  </button>
  <div class="container">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sed ipsam? Maiores nulla cum, consectetur dolorem
    quisquam corporis blanditiis. Numquam consectetur laborum nemo possimus, architecto asperiores cumque hic explicabo
    impedit!
  </div>
  <div class="container flex flex-col items-center justify-center space-y-10">
    <span class="text-4xl">{{ count }}</span>
    <button
      class="rounded bg-green-400 py-2 px-6"
      @click="increment"
    >
      Incrementar
    </button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      increment() {
        this.count += 1;
      },
    },
  };
</script>
