import {ProductPropsAPP, productMockAPI} from '@domain';
import {Page} from '@types';
import {delay} from '@utils';

import APIMapper from './mappers/APIMapper';
import ProductMapper from './mappers/ProductMapper';

class ProductService {
  public async getProductById(productId: string): Promise<ProductPropsAPP> {
    await delay(100);

    return new Promise(resolve => {
      const product = productMockAPI.data.find(
        currentProduct => currentProduct.id === productId,
      );

      if (!product) {
        resolve(ProductMapper.toPresentation(productMockAPI.data[0]));

        return;
      }

      console.log({product});

      resolve(ProductMapper.toPresentation(product));
    });
  }

  public async getProductsFromCategory(
    categoryId: string,
  ): Promise<Page<ProductPropsAPP>> {
    console.log({categoryId});

    await delay();

    return new Promise(resolve =>
      resolve({
        data: productMockAPI.data.map(ProductMapper.toPresentation),
        meta: APIMapper.toMetaDataPresentation(productMockAPI.meta),
      }),
    );
  }
}

export default new ProductService();
