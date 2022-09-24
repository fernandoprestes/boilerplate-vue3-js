<script setup>
  import { ref } from 'vue';
  import ViteVueColors from '@/components/Icon/ViteVueColors.vue';

  const count = ref(0);

  function increment() {
    count.value += 1;
  }

  function decrement() {
    if (count.value === 0) return;
    count.value -= 1;
  }
</script>
<template>
  <div class="h-full min-h-screen py-10">
    <div class="container max-w-2xl px-8">
      <div class="my-6">
        <button
          class="flex items-center justify-center gap-2 font-bold text-slate-400 hover:text-white"
          @click="$router.push({ name: 'Home' })"
        >
          <span
            class="iconify"
            data-icon="ic:baseline-arrow-back"
          />
          Voltar
        </button>
      </div>
      <div class="space-y-4 text-xl leading-relaxed text-slate-300">
        <p>
          Este projeto de boilerplate <ViteVueColors /> foi desenvolvido com base em estudos sobre o Vue e tem como
          objetivo servir de template para projetos de estudo que me faça especializar no desenvolvimento frontend.
        </p>
        <p>
          Sempre que precisava iniciar um <span class="rounded bg-slate-600 px-2 font-mono">setup</span> para um projeto
          para poder praticar ou estudar tinha que fazer as mesmas configurações todas as vezes. Pensando nisso, resolvi
          criar este template para ser sempre o ponto inicial de todos os projetos que eu quisesse ou precisasse fazer.
        </p>
        <p>
          Como o avanço e aprofundamento nos estudos, e para padronizar todos os meus projetos, estudei e adicionei o
          <a
            href="https://eslint.org/"
            target="_blank"
            class="inline-block rounded bg-slate-300 px-2 font-mono font-bold text-[#482fbd]"
          >
            ESLint
          </a>
          e o
          <a
            href="https://prettier.io/"
            target="_blank"
            class="inline-block rounded bg-slate-300 px-2 font-mono font-bold text-[#1a2b34]"
          >
            Prettier
          </a>
          para ter um padrão de código ao meu estilo. Também estudei e adicionei o
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            class="font-bold text-[#38bdf8]"
          >
            tailwindcss
          </a>
          , framework css para desenvolvimento rápido.
        </p>

        <p>
          Um caso de uso desse boilerplate foi o desenvolvimento do projeto
          <a
            href="https://github.com/fernandoprestes/cake-shop-client"
            class="underline underline-offset-2 hover:text-black"
          >
            cake-shop-client
          </a>
          o projeto foi iniciado usando este boilerplate.
        </p>
      </div>
    </div>
    <div class="container mt-10 flex flex-col items-center justify-center space-y-4 px-8">
      <p class="font-mono text-slate-300">Exemplo para incrementar e decrementar um contador</p>
      <span class="text-4xl text-white">{{ count }}</span>
      <span>{{ countLimit }}</span>
      <div class="flex gap-2">
        <button
          class="rounded bg-primary-600 py-2 px-6 text-white hover:bg-primary-500"
          @click="increment"
        >
          Incrementar
        </button>
        <button
          class="rounded bg-primary-600 py-2 px-6 text-white hover:bg-primary-500"
          @click="decrement"
        >
          Decrementar
        </button>
      </div>
    </div>
  </div>
</template>
