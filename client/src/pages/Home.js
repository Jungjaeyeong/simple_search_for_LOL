import axios from 'axios';
import { useEffect } from 'react';
import { getTest, test } from '../apis/summoner';

const Home = () => {
  const test2 = async () => {
    const { data } = await axios.get('http://localhost:8000/');
    console.log(data);
  };

  useEffect(() => {
    test('석황사');
    // test2();
  }, []);

  return <div>Home</div>;
};

export default Home;
