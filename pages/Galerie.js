import Header from '../components/header'
import Head from 'next/head';
import { getStrapiMedia } from '../lib/media';
import { HomeIcon } from '@heroicons/react/solid'
import { fetchAPI } from "../lib/api";
import Images from '../components/image';
import { useState } from 'react';
import Footer from '../components/footer'
import Link from 'next/link';

const pages = [
    { name: 'Galerie', href: '/Galerie', current: true },
  ]
 

const Galerie = ({galeries, global, categories}) => {

  const [selectedCategorie, setSelectedCategorie] = useState('');
  
  return (
      <>
      <Head>
        <title>{global.siteName}</title>
        <meta name="description" content={global.MetaDescription}/>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <Header/>
      <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="bg-[#222725] justify-center w-screen shadow px-6 flex space-x-4">
        <li className="flex">
          <div className="flex items-center text-[#DFE1B7] hover:text-gray-500">
            <Link href="/" passHref>
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="false" />
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <svg
                className="flex-shrink-0 w-6 h-full text-[#DFE1B7]"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <div className="ml-4 text-xl font-medium text-[#DFE1B7]">
              <Link
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </nav>
    <div className='bg-white shadow-lg container mx-auto p-5 my-5 rounded-xl md:border-2 md:border-[#222725] '>
    <div className="flex justify-center flex-wrap ">
    {categories.map((categorie) => (
      <li className='inline-flex rounded-full items-center py-0.5 p-4 m-2 text- font-medium bg-[#222725] text-[#DFE1B7]' key={categorie.Categorie}>
      <input type="radio" value={categorie.Categorie} id={categorie.Categorie}
      checked={categorie.Categorie === selectedCategorie} onChange={(e) => setSelectedCategorie(e.target.value)} />
      <label className='p-2' htmlFor={categorie.Categorie}>{categorie.Categorie}</label>
  </li>
  ))}
    </div>
    </div>
    <div className="cancel">
    {selectedCategorie && <h5 className='button-cancel' onClick={() => setSelectedCategorie("")}>Annuler recherche</h5>}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
        
        {galeries
        .filter((galerie) => galerie.categorie_galerie.Categorie.includes(selectedCategorie))
        .map((galerie) => (
            <>
            <Images image={galerie.image[0]} key={galerie.id}/>
            </>
        ))}
          </div>
          <Footer/>
    </>
  );
};

export async function getStaticProps() {

  const [global, galeries, categories] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/galeries"),
    fetchAPI("/categorie-galeries"),

  ]);
  return{
    props: {global, galeries, categories},
  };
}


export default Galerie;

 