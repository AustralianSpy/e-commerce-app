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
        description: "This plate is a happy medium between light, natural flavors and sweetness. Slices of bananas are layered with honey, chopped walnuts, and sprinkled with cinnamon. Delicious!"
      } as IProduct,
      {
        id: "nextjs_lavender",
        name: "Vanilla Lavender Cranberry",
        price: 12.00,
        image: "../lavender.jpg",
        description: "Ever wondered if pancakes could be elegant? Look no further. These pancakes are drizzled with a special vanilla bean and lavendar sauce, giving it that beautiful pink touch and a lightly floral taste. A handful of cranberries give it just a little bit of fruitiness."
      } as IProduct,
      {
        id: "nextjs_caramelapple",
        name: "Caramel Apple Crumble",
        price: 10.00,
        image: "../caramelapple.jpg",
        description: "You'll never get enough of this taste of fall. These pancakes have cinnamon baked into them, topped with a creamy caramel sauce, caramelized baked apples, and a sprinkling of chopped walnuts for some crunch."
      } as IProduct
    ]
  };
}