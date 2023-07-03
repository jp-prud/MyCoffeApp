import {CelebrationProps, celebrationsShelfMock} from '@domain';
import {delay} from '@utils';

class CelebrationService {
  public async getCelebrations(): Promise<CelebrationProps[]> {
    await delay();

    return new Promise(resolve => resolve(celebrationsShelfMock));
  }
}

export default new CelebrationService();
