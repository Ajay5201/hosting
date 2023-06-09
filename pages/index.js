import Featured from '../components/Featured';
import Head from 'next/head';
import Image from 'next/image';
import PizzaList from '../components/PizzaList';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home({ pizzaList, admin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name='description' content='Best pizza shop in town' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Featured />
      {admin && <span></span>}
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || '';
  let admin = false;

  if (myCookie.token === 'Wdw4CV||663Z{p3|ZXtP%0k6Ejj;F') {
    admin = true;
  }

  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};
