import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import { IProduct } from '../components/Product';
import Head from 'next/head';
import Stock from '../components/Stock';

import '../styles/styles.scss';

interface IIndexProps {
  products: IProduct[]
}

export default function App(props: IIndexProps) {
    return (
      <div className="app">
        <Head>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
          <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="NTMzMzY1NzYtZmNlNS00ZWM1LWE2NGYtNWZmZDgyMTQ2MTZmNjM3NjI5NDExOTk5NTgwNzc2" id="snipcart" />
          <meta name="description" content="Pancake Palace order-placement." />
          <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
          <link rel="shortcut icon" href="/icon/favicon.ico" />
          <title>Pancake Palace</title>
        </Head>
        <Header />
        <main className="main">
          <img src="../pancake.svg" alt="" className="background-image" /> 
          <div className="opening-banner">
            <h3>INDULGE IN</h3>
            <h2>PANCAKES</h2>
            <p>We specialize in a <strong>rotating stock</strong> of unique pancakes delivered right to you!</p>
          </div>
          <ProductList products={props.products} />
          <Stock />
        </main>
        <Footer />
      </div>
    )
}

App.getInitialProps = async () => {
  return {
    products: [
      {
        id: "nextjs_berriesdelight",
        name: "Berries Delight",
        price: 10.00,
        image: "../berriesdelight.jpg",
        description: "These pancakes are made especially light and airy to compliment our fresh, never frozen berries. A dusting of powdered sugar completes these pancakes the way that only sugar can."
      } as IProduct,
      {
        id: "nextjs_banana",
        name: "Cinnamon Banana Nut",
        price: 9.00,
        image: "../banana.jpg",
        description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor."
      } as IProduct,
      {
        id: "nextjs_lavender",
        name: "Vanilla Lavender Cranberry",
        price: 12.00,
        image: "../lavender.jpg",
        description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb."
      } as IProduct,
      {
        id: "nextjs_caramelapple",
        name: "Caramel Apple Crumble",
        price: 10.00,
        image: "../caramelapple.jpg",
        description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards."
      } as IProduct
    ]
  };
}