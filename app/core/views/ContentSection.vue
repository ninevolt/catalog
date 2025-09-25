<template lang="pug">
  
  section.content-section
    .content-section__head
      h1.content-section__title {{ title }}
      
      .content-section__tools
        slot(name="tools")
        
    .content-section__empty(v-if="isEmpty")
      slot(name="empty")
    
    .content-section__body(v-else)
      slot(name="body")

</template>

<script setup lang="ts">
defineProps<{
  title: string;
  isEmpty: boolean;
}>()
</script>

<style lang="scss">

.content-section {
  margin-top: 40px;

  &__head {
    margin-bottom: 40px;

    @media screen and (min-width: 760px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 48px;
    }

    @media screen and (min-width: 980px) {
      
    }
  }

  &__title {
    margin: 0;
  }

  &__tools {
    display: flex;
    align-items: center;
    gap: 24px;

    margin-top: 24px;

    @media screen and (min-width: 760px) {
      margin-top: 0;
    }
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;

    @media screen and (min-width: 760px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 980px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__empty {
    display: grid;
    align-items: center;
    justify-content: center;
    min-height: 400px;

    text-align: center;
  }
}

</style>
