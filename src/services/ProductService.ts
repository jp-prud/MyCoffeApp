import {
  CategoryPagePropsAPP,
  ProductPropsAPP,
  productMockAPI,
  productsCategoryMock,
} from '@domain';
import {Page} from '@types';
import {delay} from '@utils';

import APIMapper from './mappers/APIMapper';
import ProductMapper from './mappers/ProductMapper';

class ProductService {
  public async getProductById(
    productId: ProductPropsAPP['id'],
  ): Promise<ProductPropsAPP> {
    await delay(500);

    return new Promise(resolve => {
      const product = productMockAPI.data.find(
        currentProduct => currentProduct.id === productId,
      );

      if (!product) {
        resolve(ProductMapper.toPresentation(productMockAPI.data[0]));

        return;
      }

      resolve(ProductMapper.toPresentation(product));
    });
  }

  public async getProductsFromCategory(
    categoryId: string,
  ): Promise<Page<CategoryPagePropsAPP>> {
    console.log({categoryId});

    await delay();

    return new Promise(resolve =>
      resolve({
        data: [
          {
            ...productsCategoryMock.data[0],
            products: productsCategoryMock.data[0].products.map(
              ProductMapper.toPresentation,
            ),
          },
        ],
        meta: APIMapper.toMetaDataPresentation(productsCategoryMock.meta),
      }),
    );
  }
}

export default new ProductService();
