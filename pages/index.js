import Header from '../components/header';
import HomeIMG from '../assets/img/HomeIMG.png';
import Footer from '../components/footer';
import Head from 'next/head';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media'
import Link from 'next/link'
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
      <div className='absolute inset-0 flex flex-col justify-center text-center items-center '>
      <h1 className='text-8xl lg:text-9xl'>{accueil.Titre}</h1>
      <div className='whitespace-nowrap inline-flex items-center justify-center mt-8 px-4 py-2 border border-transparent rounded-md shadow-lg text-lg lg:text-2xl font-medium text-[#DFE1B7] bg-[#222725] hover:bg-[#DFE1B7] hover:text-[#222725]'>
      <Link href={"/Galerie"} passHref key={1}>Découvrir ma galerie</Link>
      </div>
      </div>
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