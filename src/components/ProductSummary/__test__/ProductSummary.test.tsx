import React from 'react';

import {ProductSummaryProps} from '@domain';

import {render} from '../../../../test/test-utils';
import {ProductSummary} from '../ProductSummary';

describe('ProductSummary', () => {
  describe('when ProductSummary passed', () => {
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

    // eslint-disable-next-line jest/expect-expect
    it('should render ProductSummary', () => {
      render(<ProductSummary product={productMock} />);
    });
  });

  describe('when ProductSummary not passed', () => {
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

    // eslint-disable-next-line jest/expect-expect
    it('should render ProductSummary', () => {
      render(<ProductSummary product={productMock} />);
    });
  });
});
