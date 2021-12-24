import React from 'react';
import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import App from 'next/app'
import Head from 'next/head'
import axios from 'axios';
import { createContext } from 'react';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media';


export const GlobalContext = createContext({})

export default function MyApp({global, pageProps, Component}) {
  return (
    <GlobalContext.Provider value={global}>
    <Component {...pageProps} />
    </GlobalContext.Provider>
  )   
  
}

export async function getStaticProps() {
  const [global] = await Promise.all([
    fetchAPI("/global"),
  ]);
  return {
    props: { global },
  };
}

