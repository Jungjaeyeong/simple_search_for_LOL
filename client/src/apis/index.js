import axios from 'axios';

const headers = {
  'X-Riot-Token': `RGAPI-3f015e86-5c29-40fd-8c37-b8b2cdd61da9`,
  'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
  'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
};

export const getSummonerIdAPI = async (summonerName) => {
  const response = await axios.get(
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
    { params: { summonerName }, headers },
  );

  console.log(response);

  return response.data;
};
