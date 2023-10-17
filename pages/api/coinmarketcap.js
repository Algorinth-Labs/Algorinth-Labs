import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get(
      'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        headers: {
          'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
        },
      }
    );

    const json = response.data;
    res.status(200).json(json);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from CoinMarketCap.' });
  }
};
