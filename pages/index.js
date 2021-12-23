import Header from '../components/header';
import HomeIMG from '../assets/img/HomeIMG.png';
import Footer from '../components/footer';
import Head from 'next/head';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media'

export default function Accueil({global, accueil}) {
  return (
    <div>
      <Head>
        <title>{global.siteName}</title>
        <meta name="description" content={global.MetaDescription}/>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <Header />
      <div className="relative z-0">
      <img className='h-[calc(100vh-221px)] object-cover w-screen' src={accueil.Image.url} alt="" />
      <h1 className='absolute inset-0 flex justify-center text-center items-center text-8xl lg:text-9xl'>{accueil.Titre}</h1>
    </div>
      <Footer/>
    </div>
  )
}
export async function getStaticProps() {

  const [accueil, global] = await Promise.all([
    fetchAPI("/accueil"),
    fetchAPI("/global"),

  ]);
  return{
    props: {accueil, global},
  };
}