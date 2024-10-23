//la structure des produits à afficher sur le catalogue.
export interface IProduct {
    id: number;
    description: string;
    name: string;
    imageName: string;
    category: string;
    price: number;
    discount: number;
  }