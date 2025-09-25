
import { defineStore } from 'pinia';

export const useCart = defineStore('cart', () => {

  // state

  const items = ref<TypeCart.Item[]>([]);

  const value = computed(() => {
    return items.value.reduce((acc, el) => {
      acc.price += el.product.price * el.count;
      acc.count += el.count;
      return acc;
    }, {price: 0, count: 0});
  });
  
  const map = computed(() => {
    const o = <{[key: string]: boolean}>{};

    for (const item of items.value) {
      o[item.product.id] = true;
    }

    return o;
  });

  // action

  const find = function (key: 'id', v: string | number) {
    for (const item of items.value) {
      if (item.product[key] === v) return item;
    }
  };

  const add = async function (product: TypeCatalog.Product) {
    if (map.value[product.id]) return false;

    items.value.push({
      product,
      count: 1
    });
  };

  const remove = async function (id: string) {
    items.value = items.value.filter(el => el.product.id !== id);
  };

  const reset = function (v: TypeCatalog.Product[]) {
    items.value = v.map(el => ({
      product: el,
      count: 1,
    }));
  };

  const setCount = async function (id: string, count: number | 'plus' | 'minus') {
    const target = find('id', id);

    if (!target) return false;

    if (count === 'plus') target.count++;
    else if (count === 'minus') target.count--;
    else target.count = count;

    if (target.count === 0) remove(id);
  };

  // expose

  return {
    items,
    value,
    map,

    add,
    remove,
    reset,
    setCount,
  };
},
{
    persist: true,
})
