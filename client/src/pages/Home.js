import { useEffect } from 'react';
import { getSummonerIdAPI } from '../apis';

const Home = () => {
  useEffect(() => {
    getSummonerIdAPI('석황사');
  }, []);

  return <div>Home</div>;
};

export default Home;
