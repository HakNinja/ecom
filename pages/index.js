import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Whyus from "../components/Whyus";
import Arrivals from "../components/Arrivals";
import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial";
import TempProduct from "../components/TempProduct";
// import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CodesWear.com - wear the code</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Whyus />
      <Arrivals />
      <TempProduct />
      {/* <BrowserRouter> */}
        <Testimonial />
      {/* </BrowserRouter> */}
      <Subscribe />
      
     </div>
  );
}
