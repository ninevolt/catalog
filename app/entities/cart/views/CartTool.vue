<template lang="pug">
  nuxt-link.cart-tool(to="/cart")
    span Корзина
    span.cart-tool__counter(v-if="Cart.value?.count") {{ Cart.value?.count }}
</template>

<script setup>
import { useCart } from '@/entities/cart';

const Cart = useCart();

</script>

<style lang="scss">

.cart-tool {
  display: flex;
  align-items: center;
  gap: 6px;

  height: 40px;

  padding: 0 16px;

  border: 1px solid #ddd;
  border-radius: 20px;

  text-decoration: none;
  font-size: 16px;
  color: inherit;

  &:hover {
    background-color: #ddd;
  }

  &__counter {
    display: block;

    width: 24px;
    height: 24px;

    margin-right: -6px;

    background-color: #555;
    border-radius: 50%;

    text-align: center;
    line-height: 23px;
    font-size: 14px;
    color: #fff;
  }
}

</style>
