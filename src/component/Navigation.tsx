"use client";

import React, { useState, useEffect } from 'react';
import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import { VscMenu, VscClose } from "react-icons/vsc";
import '../app/globals.css'
import { useRouter, usePathname } from 'next/navigation';



interface LinkItem {
    href: string;
    label: string;
}
interface NavigationProps {
    links: LinkItem[];
}
const Navigation: React.FC<NavigationProps> = ({ links }) => {
    const [section, setSection] = useState<number>();
    const [navmenu, setNavMenu] = useState<boolean>(false);
    const [lastContent, setLastContent] = useState<boolean>(false);
    const pathname = usePathname();
    const router = useRouter();
    const handleClick = async (e: string) => {
        //  window.location.href = e;
        router.push(e);
    }

    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };
        const targetElements = document.getElementsByClassName('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    setSection(parseInt(entry.target.id));

                    if (parseInt(entry.target.id) == targetElements.length) {
                        setLastContent(true)
                    }
                    else {
                        setLastContent(false)
                    }

                }

            });
        }, options);


        for (let i = 0; i < targetElements.length; i++) {


            observer.observe(targetElements[i]);
        }






        return () => {
            observer.disconnect();
        };
    }, [pathname]);



    return (
        <nav className={`${lastContent ? 'hidden' : ''}`} >
            {
                pathname === '/Project' &&
                <div className='hidden lg:flex flex-row justify-between fixed lg:z-50 w-full xl:p-8 p-4 '>
                    <div onClick={() => handleClick('/')} className={`md:text-2xl font-bold cursor-pointer`}>

                        {

                            section != 1 ? (

                                <div className={`flex flex-row transition-op duration-300 ease-in ${section != 1 ? 'text-secondary' : 'text-primary'}`}>
                                    <div className=''>T</div>
                                    <div className='animate-logo-g' >g</div>
                                    <div className='animate-logo-k'>K</div>
                                </div>
                            ) : (
                                <span className={`text-ornament transition-transform duration-300 ease-out flex text-primary`}>
                                    <div className=''>T</div>
                                    <div className='animate-logo-e'>e</div>
                                    <div className='animate-logo-g-r'>g</div>
                                    <div className='animate-logo-uh'>uh</div>
                                    <div>K</div>
                                    <div className='animate-logo-irana'>irana</div>
                                </span>
                            )}

                    </div>



                    <ul className='hidden lg:flex flex-row xl:space-x-8 lg:space-x-6 font-semibold xl:text-lg '>
                        {
                            links.map(a => (

                                <li className='flex flex-row group transition ease-in-out delay-150' key={a.href}>
                                    <div onClick={() => handleClick(a.href)} className={`transition-colors cursor-pointer
                              text-secondary group-hover:border-b-2 group-hover:border-secondary pb-2`}  >
                                        {a.label}
                                    </div>
                                    <div className={`w-[10px] h-[15px] opacity-0  group-hover:opacity-25 ${section == 3 || section == 2 ? 'bg-secondary' : 'bg-primary'} transition-opacity duration-300 translate-x-[-5px]`}></div>
                                </li>
                            )

                            )
                        }
                    </ul>


                </div>
            }

            <div className={`hidden lg:flex flex-row justify-between fixed lg:z-50 w-full xl:p-8 p-4 ${pathname == '/Project' ? 'lg:hidden' : ''}`} >
                <div onClick={() => handleClick('/')} className={`md:text-2xl font-bold cursor-pointer`}>

                    {

                        section != 1 ? (

                            <div className={`flex flex-row transition-op duration-300 ease-in ${section == 3 ? 'text-secondary' : 'text-primary'}`}>
                                <div className=''>T</div>
                                <div className='animate-logo-g' >g</div>
                                <div className='animate-logo-k'>K</div>
                            </div>
                        ) : (
                            <span className={`text-ornament transition-transform duration-300 ease-out flex ${pathname === '/Project' || pathname === '/Contact' ? 'text-primary' : 'text-secondary'
                                }`}>
                                <div className=''>T</div>
                                <div className='animate-logo-e'>e</div>
                                <div className='animate-logo-g-r'>g</div>
                                <div className='animate-logo-uh'>uh</div>
                                <div>K</div>
                                <div className='animate-logo-irana'>irana</div>
                            </span>
                        )}

                </div>



                <ul className='hidden lg:flex flex-row xl:space-x-8 lg:space-x-6 font-semibold xl:text-lg '>
                    {
                        links.map(a => (

                            <li className='flex flex-row group transition ease-in-out delay-150' key={a.href}>
                                <div onClick={() => handleClick(a.href)} className={`transition-colors cursor-pointer
                             ${section === 3 || section == 2 ? 'text-secondary group-hover:border-b-2 group-hover:border-secondary pb-2' : 'text-primary group-hover:border-b-2 group-hover:border-primary pb-2'}`}  >
                                    {a.label}
                                </div>
                                <div className={`w-[10px] h-[15px] opacity-0  group-hover:opacity-25 ${section == 3 || section == 2 ? 'bg-secondary' : 'bg-primary'} transition-opacity duration-300 translate-x-[-5px]`}></div>
                            </li>
                        )

                        )
                    }
                </ul>


            </div>
            <div className='lg:hidden flex flex-row justify-between fixed z-40 w-full p-4 bg-white shadow-sm'>
                <div onClick={() => handleClick('/')} className='text-2xl font-bold cursor-pointer '> {

                    section != 1 ? (

                        <div className='flex flex-row transition-op duration-300 ease-in text-primary'>
                            <div className=''>T</div>
                            <div className='animate-logo-g' >g</div>
                            <div className='animate-logo-k'>K</div>
                        </div>
                    ) : (
                        <span className='text-ornament transition-transform duration-300 ease-out flex text-primary'>
                            <div className=''>T</div>
                            <div className='animate-logo-e'>e</div>
                            <div className='animate-logo-g-r'>g</div>
                            <div className='animate-logo-uh'>uh</div>
                            <div>K</div>
                            <div className='animate-logo-irana'>irana</div>
                        </span>
                    )}

                </div>
                <div onClick={() => setNavMenu(true)}>
                    <VscMenu size={24} />
                </div>

            </div>
            {
                navmenu == true &&
                <div className={`${navmenu == true ? 'slidenav' : 'slidenavclose'} min-h-screen bg-white w-full fixed overscroll-y-none z-50`}>
                    <div onClick={() => handleClick('/')} className='flex flex-row justify-between w-full p-4 cursor-pointer'>
                        <div className='text-2xl font-bold '> {

                            section != 1 ? (

                                <div className='flex flex-row transition-op duration-300 ease-in text-primary'>
                                    <div className=''>T</div>
                                    <div className='animate-logo-g' >g</div>
                                    <div className='animate-logo-k'>K</div>
                                </div>
                            ) : (
                                <span className='text-ornament transition-transform duration-300 ease-out flex text-primary'>
                                    <div className=''>T</div>
                                    <div className='animate-logo-e'>e</div>
                                    <div className='animate-logo-g-r'>g</div>
                                    <div className='animate-logo-uh'>uh</div>
                                    <div>K</div>
                                    <div className='animate-logo-irana'>irana</div>
                                </span>
                            )}

                        </div>
                        <div className='closeIco' onClick={() => setNavMenu(false)}>
                            <VscClose size={32} />
                        </div>
                    </div>

                    <ul className='text-lg p-8 mx-8 space-y-4 '>
                        {
                            links.map(a => (

                                <li className='flex flex-row group transition ease-in-out delay-150 ' key={a.href}>
                                    <div className='text-primary cursor-pointer' onClick={() => { setNavMenu(false); handleClick((a.href)) }}  >
                                        {a.label}
                                    </div>
                                    <div className={`w-[10px] h-[15px] opacity-0  opacity-25 transition-opacity duration-300 translate-x-[-5px]`}></div>
                                </li>
                            )

                            )
                        }
                    </ul>

                    <div className='p-8 mt-24 space-y-4 '>
                        <div className='text-primary opacity-60 font-bold text-xl'>Contact Me.</div>
                        <div className=' space-y-4'>
                            <div className='flex flex-row space-x-2'><RiMailFill size={24} />
                                <div className='text-sm text-primary'>teguhkiranaberutu@gmail.com</div>
                            </div>
                            <div className='flex flex-row space-x-2'><RiPhoneFill size={24} />
                                <div className='text-sm text-primary'>+62 88261441557 </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </nav>
    )
}
export default Navigation;