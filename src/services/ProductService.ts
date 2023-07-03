import {ProductProps, productMock, productsShelfMock} from '@domain';
import {delay} from '@utils';

class ProductService {
  public async getProductById(productId: string): Promise<ProductProps> {
    console.log({productId});

    await delay();

    return new Promise(resolve => resolve(productMock));
  }

  public async getProductsFromCategory(
    categoryId: string,
  ): Promise<ProductProps[]> {
    console.log({categoryId});

    await delay();

    return new Promise(resolve => resolve(productsShelfMock));
  }
}

export default new ProductService();
