import React from 'react';

import {ProductSummaryProps} from '@domain';
import {mockedNavigate} from 'jestSetupFile';

import {render, fireEvent} from '../../../../test/index';
import {ProductSummary} from '../ProductSummary';

const productMock: ProductSummaryProps = {
  id: '1',
  name: 'Product 1',
  price: 100,
  images: [
    {
      url: 'https://via.placeholder.com/150',
      alt: 'Product 1',
    },
  ],
};

describe('ProductSummary', () => {
  describe('ProductData was passed', () => {
    it('should match snapshot', () => {
      const element = render(<ProductSummary product={productMock} />);

      expect(element).toMatchSnapshot();
    });

    it('should call function navigate to product page when product summary has been pressabled', () => {
      const element = render(<ProductSummary product={productMock} />);

      fireEvent.press(element.getByTestId('product-summary'));

      expect(mockedNavigate).toBeCalledWith('ProductScreen', {
        productId: 'productMock.id',
      });
    });
  });
});
