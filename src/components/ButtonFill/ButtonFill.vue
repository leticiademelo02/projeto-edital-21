<template>
  <button @click="$emit('click', $event)" class="">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonFill",
};
</script>
