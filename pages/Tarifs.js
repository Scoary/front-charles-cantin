import Header from "../components/header";
import Head from "next/head";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import Images from "../components/image";
import { HomeIcon } from "@heroicons/react/solid";
import Footer from "../components/footer";
import Link from "next/link";

const pages = [{ name: "Tarifs", href: "/Tarifs", current: true }];

export default function Tarifs({ tarifs, global }) {
  return (
    <div>
      <Head>
        <title>{global.siteName}</title>
        <meta name="description" content={global.MetaDescription} />
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <Header />
      <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="bg-[#222725] justify-center w-screen shadow px-6 flex space-x-4">
        <li className="flex">
          <div className="flex items-center text-[#DFE1B7] hover:text-gray-500">
            <Link href="/">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
      {tarifs.map((tarif) => (
          <div key={tarif.id}>
            <h2 className="text-3xl underline text-[#222725]">
              {tarif.Titre}
            </h2>
            <div className="grid grid-cols-3 gap-6 my-4">
              <Images image={tarif.Image1}/>
              <Images image={tarif.Image2}/>
              <Images image={tarif.Image3}/>
            </div>
            <p className="text-2xl p-2 text-center bg-[#47555E] text-[#DFE1B7]">
              {tarif.Description}
            </p>
            <div className="flex justify-center my-4">
              <p className="px-4 py-2 items-center border border-transparent rounded-2xl text-2xl shadow-sm text-[#DFE1B7] w-40 bg-[#222725] text-center">
                {tarif.Prix}
              </p>
            </div>
          </div>
      ))}
      </div>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  const [tarifs, global] = await Promise.all([
    fetchAPI("/tarifs"),
    fetchAPI("/global"),
  ]);
  return {
    props: { global, tarifs },
  };
}
