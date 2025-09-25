<template lang="pug">
  header.app-header
    nuxt-link.app-header__link(to="/") Каталог
    CartTool
</template>

<script setup>
  import { CartTool } from '@/entities/cart';
</script>

<style lang="scss">

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 96px;

  &__link {
    text-decoration: underline;
    text-underline-offset: 0.22rem;
    text-decoration-style: dashed;
    text-decoration-color: #555;
    font-size: 16px;
    color: inherit;
  }
}

</style>
