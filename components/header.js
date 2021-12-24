import React from 'react';
import axios from 'axios';
import {CameraIcon, CashIcon, HomeIcon, MailOpenIcon, PhoneIcon} from "@heroicons/react/solid";
import Logo from "../assets/img/Logo.jpg";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon,XIcon } from "@heroicons/react/outline";
import Link from 'next/link';

const solutions = [
    {
    name: "Accueil",
    href: "/",
    icon: HomeIcon,
    },
    {
    name: "Galerie",
    href: "/Galerie",
    icon: CameraIcon,
    },
    {
    name: "Tarifs",
    href: "/Tarifs",
    icon: CashIcon,
    },
    {
    name: "Contact",
    href: "/Contact",
    icon: MailOpenIcon,
    },
];

export default class Header extends React.Component {
  state = {
    informations: [],
    information: []
  }

    componentDidMount() {
        axios.get(`https://charles-cantin-administration.herokuapp.com/informations`)
        .then(res => {
            const informations = res.data
            this.setState({ informations });
        })
    }

    render() {
        return (
        <header>
        <div className="bg-[#222725] justify-center hidden md:flex">
            <PhoneIcon className="h-5 w-5 text-[#DFE1B7] mr-1" />
            <span className="text-[#DFE1B7]">
            Contactez moi au : {this.state.informations.Telephone}
            </span>
        </div>
        <Popover className="relative z-50 bg-[#47555E]">
            <div className="flex justify-between items-center px-4 py-4 lg:py-0 sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                <img className="w-32 lg:w-52" src={Logo.src} alt="Logo" />
                </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#47555E]">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                {({ open }) => (
                    <>
                    <div className="text-xl lg:text-2xl font-medium text-[#DFE1B7] hover:text-[#222725] hover:border-b-2 hover:border-[#DFE1B7]">
                        <Link href="/">Accueil</Link>
                    </div>
                    </>
                )}
                </Popover>

                <div className="text-xl lg:text-2xl font-medium text-[#DFE1B7] hover:text-[#222725] hover:border-b-2 hover:border-[#DFE1B7]">
                    <Link href="/Galerie">Galerie</Link>
                </div>
                <div className="text-xl lg:text-2xl font-medium text-[#DFE1B7] hover:text-[#222725] hover:border-b-2 hover:border-[#DFE1B7]">
                    <Link href="/Tarifs">Tarifs</Link>
                </div>
                <div className="text-xl lg:text-2xl font-medium text-[#DFE1B7] hover:text-[#222725] hover:border-b-2 hover:border-[#DFE1B7]">
                    <Link href="/Contact">Contact</Link>
                    </div>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 z-50">
            <a rel="noreferrer" href={this.state.informations.Facebook} target="_blank" className="hover:drop-shadow-2xl px-4 py-2 flex items-center text-base rounded-full text-[#DFE1B7]  bg-[#222725] ">
            Facebook
            </a>
            <a rel="noreferrer" href={this.state.informations.Instagram} target="_blank" className="hover:drop-shadow-2xl ml-4 px-4 py-2 flex items-center text-base rounded-full text-[#DFE1B7]  bg-[#222725] ">
            Instagram
            </a>
            </div>
            </div>

            <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <Popover.Panel
                focus
                className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                    <div>
                        <span className=" text-2xl">Charles Cantin - Photographe</span>
                    </div>
                    <div className="-mr-2">
                        <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#222725]">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    </div>
                    <div className="mt-6">
                    <div className="p-4 justify-center flex">
                        <PhoneIcon className="h-5 w-5 text-[#222725] mr-1" />
                        <span className="text-[#222725] ">
                            Contactez moi au : {this.state.informations.Telephone}
                        </span>
                    </div>
                    <div className="flex justify-center pb-6">
                        <a
                        rel="noreferrer"
                        target="_blank"
                        href={this.state.informations.Facebook}
                        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm lg:text-base font-medium text-[#DFE1B7] bg-[#222725]"
                        >
                        Facebook
                        </a>
                        <a
                        rel="noreferrer"
                        target="_blank"
                        href={this.state.informations.Instagram}
                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm lg:text-base font-medium text-[#DFE1B7] bg-[#222725]"
                        >
                        Instagram
                        </a>
                    </div>
                    <nav className="grid grid-cols-1 gap-7">
                        {solutions.map((solution) => (
                        <>
                        <div className="-m-3 p-3 flex items-center rounded-lg text-[#222725] hover:bg-gray-50">
                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-[#222725] text-white">
                            <solution.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                            </div>
                        <Link href={solution.href}>
                        <div className="ml-4 text-base font-medium text-gray-900">
                            {solution.name}
                        </div>    
                        </Link>
                        </div>
                        </>
                        ))}
                    </nav>
                    </div>
                </div>
                </div>
            </Popover.Panel>
            </Transition>
        </Popover>
        </header>
        )
    }
}