export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'WashingMachine',
      status: 'online'
    },
    {
      id: 2,
      name: 'Freezer',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Televsion',
      status: 'offline'
    }
  ];

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    const product = this.products.find(
      (s) => {
        return s.id === id;
      }
    );
    return product;
  }

  updateProduct(id: number, prodInfo: {name: string, status: string}) {
    const product = this.products.find(
      (s) => {
        return s.id === id;
      }
    );
    if (product) {
      product.name = prodInfo.name;
      product.status = prodInfo.status;
    }
  }
}
