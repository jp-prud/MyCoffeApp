import {ProductProps, productMockAPI} from '@domain';
import {Page} from '@types';
import {delay} from '@utils';

import APIMapper from './mappers/APIMapper';

class ProductService {
  public async getProductById(productId: string): Promise<ProductProps> {
    await delay(100);

    return new Promise(resolve => {
      const product = productMockAPI.data.find(
        currentProduct => currentProduct.id === productId,
      );

      if (!product) {
        resolve(productMockAPI.data[0]);

        return;
      }

      resolve(product);
    });
  }

  public async getProductsFromCategory(
    categoryId: string,
  ): Promise<Page<ProductProps>> {
    console.log({categoryId});

    await delay();

    return new Promise(resolve =>
      resolve({
        data: productMockAPI.data,
        meta: APIMapper.toMetaDataPresentation(productMockAPI.meta),
      }),
    );
  }
}

export default new ProductService();
