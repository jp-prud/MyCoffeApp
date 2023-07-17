import {useProductList} from '@domain';

export function useCategoryScreen(categoryId: string) {
  const {error, isLoading, productsDataListPage, handleRefetcData} =
    useProductList(categoryId);

  return {
    error,
    isLoading,
    productsDataListPage,
    handleRefetcData,
  };
}
