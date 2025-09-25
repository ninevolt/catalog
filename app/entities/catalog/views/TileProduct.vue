<template lang="pug">
  .tile-product(:class="{ 'tile-product--in-cart': inCart }")
    img.tile-product__image(:src="product.image")
    
    .tile-product__body
      .tile-product__name {{ product.name }}
      .tile-product__price {{ product.price }} ₽

    .tile-product__foot
      .tile-product__count(v-if="count")
        button.tile-product__count-minus(@click="Cart.setCount(product.id, 'minus')") -
        .tile-product__count-value {{ count }}
        button.tile-product__count-plus(@click="Cart.setCount(product.id, 'plus')") +

      button.tile-product__cart(@click="toggleCart") {{toggleCartTitle }}
</template>

<script setup lang="ts">
import { useCart } from '~/entities/cart';

const props = defineProps<{
  product: TypeCatalog.Product,
  count?: number,
}>();

const Cart = useCart();
const { map: cartMap } = storeToRefs(Cart);

const inCart = computed(() => {
  return props.product.id in cartMap.value;
});

const toggleCartTitle = computed(() => {
  if (inCart.value) {
    return 'Удалить из корзины';
  }
  else {
    return 'Добавить в корзину';
  }
});

const toggleCart = function () {
  if (inCart.value) {
    Cart.remove(props.product.id);
  }
  else {
    Cart.add(props.product);
  }
};

</script>

<style lang="scss">

.tile-product {
  padding: 20px;

  background-color: #ddd;
  border-radius: 30px 30px 20px 20px;

  text-align: left;

  &__image {
    display: block;
    max-width: 100%;

    border-radius: 20px;
  }

  &__body,
  &__foot {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 16px;
  }

  &__cart {
    appearance: none;
    margin-left: auto;

    border: none;
    text-decoration: underline;
    text-underline-offset: 0.22rem;
    text-decoration-style: dashed;
    text-decoration-color: #555;
  }

  &__count {
    display: flex;
    align-items: center;
    gap: 8px;

    &-minus, &-plus {
      width: 24px;
      height: 24px;

      background-color: #fff;
      border-radius: 50%;
    }
  }

  //

  &--in-cart {
    background-color: rgb(118, 203, 112);
  }
}

</style>
