<template lang="pug">

  ContentSection.section-catalog(title="Каталог" :is-empty="!Catalog.items?.length")
    template(v-slot:tools)
      TileSearch(@input="search" :is-loading="Catalog.isLoading")
      p {{ isLoading }}
    
    template(v-slot:body)
      TileProduct(:key="item.id" v-for="item in Catalog.items" :product="item")
    
    template(v-slot:empty)
      section
        h2 Каталог пуст

</template>

<script setup lang="ts">
import { ContentSection, TileSearch } from '@/core';
import { useCatalog } from '../domain';
import TileProduct from './TileProduct.vue';

const Catalog = useCatalog();

await Catalog.fetch();

const search = function (substring = '') {
  Catalog.fetch({search: substring});
}

</script>
