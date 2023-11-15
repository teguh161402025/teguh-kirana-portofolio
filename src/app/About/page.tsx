import React, { useState } from 'react'
import Image from 'next/image'
import '../globals.css';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import SectionIndicator from '@/component/SectionIndicator';
import AnimateScroll from '@/component/animateScroll';
import Footer from '@/component/footer';
export default function About() {


    return (
        <main className=" flex flex-col h-screen md:fullpage-container overflow-x-hidden">

            <div className='md:flex md:flex-row section-fullpage hidden lg:block xl:flex lg:flex' >
                <div className='bg-primary md:min-h-screen md:w-1/2 '></div>
                <div className='bg-secondary md:min-h-screen md:w-1/2'></div>
            </div>

            <div id="1" className=' w-full section lg:absolute z-20 top-0 '>

                <div className=' md:flex md:flex-row bg-primary md:bg-transparent  '>
                    <div className='bg-primary container mx-auto md:min-h-screen md:w-1/3 relative '>

                        <div className='xl:text-9xl text-4xl font-extrabold lg:mt-32 lg:pt-0 lg:pb-0 pb-2 pt-24  text-secondary translate-x-4 lg:text-right '>
                            <p>ABOUT<br className='hidden lg:block' />ME.</p>
                        </div>
                        <Image className='text-secondary absolute bottom-12 ml-12 right-12 hidden lg:block'
                            src={'/assets/ooorganize-white.svg'}
                            alt={'ornament portofolio'}
                            width={200}
                            height={200}
                        />

                    </div>
                    <div className='bg-secondary flex flex-row md:min-h-screen container mx-auto md:w-2/3  '>


                        <div className='xl:pl-24 pt-8 xl:self-end md:mt-32 p-8 xl:mr-32 xl:mt-56 '>
                            <p className='xl:text-6xl text-2xl font-bold text-ornament lg:text-left text-center'>
                                HEY I AM
                            </p>
                            <p className='xl:text-7xl text-3xl font-bold text-primary lg:text-left text-center'>
                                TEGUH KIRANA.
                            </p>
                            <p className='w-68 text-primary xl:text-xl text-lg mt-6 lg:text-justify text-center lg:w-2/3 ' >

                                I am a fresh graduate, graduated in 2022 with a GPA of 3.53.
                                I was studied at the University of North Sumatra, majoring in Information Technology.


                            </p>
                            < div className='lg:flex  p-2 space-x-6 cursor-pointer text-primary mt-24 hidden lg:block'>
                                <a href='https://www.facebook.com/teguhkiranaberutu/' title='facebook' target='_blank' rel='noopener noreferrer'>
                                    <FaFacebook className='animate-bounce cursor-pointer' size={44} /></a>
                                <a href='https://www.instagram.com/tg_kirana/' title='instagram' target='_blank' rel='noopener noreferrer'>
                                    <FaInstagram className='animate-bounce cursor-pointer' size={44} /></a>
                                <a href='https://linkedin.com/in/teguhkiranaberutu/' title='linkedin' target='_blank' rel='noopener noreferrer'>
                                    <FaLinkedin className='animate-bounce cursor-pointer' size={44} /></a>
                                <a href='https://github.com/teguh161402025/' title='igithub' target='_blank' rel='noopener noreferrer'>
                                    <FaGithub className='animate-bounce cursor-pointer' size={44} /></a>
                            </div>

                            < div className='flex  p-2 space-x-6 cursor-pointer text-primary mt-24 lg:hidden justify-center '>
                                <a href='https://www.facebook.com/teguhkiranaberutu/' title='facebook' target='_blank' rel='noopener noreferrer'>
                                    <FaFacebook className='animate-bounce cursor-pointer' size={32} /></a>
                                <a href='https://www.instagram.com/tg_kirana/' title='instagram' target='_blank' rel='noopener noreferrer'>
                                    <FaInstagram className='animate-bounce cursor-pointer' size={32} /></a>
                                <a href='https://www.instagram.com/tg_kirana/' title='instagram' target='_blank' rel='noopener noreferrer'>
                                    <FaLinkedin className='animate-bounce cursor-pointer' size={32} /></a>
                                <a href='https://www.instagram.com/tg_kirana/' title='instagram' target='_blank' rel='noopener noreferrer'>
                                    <FaGithub className='animate-bounce cursor-pointer' size={32} /></a>
                            </div>
                        </div>

                    </div>




                </div>
                <Image className='absolute right-12 top-32 z-30 hidden lg:block'
                    src="assets/ooorganize.svg"
                    alt="high school"
                    width={220}
                    height={220}
                />

            </div>

            < SectionIndicator offsets={4} />
            <div id="2" className='section relative flex flex-col-reverse lg:flex-row' >
                <div className='min-h-screen w-1/3 bg-primary z-10 hidden lg:block'></div>
                <div className='min-h-screen w-2/3 bg-secondary z-10 hidden lg:block'></div>

                <AnimateScroll doAfter={500} animation='slider-x' className='lg:min-h-screen lg:w-2/3  left-0 lg:absolute lg:top-0 bg-secondary z-20  '>
                    <div className='lg:mx-24 lg:mt-32 m-8'>
                        <ol className='lg:relative border-l border-gray-400  '>
                            <AnimateScroll doAfter={1300} animation='fade-in-slide-up'>
                                <li className='mb-10 ml-4 py-8 space-y-4'>
                                    <div className='lg:absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white border-ornament bg-ornament'></div>
                                    <span className='mb-1 text-md lg:text-lg font-normal leading-none  text-primary'>High School.</span>
                                    <div className='lg:text-xl text-lg font-semibold text-primary'>SMA Negeri 11 Medan</div>
                                    <p className='mb-4 text-sm lg:text-base font-normal text-primary'>
                                        I attended SMA Negeri 11 Medan for my high
                                        school education. I completed my studies
                                        and graduated from the school in 2016.</p>

                                </li>
                            </AnimateScroll>
                            <AnimateScroll doAfter={1500} animation='fade-in-slide-up'>
                                <li className='mb-10 ml-4 lg:py-8 space-y-4'>
                                    <div className='lg:absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white border-ornament bg-ornament'></div>
                                    <span className='mb-1 lg:text-lg text-md font-normal leading-none  text-primary'>University</span>
                                    <div className='text-lg lg:text-xl font-semibold text-primary'>University of North Sumatra</div>
                                    <p className='mb-4 text-sm lg:text-base font-normal text-primary'>
                                        I studied at the University of North Sumatra where
                                        I pursued a degree in Information Technology.
                                        I graduated in the year 2022 with a GPA of 3.53.

                                    </p>
                                    <p className='mb-4 text-base font-normal  text-primary'>
                                        During my studies, I once became a laboratory
                                        assistant for the Administration and Network
                                        Design course, in the year 2019.

                                    </p>

                                </li>
                            </AnimateScroll>
                        </ol>
                    </div>
                </AnimateScroll>
                <AnimateScroll doAfter={1000} animation='slider-x' className='lg:min-h-screen lg:w-1/3  lg:absolute top-0 bg-primary right-0 z-30 '>
                    <AnimateScroll doAfter={1500} animation='fade-in-slide-left'>
                        <div className='text-secondary lg:mt-32 lg:-translate-x-2 p-4 lg:p-0'>
                            <span className='lg:text-5xl text-3xl font-bold'>MY EDUCATION.</span>
                            <p className='p-4 leading-loose text-sm lg:text-md'>
                                Lets take a look at my educational history that has led me to where I am today,
                                where much of the knowledge I have acquired comes from my formal education.
                            </p>
                        </div>
                    </AnimateScroll>
                    <Image className='text-secondary absolute bottom-12 ml-12 hidden lg:block'
                        src={'/assets/ooorganize-white.svg'}
                        alt={'ornament portofolio'}
                        width={200}
                        height={200}
                    />
                </AnimateScroll>
            </div>



            <div id="3" className='bg-primary w-full md:min-h-screen  section '>
                <div className='container mx-auto md:mt-[15vh] md:bg-secondary md:pb-24 lg:w-3/4 xl:space-y-12'>
                    <div className='text-3xl font-bold p-4 md:text-4xl text-secondary md:text-primary md:p-8 lg:text-5xl'>SKILLS.</div>
                    <div className='md:flex flex-row divide-y-2 lg:divide-y-0'>
                        <div className='md:w-1/2 md:px-2 md:border-r-2 border-primary xl:space-y-8 '>
                            <AnimateScroll doAfter={300} animation='fade-in-slide-up'>
                                <div className='flex justify-center text-secondary text-xl font-bold text-primary
                             md:text-primary md:text-3xl lg:text-4xl'>Front-End.</div>
                                <div className='md:text-primary text-secondary md:text-sm text-center py-4 lg:text-xl lg:p-4'>
                                    Here are some things I can use in front-end development.
                                </div>
                            </AnimateScroll>
                            <div className='flex flex-wrap justify-center p-4 text-primary md:text-primary text-sm w-full space-x-2 space-y-2 md:text-primary'>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>HTML</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>CSS</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>JavaScript</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>Tailwind </div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>React Js</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>React Native</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>Next Js</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>Responsive Design</div>

                            </div>
                        </div>
                        <div className='md:w-1/2 md:px-2  xl:space-y-8 lg:pt-0  bg-secondary '>
                            <AnimateScroll doAfter={300} animation='fade-in-slide-up'>
                                <div className='flex justify-center  text-xl font-bold md:text-primary md:text-3xl lg:text-4xl'>Back-End.</div>
                                <div className='md:text-primary md:text-sm text-center py-4 lg:text-xl lg:p-4'>
                                    Here are some things I can use in back-end development.
                                </div>
                            </AnimateScroll>
                            <div className='flex flex-wrap justify-center p-4 md:text-primary  text-sm w-full space-x-2 space-y-2 '>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>Node.js</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>REST API</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>SQL</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>Oracle Database</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>NoSQL</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>Firebase</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>Express</div>
                                <div className=' p-4 bg-[#e8e3e4] rounded-sm'>Laravel</div>


                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div id='4' className='bg-primary w-full min-h-screen section'>
                <div className='container mx-auto '>

                    <Footer />
                </div>
            </div>
        </main >
    )
}