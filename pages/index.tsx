import type { NextPage } from 'next'
import Head from 'next/head'
import LoungeDetails from '../components/LoungeDetails';

import Hero from '../components/Hero';
import KitchenDetails from '../components/KitchenDetails';
import Main from '../components/Main';

 export const images = {
   kitchen: [
     {
       src: "/images/kitchen-1.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/kitchen-2.png",
       width: 2774,
       height: 1560,
     },
     {
       src: "/images/kitchen-3.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/kitchen-4.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/kitchen-5.jpg",
       width: 2400,
       height: 3600,
     },
   ],
   lounge: [

     {
       src: "/images/lounge-1.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-2.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-3.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/lounge-4.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-5.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-6.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/lounge-7.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/lounge-8.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/lounge-9.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-10.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-11.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-12.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-13.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-14.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-15.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/lounge-16.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/lounge-17.jpg",
       width: 2400,
       height: 3600,
     },
   ],
   exterior: [
     {
       src: "/images/exterior-1.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-2.jpg",
       width: 3022,
       height: 2015,
     },
     {
       src: "/images/exterior-3.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-4.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-5.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-6.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-7.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-8.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-9.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-10.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-11.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-12.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-13.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/exterior-front.jpg",
       width: 3600,
       height: 2400,
     },
   ],
   bedrooms: [
     {
       src: "/images/dbl-bedroom.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/dbl-bedroom-2.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/dbl-bedroom-3.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/dbl-bedroom-4.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/main-bedroom-1.jpg",
       width: 2400,
       height: 3600,
     },
     {
       src: "/images/main-bedroom-2.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/main-bedroom-3.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/main-bedroom-4.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/main-bedroom-5.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/main-bedroom-6.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/main-bedroom-7.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/main-bedroom-8.jpg",
       width: 3600,
       height: 2400,
     },
     {
       src: "/images/main-bedroom-9.jpg",
       width: 3600,
       height: 2469,
     },
     {
       src: "/images/main-bedroom-10.jpg",
       width: 2400,
       height: 3600,
     },
   ],
   bathroom: [
     {
       src: "/images/bathroom-1.jpg",
       width: 3400,
       height: 3600,
     },
     {
       src: "/images/bathroom-2.jpg",
       width: 3400,
       height: 3600,
     },
     {
       src: "/images/bathroom-3.jpg",
       width: 3400,
       height: 3600,
     },
     {
       src: "/images/bathroom-4.jpg",
       width: 3400,
       height: 3600,
     },
     {
       src: "/images/bathroom-5.jpg",
       width: 3400,
       height: 3600,
     },
     {
       src: "/images/bathroom-6.jpg",
       width: 3400,
       height: 3600,
     },
     {
       src: "/images/bathroom-7.jpg",
       width: 3400,
       height: 3600,
     },
   ],
 };

const Home: NextPage = () => {



  return (
    <>
      <Head>
        <title>Amon's Place</title>
      </Head>
      <Hero />
      <Main />
      <LoungeDetails />
      <KitchenDetails />
    </>
  );
}

export default Home
