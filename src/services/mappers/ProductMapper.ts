import {ProductPropsAPI, ProductPropsAPP} from '@domain';

class ProductMapper {
  toPresentation(product: ProductPropsAPI): ProductPropsAPP {
    return {
      id: product.id,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      description: product.description,
      categoryId: product.category_id,
      images: product.images,
    };
  }
}

export default new ProductMapper();
