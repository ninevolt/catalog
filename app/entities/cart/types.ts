
declare global {
  namespace TypeCart {
    interface Item {
      product: TypeCatalog.Product;
      count: number;
    }
  }
}

export {};
