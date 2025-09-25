<template lang="pug">

  ContentSection.section-cart(title="Корзина" :is-empty="!Cart.items?.length")
    template(v-slot:tools)
      .section-cart__value Сумма: {{ Cart.value?.price }} ₽
      button.section-cart__clear(@click="Cart.reset([])") Очистить
    
    template(v-slot:body)
      TileProduct(:key="item.id" v-for="item in Cart.items" v-bind="item")
    
    template(v-slot:empty)
      section
        h2 Корзина пуста
        p перейти в 
          nuxt-link(to="/") каталог

</template>

<script setup lang="ts">
import { useCart } from '@/entities/cart';
import { ContentSection } from '@/core';
import { TileProduct } from '@/entities/catalog';

const Cart = useCart();
</script>

<style lang="scss">

.section-cart {
  margin-top: 40px;
  
  &__clear {
    text-decoration: underline;
    text-underline-offset: 0.22rem;
    text-decoration-style: dashed;
    text-decoration-color: #555;
    color: inherit;
  }
}

</style>
