import Header from "../components/header";
import Head from "next/head";
import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";
import { HomeIcon } from "@heroicons/react/solid";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Footer from "../components/footer";
import Script from 'next/script'

const pages = [{ name: "Contact", href: "/Contact", current: true }];

export default function Contact({ global, informations }) {
  
  

  const navigationFacebook = [
    {
      name: "Facebook",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    }
  ]
    const navigationInstagram = [
    {
      name: "Instagram",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <Head>
        <title>{global.siteName}</title>
        <meta name="description" content={global.MetaDescription} />
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <script src="../script/resetform.js"></script>
      </Head>
      <Header />
      <nav className="flex" aria-label="Breadcrumb">
      <ol
        role="list"
        className="bg-[#222725] justify-center w-screen shadow px-6 flex space-x-4"
      >
        <li className="flex">
          <div className="flex items-center">
            <a href="/" className="text-[#DFE1B7] hover:text-gray-500">
              <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="false" />
              <span className="sr-only">Accueil</span>
            </a>
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
              <a
                href={page.href}
                className="ml-4 text-xl font-medium text-[#DFE1B7]"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
      </nav>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-2 lg:px-3">
          <div className="relative bg-white shadow-xl">
            <h2 className="sr-only">Contactez-moi</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden py-10 px-6 bg-[#222725] sm:px-10 xl:p-12">
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-[#DFE1B7]">
                  Vous pouvez me contacter aussi ici :
                </h3>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Numéro de téléphone</span>
                  </dt>
                  <dd className="flex text-xl text-[#DFE1B7]">
                    <PhoneIcon
                      className="flex-shrink-0 w-6 h-6 text-[#DFE1B7]"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{informations.Telephone}</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-xl text-[#DFE1B7]">
                    <MailIcon
                      className="flex-shrink-0 w-6 h-6 text-[#DFE1B7]"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{informations.Email}</span>
                  </dd>
                </dl>
                <ul role="list" className="mt-6 flex space-x-6">
                  {navigationFacebook.map((item) => (
                    <li>
                      <a
                        target="_blank"
                        key={item.name}
                        href={informations.Facebook}
                        className="text-[#DFE1B7] hover:text-indigo-100"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                  {navigationInstagram.map((item) => (
                    <li>
                      <a
                        target="_blank"
                        key={item.name}
                        href={informations.Instagram}
                        className="text-[#DFE1B7] hover:text-indigo-100"
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h1 className="text-3xl font-Orev font-medium text-gray-900">
                  Besoin de me contacter ?
                </h1>
                <form
                  id="form"
                  action="https://formspree.io/f/myyoyrbl"
                  method="POST"
                  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="Prénom"
                      className="block text-lg font-medium text-gray-900"
                    >
                      Prénom*
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="Prénom"
                        id="Prénom"
                        autoComplete="given-name"
                        required
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-[#DFE1B7] focus:border-[#DFE1B7] border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="Nom"
                      className="block text-lg font-medium text-gray-900"
                    >
                      Nom*
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        required
                        name="Nom"
                        id="Nom"
                        autoComplete="family-name"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-[#DFE1B7] focus:border-[#DFE1B7] border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="E-mail"
                      className="block text-lg font-medium text-gray-900"
                    >
                      E-mail*
                    </label>
                    <div className="mt-1">
                      <input
                        id="E-mail"
                        name="E-mail"
                        required
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-[#DFE1B7] focus:border-[#DFE1B7] border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="Téléphone"
                        className="block text-lg font-medium text-gray-900"
                      >
                        Téléphone
                      </label>
                      <span
                        id="phone-optional"
                        className="text-lg text-gray-500"
                      >
                        Optionnel
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="Téléphone"
                        id="Téléphone"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-[#DFE1B7] focus:border-[#DFE1B7] border-gray-300 rounded-md"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="Sujet"
                      className="block text-lg font-medium text-gray-900"
                    >
                      Sujet*
                    </label>
                    <div className="mt-1">
                      <select
                        required
                        name="Sujet"
                        id="Sujet"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-[#DFE1B7] focus:border-[#DFE1B7] border-gray-300 rounded-md"
                      >
                        <option selected disabled>Choisir votre sujet...</option>
                        <option value="Juste Moi">Juste Moi</option>
                        <option value="Pour Deux">Pour Deux</option>
                        <option value="Famille">Famille</option>
                        <option value="Il était une fois">Il était une fois</option>
                        <option value="Mon bébé">Mon bébé</option>
                        <option value="J'immortalise l'évènement">J'immortalise l'évènement</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="Message"
                        className="block text-lg font-medium text-gray-900"
                      >
                        Message*
                      </label>
                      <span id="Message-max" className="text-lg text-gray-500">
                        Max. 500 charactères
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="Message"
                        name="Message"
                        rows={4}
                        required
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-[#DFE1B7] [#] focus:border-[#DFE1B7] border border-gray-300 rounded-md"
                        aria-describedby="Message-max"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="reset"
                      className="mt-2  mr-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-900 border-gray-900 bg-[#DFE1B7] hover:bg-[#DFE1B7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DFE1B7] sm:w-auto"
                    >
                      Effacer les champs
                    </button>
                    <button
                      type='submit'
                      className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-gray-900 border-gray-900 bg-[#DFE1B7] hover:bg-[#DFE1B7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DFE1B7] sm:w-auto"
                    >
                      Envoyer mon message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      {/* Script pour vanilla pour reset le formulaire à l'envoi */}
      <Script>
      {`window.onbeforeunload = () => {
        for (const form of document.getElementsByTagName('form')) {
        form.reset();}}`}
      </Script>
      {/* fin du script  */}
    </div>
  );
}
export async function getStaticProps() {
  const [global, informations] = await Promise.all([
    fetchAPI("/global"),
    fetchAPI("/informations"),
  ]);
  return {
    props: { global, informations },
  };
}
