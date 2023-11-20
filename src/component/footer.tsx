import React from 'react'
import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import { faLinkedin, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Icon from './fontAwesome';
import Colors from './Colors';
import AnimateScroll from './animateScroll';
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='lg:fullpage-container h-screen  w-full bg-primary text-secondary p-8 xl:p-36'>
            <div className='lg:text-2xl space-y-8 w-full py-24 lg:py-24'>
                <AnimateScroll doAfter={300} animation='fade-in-slide-up'> <p>MY CONTACT</p></AnimateScroll>
                <AnimateScroll doAfter={600} animation='fade-in-slide-up'>
                    <div className='lg:w-2/3 xl:w-1/2 lg:flex flex-row justify-between mt-16 space-y-8 lg:space-y-0 mb-24'>

                        <ul className='lg:text-lg lg:space-y-12 space-y-4'>
                            <li className='flex flex-row space-x-2 lg:space-x-6 '><RiMailFill size={24} /><span>teguhkiranaberutu@gmail.com</span></li>
                            <li className='flex flex-row space-x-2 lg:space-x-6 '><RiPhoneFill size={24} /><span>+62 88261441557</span></li>
                        </ul>

                        <ul className='lg:text-lg space-y-4 lg:space-y-12 pt-8 lg:pt-0'>
                            <li className='group flex cursor-pointer'> <Link href="/About">ABOUT ME </Link>
                                <div className={`w-[10px] h-[15px] opacity-0  group-hover:opacity-25 bg-secondary transition-opacity duration-300 translate-x-[-5px]`}></div>
                            </li>

                            <li className='group flex cursor-pointer'>   <Link href="/Project">MY PROJECT</Link>
                                <div className={`w-[10px] h-[15px] opacity-0  group-hover:opacity-25 bg-secondary transition-opacity duration-300 translate-x-[-5px]`}></div>
                            </li>

                            <li className='group flex cursor-pointer'><Link href="/Contact">  CONTACT ME</Link>
                                <div className={`w-[10px] h-[15px] opacity-0  group-hover:opacity-25 bg-secondary transition-opacity duration-300 translate-x-[-5px]`}></div>
                            </li>
                        </ul>

                    </div>
                </AnimateScroll>
                <AnimateScroll doAfter={900} animation='fade-in-slide-up'>
                    <div className='translate-y-32 py-12 border-t-2 border-t-secondary w-full'>
                        <div className='w-full flex lg:flex-row-reverse justify-between'>
                            <div className='text-lg'>© Teguh Kirana Berutu 2023</div>
                            <div className='lg:flex flex-row space-x-4  hidden'>

                                <a href='https://www.facebook.com/teguhkiranaberutu/' title='facebook' target='_blank' rel='noopener noreferrer'>
                                    <div className=" cursor-pointer">
                                        <Icon icon={faFacebook} size="lg" color={Colors.secondary} />
                                    </div>
                                </a>
                                <a href='https://www.instagram.com/tg_kirana/' title='instagram' target='_blank' rel='noopener noreferrer'>
                                    <div className=" cursor-pointer">
                                        <Icon icon={faInstagram} size="lg" color={Colors.secondary} />
                                    </div>
                                </a>
                                <a href='https://linkedin.com/in/teguhkiranaberutu/' title='linkedin' target='_blank' rel='noopener noreferrer'>
                                    <div className="cursor-pointer">
                                        <Icon icon={faLinkedin} size="lg" color={Colors.secondary} />
                                    </div>
                                </a>

                                <a href='https://github.com/teguh161402025/' title='igithub' target='_blank' rel='noopener noreferrer'>   <div className=" cursor-pointer">
                                    <Icon icon={faGithub} size="lg" color={Colors.secondary} />
                                </div>
                                </a>




                            </div>
                        </div>
                    </div>
                </AnimateScroll>
            </div>
        </div>
    )
}

export default Footer