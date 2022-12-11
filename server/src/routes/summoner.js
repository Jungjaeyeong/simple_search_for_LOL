// const express = require('express');
// const {
//   getSummonerIdAPI,
//   getSummonerProfileInfo,
//   getMatchListAPI,
//   getMatchDetailAPI,
// } = require('../api/summoner');
// const qs = require('querystring');
// const { rankInfoAdd, rankInfoChange } = require('../util/summonerUtil');

import express from 'express';
import { getSummonerIdAPI } from '../apis/summoner';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { nickname } = req.body;
    if (!nickname) {
      return res.status(400).json({ success: false, message: '...' });
    }

    const test = await getSummonerIdAPI({ summonerName: nickname });
    console.log(test);

    return res.status(200).json({ success: true, nickname });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// router.post('/', async (req, res, next) => {
//   const { summonerName } = req.body;
//   let qsSummonerName = summonerName;

//   // 소환사명이 2글자인 경우 중간에 띄어쓰기를 안하면 오류가 발생해서 수정
//   if (summonerName.length == 2) {
//     qsSummonerName = `${summonerName[0]} ${summonerName[1]}`;
//   }

//   qsSummonerName = qs.escape(qsSummonerName); // 한글 소환사명은 인코딩해야 검색이 가능함.

//   try {
//     const summonerProfile = {};
//     const info = await getSummonerIdAPI(qsSummonerName); // 소환사 명으로 소환사 고유 ID 호출 API

//     // 실패시 호출
//     if (info.status && info.status.status_code >= 400) {
//       return res.status(info.status.status_code).json({
//         apiStatus: {
//           success: false,
//           status: info.status.status_code,
//           message: info.status.message,
//         },
//         summonerProfile,
//       });
//     }

//     summonerProfile['info'] = info;
//     const profile = await getSummonerProfileInfo(info.id); // 소환사 고유 ID로 소환사 정보 호출 API
//     summonerProfile['profile'] = profile;
//     rankInfoAdd(summonerProfile.profile);

//     // 각각의 큐 타입 한글화 및 승률 데이터 추가
//     summonerProfile.profile.forEach((v) => {
//       rankInfoChange(v);
//     });

//     return res.status(200).json({ apiStatus: { success: true }, summonerProfile });
//   } catch (e) {
//     console.log(e);
//     next(e);
//   }
// });

export default router;
