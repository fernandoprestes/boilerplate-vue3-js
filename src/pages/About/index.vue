<template>
  <div class="h-screen">
    <div class="container pt-10">
      <button
        class="flex items-center justify-center gap-2 hover:text-primary-300"
        @click="$router.push({ name: 'Home' })"
      >
        <span
          class="iconify"
          data-icon="ic:baseline-arrow-back"
        ></span
        >Voltar
      </button>
    </div>
    <div class="container w-1/2 space-y-4">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit quaerat nam laudantium cum ea cupiditate!
        Nobis, perspiciatis molestiae molestias eius iure quaerat libero numquam voluptatibus, laborum suscipit quasi
        atque perferendis?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae corrupti, provident iste et quidem sequi? Dolor
        aperiam sint magnam?
      </p>
    </div>
    <div class="container mt-10 flex flex-col items-center justify-center space-y-10">
      <span class="text-4xl">{{ count }}</span>
      <span>{{ countLimit }}</span>
      <div class="flex gap-2">
        <button
          class="rounded bg-primary-600 py-2 px-6 text-white"
          @click="increment"
        >
          Incrementar
        </button>
        <button
          class="rounded bg-primary-600 py-2 px-6 text-white"
          @click="decrement"
        >
          Decrementar
        </button>
      </div>
    </div>
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
      decrement() {
        if (this.count === 0) return;
        this.count -= 1;
      },
    },
  };
</script>
