<template>
  <component
    :is="name"
    v-bind="$props"
  />
</template>
<script>
  import Github from './Github.vue';

  export default {
    components: { Github },
    props: {
      name: {
        type: String,
        require: true,
      },
    },
  };
</script>
