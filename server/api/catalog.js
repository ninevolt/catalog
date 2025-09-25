
const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const products = [
  {
    id: '1',
    name: 'Первый товар',
    price: 829,
    description: 'Описание товара', 
    image: 'https://placehold.co/600x400/000000/FFF',
  },
  {
    id: '2',
    name: 'Второй товар',
    price: 1650,
    description: 'Город под названием Неом — это хаотичный мегаполис и техноутопия на берегу Красного моря', 
    image: 'https://placehold.co/600x400/000000/FFF',
  },
  {
    id: '3',
    name: 'Третий товар',
    price: 540,
    description: 'Описание товара', 
    image: 'https://placehold.co/600x400/000000/FFF',
  },
  {
    id: '4',
    name: 'Четвертый товар',
    price: 964,
    description: 'Описание товара', 
    image: 'https://placehold.co/600x400/000000/FFF',
  },
  {
    id: '5',
    name: 'Пятый товар',
    price: 1285,
    description: 'Описание товара', 
    image: 'https://placehold.co/600x400/000000/FFF',
  },
  {
    id: '6',
    name: 'Шестой товар',
    price: 1000,
    description: 'Описание товара', 
    image: 'https://placehold.co/600x400/000000/FFF',
  },
];

export default defineEventHandler(async (event) => {
  await sleep(1500);

  const query = getQuery(event);
  let items = products;

  if (query.search) {
    items = products.filter(el => {
      return el.name.toLowerCase().trim()
              .includes(query.search.toLowerCase().trim());
    });
  }

  return {
    products: items,
  }
})
