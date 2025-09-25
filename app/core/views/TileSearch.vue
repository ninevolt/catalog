<template lang="pug">
  
  .tile-search(:class="{ 'tile-search--loading': isLoading }")
    input.tile-search__element(placeholder="Поиск" :disabled="isLoading" v-model="value" @input="onInput")
    TileLoader.tile-search__loader(v-if="isLoading")

</template>

<script setup lang="ts">
import { setDebounce } from "@/core";
import TileLoader from "./TileLoader.vue";

defineProps<{
  isLoading?: boolean;
}>();

const emit = defineEmits(['input']);

const value = ref('');

const onInput = setDebounce(() => {
  emit('input', value.value);
}, 600);

</script>

<style lang="scss">

.tile-search {
  position: relative;

  &__element {
    display: block;
    
    width: 100%;
    height: 32px;

    box-sizing: border-box;
    padding: 0 16px;

    border-radius: 16px;
    border: 1px solid #bbb;

    appearance: none;
  }

  &__loader {
    position: absolute;
    top: 0;   right: 8px;
    bottom: 0;

    margin: auto;

    font-size: 20px;
  }

  &--loading {
    opacity: 0.5;
  }
}

</style>
