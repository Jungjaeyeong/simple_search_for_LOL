import axios from 'axios';
import { API_KEY, API_URL, API_URL_V5 } from '../config';

const headers = {
  'X-Riot-Token': `${API_KEY}`,
  'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
  'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
};

export const getSummonerIdAPI = ({ summonerName }) => {
  const option = { headers, query: { summonerName } };
  return axios.get(`${API_URL}/summoner/v4/summoners/by-name/`, option);
};

// const getSummonerProfileInfo = async (summonerId) => {
//   try {
//     const response = await axios.get(`${API_URL}/league/v4/entries/by-summoner/${summonerId}`, {
//       headers,
//     });
//     return response.data;
//   } catch (e) {
//     return e.response.data;
//   }
// };

// const getMatchListAPI = async (puuid) => {
//   try {
//     const response = await axios.get(`${API_URL_V5}/match/v5/matches/by-puuid/${puuid}/ids`, {
//       headers,
//     });
//     return response.data;
//   } catch (e) {
//     return e.response.data;
//   }
// };

// const getMatchDetailAPI = async (matchId) => {
//   try {
//     const response = await axios.get(`${API_URL_V5}/match/v5/matches/${matchId}`, {
//       headers,
//     });
//     return response.data;
//   } catch (e) {
//     return e.response.data;
//   }
// };

// const getChallengerRankAPI = async () => {
//   try {
//     const response = await axios.get(
//       `${API_URL}/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`,
//       { headers },
//     );
//     return response.data;
//   } catch (e) {
//     return e.response.data;
//   }
// };

// const getGrandmasterRankAPI = async () => {
//   try {
//     const response = await axios.get(
//       `${API_URL}/league/v4/grandmasterleagues/by-queue/RANKED_SOLO_5x5`,
//       { headers },
//     );
//     return response.data;
//   } catch (e) {
//     return e.response.data;
//   }
// };

// const getMasterRankAPI = async () => {
//   try {
//     const response = await axios.get(
//       `${API_URL}/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5`,
//       { headers },
//     );
//     return response.data;
//   } catch (e) {
//     return e.response.data;
//   }
// };
