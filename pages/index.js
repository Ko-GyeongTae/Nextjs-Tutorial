import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';

export default function Home() {
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  function getData() {
    axios.get(API_URL)
    .then(res => {
      console.log(res);
    })
    .catch(e => console.log(e));
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Head>
        <title>HOME | NEON</title>
      </Head>
      create-next-app!!! create-next-app 으로 설치하면

    </div>
  )
}
