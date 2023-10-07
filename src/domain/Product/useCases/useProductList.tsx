import {useState, useCallback, useEffect} from 'react';
import {Alert} from 'react-native';

import {MetaDataPage, Page} from '@types';

import ProductService from '../../../services/ProductService';
import {CategoryPagePropsAPP} from '../Product.types';

export function useProductList(categoryId: string) {
  const [productsDataListPage, setProductsDataListPage] = useState<
    Page<CategoryPagePropsAPP>
  >({
    meta: {} as MetaDataPage,
    data: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);

      setError(false);

      const response = await ProductService.getProductsFromCategory(categoryId);

      setProductsDataListPage(response);
    } catch (err) {
      setError(true);
      Alert.alert('Erro ao carregar produtos');
    } finally {
      setIsLoading(false);
    }
  }, [categoryId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    productsDataListPage,
    isLoading,
    error,
    handleRefetcData: fetchData,
  };
}
