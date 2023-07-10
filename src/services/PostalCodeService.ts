import {delay} from '@utils';

class PostalCodeService {
  public async getShippingDataFromPostalCode(postalCode: string) {
    await delay(3000);

    const response = await fetch(
      `https://viacep.com.br/ws/${postalCode}/json/`,
    );

    const data = await response.json();

    return data;
  }
}

export default new PostalCodeService();
