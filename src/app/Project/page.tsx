"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import '../globals.css'
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { TfiArrowRight } from "react-icons/tfi";
import { SiTailwindcss, SiNextdotjs, SiCss3, SiReact, SiJavascript, SiHtml5, SiFirebase, SiRedux, SiExpo } from "react-icons/si";
import SectionIndicator from '@/component/SectionIndicator';
import AnimateScroll from '@/component/animateScroll';
import Footer from '@/component/footer';
export default function Project() {



    return (
        <main className=" flex flex-col h-screen md:fullpage-container overflow-x-hidden">

            <div className='md:flex md:flex-row section-fullpage hidden lg:block xl:flex lg:flex' >
                <div className='bg-primary md:min-h-screen md:w-1/2 '></div>
                <div className='bg-secondary md:min-h-screen md:w-1/2'></div>
            </div>

            <div id="1" className=' w-full section lg:absolute z-20 top-0 '>

                <div className=' md:flex md:flex-row-reverse bg-primary md:bg-transparent  '>
                    <div className='bg-primary container mx-auto md:min-h-screen md:w-1/3 relative '>
                        <AnimateScroll doAfter={100} animation='slider-left'>
                            <div className='xl:text-8xl text-4xl font-extrabold lg:mt-32 lg:pt-0 lg:pb-0 pb-2 pt-24
                          text-secondary lg:-translate-x-4 lg:text-left '>
                                <p>MY<br className='hidden lg:block' />PROJECT.</p>
                            </div>
                        </AnimateScroll>
                        <Image className='text-secondary absolute bottom-12 ml-12 right-12 hidden lg:block'
                            src={'/assets/ooorganize-white.svg'}
                            alt={'ornament portofolio'}
                            width={200}
                            height={200}
                        />

                    </div>
                    <div className='bg-secondary flex flex-row md:min-h-screen container mx-auto md:w-2/3  '>


                        <div className='xl:pl-24 pt-8 xl:self-end md:mt-32 p-8 xl:mr-32 xl:mt-44 '>
                            <AnimateScroll doAfter={300} animation='fade-in-slide-up' className='opacity-0'>
                                <p className='xl:text-6xl text-2xl font-bold text-ornament lg:text-left text-center'>
                                    HEY I AM
                                </p>
                                <p className='xl:text-7xl text-3xl font-bold text-primary lg:text-left text-center'>
                                    TEGUH KIRANA.
                                </p>
                                <p className='w-68 text-primary xl:text-xl text-lg mt-6 lg:text-justify text-center lg:w-2/3 ' >

                                    I have successfully completed several projects in the past, each serving as a testament to my skills and capabilities.
                                    These projects not only showcase my abilities but also exemplify my dedication to delivering good results.


                                </p>
                            </AnimateScroll>
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
                <Image className='absolute left-12 top-24 z-30 hidden lg:block'
                    src="assets/ooorganize.svg"
                    alt="high school"
                    width={150}
                    height={150}
                />

            </div>
            < SectionIndicator offsets={5} project={true} />

            <div id="2" className='section lg:relative lg:flex lg:flex-row ' >
                <div className='min-h-screen w-2/3 bg-secondary z-10 hidden lg:block'></div>
                <div className='min-h-screen w-1/3 bg-primary z-10 hidden lg:block'></div>

                <AnimateScroll doAfter={1000} animation='fade-in' className='lg:min-h-screen h-44 lg:w-1/2 lg:left-0 lg:absolute relative lg:top-0 bg-secondary z-20 lg:overflow-hidden'>

                    <Image className='object-none lg:object-cover  lg:object-right '
                        src={'/assets/template_project01.webp'}
                        fill
                        alt='recipe-nook project' />

                    <div className='absolute z-20 lg:bottom-12 p-2 lg:p-0 bottom-0 glass text-secondary lg:p-6 '>
                        <div className='lg:space-y-6 '>

                            <p className='hidden lg:block'>WHAT I USE</p>
                            <div className=' lg:grid lg:grid-cols-3 flex   gap-2 gap-y-4'>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-x-[1px] border-x-slate-200'> <p className='hidden lg:block'  >Next Js</p> <SiNextdotjs size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >React Js</p>  <SiReact size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >HTML </p> <SiHtml5 size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-x-[1px] border-x-slate-200'> <p className='hidden lg:block' >Javascript </p> <SiJavascript size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >CSS</p> <SiCss3 size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >Tailwind</p> <SiTailwindcss size={22} /> </div>
                            </div>
                            <a className='group p-2 mt-44 hidden lg:block' href='https://github.com/teguh161402025/RecipeNook' target='_blank' rel='noopener noreferrer'>
                                <div className='flex space-x-2 group-hover:text-primary transition-colors  delay-200 ease-in-out'>
                                    <p>
                                        SEE ON GITHUB.
                                    </p>
                                    <FaGithub size={22} />

                                </div>
                            </a>
                        </div>
                    </div>

                </AnimateScroll>
                <AnimateScroll doAfter={400} animation='slider-x' className='lg:min-h-screen  lg:w-1/2 lg:absolute  top-0 bg-primary right-0 z-30 '>
                    <div className='text-secondary grid lg:my-36 p-4 lg:p-0 '>
                        <AnimateScroll doAfter={1600} animation='fade-in-slide-up'>
                            <p className='xl:text-6xl text-xl font-bold '>RecipeNook</p>
                            <div className='xl:text-md text-sm leading-loose  text-justify mt-4 lg:m-12'>Recipe Nook is a food recipe search website where you can effortlessly discover recipes based on the ingredients available in your kitchen.
                                Simply input the items you have at home, and uncover a diverse array of culinary delights.
                                Not only does Recipe Nook consider the ingredients on hand, but it also allows you to explore recipes tailored to your dietary preferences. The platform is equipped with comprehensive filters to help you find recipes that align with your desires
                                This platform utilizes the Edamame API to offer a diverse recipe database.
                            </div>
                        </AnimateScroll>
                        <a className='cursor-pointer slide-animation-black w-44 mt-4 lg:ml-12 group' href='https://recipe-nook.vercel.app' target='_blank' rel='noopener noreferrer'>
                            <div className='flex justify-between p-2 lg:p-4 border-2 border-secondary group-hover:text-primary transition-colors delay-400 ease-in-out'>
                                <span className='xl:text-xl'>Visit.</span>
                                <TfiArrowRight size={24} />
                            </div>
                        </a>
                        <span className='lg:hidden mt-2 '>or</span>
                        <a className='group lg:hidden mt-4' href='https://github.com/teguh161402025/RecipeNook' target='_blank' rel='noopener noreferrer'>
                            <div className='flex space-x-2 group-hover:text-primary transition-colors  delay-200 ease-in-out'>
                                <p>
                                    SEE ON GITHUB.
                                </p>
                                <FaGithub size={22} />

                            </div>
                        </a>
                    </div>
                </AnimateScroll>
            </div>


            <div id='3' className='section lg:relative flex lg:flex-row flex-col-reverse ' >
                <div className='min-h-screen w-1/2 bg-secondary z-10 hidden lg:block'></div>
                <div className='min-h-screen w-1/2 bg-primary z-10 hidden lg:block'></div>

                <AnimateScroll animation='slider-x' doAfter={500} className='lg:min-h-screen  lg:w-1/2 lg:absolute  top-0 bg-primary left-0 z-30'>
                    <div className='text-secondary grid lg:my-36 p-4 lg:p-0 '>
                        <AnimateScroll doAfter={1500} animation='fade-in-slide-up' >
                            <p className='xl:text-6xl text-xl font-bold '>Tripadvisor</p>
                            <div className='xl:text-md text-sm leading-loose  text-justify mt-4 lg:m-12'>Tripadvisor is a template designed for online travel reservations.In this template, I have incorporated a simple yet informative design to ensure a user-friendly experience.Additionally, I have integrated features that provide valuable information,
                                making it a comprehensive platform for users.
                            </div>
                        </AnimateScroll>
                        <a className='cursor-pointer slide-animation-black w-44 mt-4 lg:ml-12 group' href='https://tripadvisor-delta.vercel.app' target='_blank' rel='noopener noreferrer'>
                            <div className='flex justify-between p-2 lg:p-4 border-2 border-secondary group-hover:text-primary transition-colors delay-400 ease-in-out'>
                                <span className='xl:text-xl'>Visit.</span>
                                <TfiArrowRight size={24} />
                            </div>
                        </a>
                        <span className='lg:hidden mt-2 '>or</span>
                        <a className='group lg:hidden mt-4' href='https://github.com/teguh161402025/tripadvisor-' target='_blank' rel='noopener noreferrer'>
                            <div className='flex space-x-2 group-hover:text-primary transition-colors  delay-200 ease-in-out'>
                                <p>
                                    SEE ON GITHUB.
                                </p>
                                <FaGithub size={22} />

                            </div>
                        </a>
                    </div>
                </AnimateScroll >
                <AnimateScroll animation='fade-in' doAfter={1200} className='lg:min-h-screen h-44 lg:w-1/2 lg:right-0 lg:absolute relative lg:top-0 bg-secondary z-20 lg:overflow-hidden  slider-x'>
                    <Image className='object-none lg:object-cover  lg:object-right '
                        src={'/assets/template_project02.webp'}
                        fill
                        alt='tripadvisor travel booking tours project' />

                    <div className='absolute z-20 lg:bottom-12 p-2 lg:p-0 bottom-0 glass text-secondary lg:p-6 '>
                        <div className='lg:space-y-6 '>

                            <p className='hidden lg:block'>WHAT I USE</p>
                            <div className=' lg:grid lg:grid-cols-3 flex   gap-2 gap-y-4'>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-x-[1px] border-x-slate-200'> <p className='hidden lg:block'  >Next Js</p> <SiNextdotjs size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >React Js</p>  <SiReact size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >HTML </p> <SiHtml5 size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-x-[1px] border-x-slate-200'> <p className='hidden lg:block' >Javascript </p> <SiJavascript size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >CSS</p> <SiCss3 size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >Tailwind</p> <SiTailwindcss size={22} /> </div>
                            </div>
                            <a className='group p-2 mt-44 hidden lg:block' href='https://github.com/teguh161402025/tripadvisor-' target='_blank' rel='noopener noreferrer'>
                                <div className='flex space-x-2 group-hover:text-primary transition-colors  delay-200 ease-in-out'>
                                    <p>
                                        SEE ON GITHUB.
                                    </p>
                                    <FaGithub size={22} />

                                </div>
                            </a>
                        </div>
                    </div>
                </AnimateScroll>

            </div>

            <div id="4" className='section lg:relative lg:flex lg:flex-row ' >
                <div className='min-h-screen w-1/2 bg-primary z-10 hidden lg:block'></div>
                <div className='min-h-screen w-1/2 bg-secondary z-10 hidden lg:block'></div>


                <AnimateScroll doAfter={1200} animation='fade-in' className='lg:min-h-screen h-44 lg:w-1/2 lg:left-0 lg:absolute relative lg:top-0 bg-secondary z-20 lg:overflow-hidden slider-x'>
                    <Image className='object-none lg:object-cover  lg:object-right '
                        src={'/assets/template_project03.webp'}
                        fill
                        alt='react scroll animation project' />

                    <div className='absolute z-20 lg:bottom-12 p-2 lg:p-0 bottom-0 glass text-secondary lg:p-6 '>
                        <div className='lg:space-y-6 '>

                            <p className='hidden lg:block'>WHAT I USE</p>
                            <div className=' lg:grid lg:grid-cols-3 flex   gap-2 gap-y-4'>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-x-[1px] border-x-slate-200'> <p className='hidden lg:block'  >Next Js</p> <SiNextdotjs size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >React Js</p>  <SiReact size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >HTML </p> <SiHtml5 size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-x-[1px] border-x-slate-200'> <p className='hidden lg:block' >Javascript </p> <SiJavascript size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >CSS</p> <SiCss3 size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >Tailwind</p> <SiTailwindcss size={22} /> </div>
                            </div>
                            <a className='group p-2 mt-44 hidden lg:block' href='https://github.com/teguh161402025/RecipeNook' target='_blank' rel='noopener noreferrer'>
                                <div className='flex space-x-2 group-hover:text-primary transition-colors  delay-200 ease-in-out'>
                                    <p>
                                        SEE ON GITHUB.
                                    </p>
                                    <FaGithub size={22} />

                                </div>
                            </a>
                        </div>
                    </div>
                </AnimateScroll>
                <AnimateScroll doAfter={500} animation='slider-left' className='lg:min-h-screen  lg:w-1/2 lg:absolute  top-0 bg-primary right-0 z-30 slider-x'>
                    <div className='text-secondary grid lg:my-36 p-4 lg:p-0 '>
                        <AnimateScroll doAfter={1500} animation='fade-in-slide-up' >
                            <p className='xl:text-6xl text-xl font-bold '>React Animation Scroll</p>
                            <div className='xl:text-md text-sm leading-loose  text-justify mt-4 lg:m-12'>react-animation-scroll is an
                                npm package designed to implement animations when scrolling.
                                It utilizes the Observer API to achieve this effect. The demo showcases
                                various animations that can be applied. Over time, I intend to further develop and expand this npm
                                package.
                            </div>
                        </AnimateScroll>
                        <a className='cursor-pointer slide-animation-black w-44 mt-4 lg:ml-12 group' href='https://react-animation-scroll.vercel.app/' target='_blank' rel='noopener noreferrer'>
                            <div className='flex justify-between p-2 lg:p-4 border-2 border-secondary group-hover:text-primary transition-colors delay-400 ease-in-out'>
                                <span className='xl:text-xl'>Visit.</span>
                                <TfiArrowRight size={24} />
                            </div>
                        </a>
                        <span className='lg:hidden mt-2 '>or</span>
                        <a className='group lg:hidden mt-4' href='https://github.com/teguh161402025/react-animation-scroll' target='_blank' rel='noopener noreferrer'>
                            <div className='flex space-x-2 group-hover:text-primary transition-colors  delay-200 ease-in-out'>
                                <p>
                                    SEE ON GITHUB.
                                </p>
                                <FaGithub size={22} />

                            </div>
                        </a>
                    </div>
                </AnimateScroll>
            </div>
            <div id="5" className='section lg:relative flex lg:flex-row flex-col-reverse ' >
                <div className='min-h-screen w-1/2 bg-secondary z-10 hidden lg:block'></div>
                <div className='min-h-screen w-1/2 bg-primary z-10 hidden lg:block'></div>

                <AnimateScroll animation='slider-x' doAfter={500} className='lg:min-h-screen  lg:w-1/2 lg:absolute  top-0 bg-primary left-0 z-30'>
                    <div className='text-secondary grid lg:my-36 p-4 lg:p-0 '>
                        <AnimateScroll doAfter={1500} animation='fade-in-slide-up' >
                            <p className='xl:text-6xl text-xl font-bold '>Order Food App</p>
                            <div className='xl:text-md text-sm leading-loose  text-justify mt-4 lg:m-12'>One of the Android-based projects
                                I have undertaken is the development of an online food ordering application. This application was meticulously
                                crafted using Expo, built on the foundation of React Native. For the database infrastructure, I opted for Firebase,
                                a real-time NoSQL database. By harnessing the reliability of Expo,
                                combined with the Real time data storage of Firebase,
                                the application delivers a seamless and responsive user experience throughout the online food ordering process.
                            </div>
                        </AnimateScroll>
                        <a className='cursor-pointer slide-animation-black w-44 mt-4 lg:ml-12 group' href='https://github.com/teguh161402025/Aplikasi-Pemesanan-Makanan-dengan-React-Native-Expo' target='_blank' rel='noopener noreferrer'>
                            <div className='flex justify-between p-2 lg:p-4 border-2 border-secondary group-hover:text-primary transition-colors delay-400 ease-in-out'>
                                <span className='xl:text-xl'>Visit.</span>
                                <TfiArrowRight size={24} />
                            </div>
                        </a>


                    </div>
                </AnimateScroll >
                <AnimateScroll animation='fade-in' doAfter={1200} className='lg:min-h-screen h-44 lg:w-1/2 lg:right-0 lg:absolute relative lg:top-0 bg-secondary z-20 lg:overflow-hidden  slider-x'>
                    <Image className='object-none lg:object-cover  lg:object-right '
                        src={'/assets/template_projects_03.webp'}
                        fill
                        alt='react native order food project' />

                    <div className='absolute z-20 lg:top-24 p-2 lg:p-0 lg:right-0 glass text-secondary lg:p-6 '>
                        <div className='lg:space-y-6 '>

                            <p className='hidden lg:block'>WHAT I USE</p>
                            <div className=' lg:grid lg:grid-cols-3 flex   gap-2 gap-y-4'>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-x-[1px] border-x-slate-200'> <p className='hidden lg:block'  >Expo</p> <SiExpo size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >React Native</p>  <SiReact size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >Fire Base </p> <SiFirebase size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-x-[1px] border-x-slate-200'> <p className='hidden lg:block' >Javascript </p> <SiJavascript size={22} /> </div>
                                <div className='lg:p-2  flex justify-center space-x-2 lg:border-r-[1px] border-r-slate-200'> <p className='hidden lg:block' >Redux</p> <SiRedux size={22} /> </div>
                            </div>

                        </div>
                    </div>
                </AnimateScroll>
            </div>
            <div id='6' className='bg-primary w-full min-h-screen section'>
                <div className='container mx-auto '>

                    <Footer />
                </div>
            </div>
        </main>
    )
}
