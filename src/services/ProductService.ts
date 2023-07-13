import {ProductProps, productMock} from '@domain';
import {delay} from '@utils';

class ProductService {
  public async getProductById(
    productId: string,
  ): Promise<ProductProps | undefined> {
    await delay(100);

    return new Promise(resolve => {
      const product = productMock.find(
        currentProduct => currentProduct.id === productId,
      );

      resolve(product);
    });
  }

  public async getProductsFromCategory(
    categoryId: string,
  ): Promise<ProductProps[]> {
    console.log({categoryId});

    await delay();

    return new Promise(resolve => resolve(productMock));
  }
}

export default new ProductService();
