<template lang="pug">
  .app-container
      AppHeader
      main
        slot
</template>

<script setup lang="ts">
  import { AppHeader } from '@/core';
</script>

<style lang="scss">

.app-container {
  max-width: 960px;

  margin: auto;
  padding: 0 20px 80px;
}

</style>
