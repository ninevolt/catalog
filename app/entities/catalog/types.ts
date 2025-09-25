
declare global {
  namespace TypeCatalog {
    interface Product {
      id: string;
      name: string;
      price: number;
      description: string;
      image: string;
    }
  }
}

export {};
