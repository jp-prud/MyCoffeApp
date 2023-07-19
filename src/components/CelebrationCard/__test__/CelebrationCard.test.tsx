import {CelebrationProps} from '@domain';

import {render} from '../../../../test';
import {CelebrationCard} from '../CelebrationCard';

const celebrationMock: CelebrationProps = {
  id: '1',
  name: 'Birthday',
  images: [
    {
      url: 'https://via.placeholder.com/150',
      alt: 'Birthday',
    },
  ],
};

describe('CelebrationCard', () => {
  describe('Celebration data was passed', () => {
    it('should render the component', () => {
      const {getByTestId} = render(
        <CelebrationCard celebration={celebrationMock} />,
      );

      expect(getByTestId('celebration-card')).toBeTruthy();
    });
  });
});
