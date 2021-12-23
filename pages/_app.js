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

export default function MyApp({pageProps, Component}) {
  return (
    <GlobalContext.Provider>
    <Component {...pageProps} />
    </GlobalContext.Provider>
  )   
  
}

