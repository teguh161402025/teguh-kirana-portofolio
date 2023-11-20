import Image from 'next/image'
import { faLinkedin, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { TfiArrowRight } from "react-icons/tfi";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Icon from '../component/fontAwesome';
import Colors from '../component/Colors';
import Contactme from '@/component/Contactme';
import './globals.css';
import SectionIndicator from '@/component/SectionIndicator';
import AnimateScroll from '@/component/animateScroll';
import Footer from '@/component/footer';
import Link from 'next/link';
export default function Home() {



  return (
    <main className="flex flex-col lg:fullpage-container h-screen">

      <div className=' flex flex-row hidden lg:block' >
        <div className='hidden md:block bg-primary min-h-screen w-1/2 '></div>

      </div>

      <div id='1' className='lg:absolute w-full section'>
        <div className='lg:container lg:mx-auto  lg:flex lg:flex-row '>
          <div className='bg-primary lg:min-h-screen lg:w-2/3 w-full relative'>


            <div className='md:pl-24 md:pt-32 self-end lg:pt-24 xl:pt-12 pt-24 px-12 lg:mt-44 relative'>
              <AnimateScroll doAfter={300} animation='fade-in-slide-up' className='opacity-0'>
                <p className='xl:text-6xl text-4xl font-bold text-ornament text-center lg:text-left '>
                  HEY I AM
                </p>
                <p className='xl:text-7xl text-4xl font-bold text-secondary text-center lg:text-left'>
                  TEGUH KIRANA.
                </p>

                <p className='w-68 text-secondary xl:text-2xl text-md mt-6 p-4 leading-loose lg:w-2/3 text-center lg:text-justify' >
                  I am a fullstack developer with a keen interest in web and Android development.
                </p>
              </AnimateScroll>
              <div className='hidden space-x-8 p-4 mt-4 xl:flex flex-row   mt-44' >
                <a href='https://www.facebook.com/teguhkiranaberutu/' title='facebook' target='_blank' rel='noopener noreferrer'>
                  <div className="animate-bounce  cursor-pointer">
                    <Icon icon={faFacebook} size="3x" color={Colors.secondary} />
                  </div>
                </a>
                <a href='https://www.instagram.com/tg_kirana/' title='instagram' target='_blank' rel='noopener noreferrer'>
                  <div className="animate-bounce  cursor-pointer">
                    <Icon icon={faInstagram} size="3x" color={Colors.secondary} />
                  </div>
                </a>
                <a href='https://linkedin.com/in/teguhkiranaberutu/' title='linkedin' target='_blank' rel='noopener noreferrer'>
                  <div className="animate-bounce cursor-pointer">
                    <Icon icon={faLinkedin} size="3x" color={Colors.secondary} />
                  </div>
                </a>

                <a href='https://github.com/teguh161402025/' title='igithub' target='_blank' rel='noopener noreferrer'>   <div className="animate-bounce  cursor-pointer">
                  <Icon icon={faGithub} size="3x" color={Colors.secondary} />
                </div>
                </a>


              </div>
              <div className='xl:hidden space-x-8 p-4 mt-4 flex flex-row justify-center' >

                <a href='https://www.facebook.com/teguhkiranaberutu/' title='facebook' target='_blank' rel='noopener noreferrer'>
                  <div className="animate-bounce  cursor-pointer">
                    <Icon icon={faFacebook} size="xl" color={Colors.secondary} />
                  </div>
                </a>
                <a href='https://www.instagram.com/tg_kirana/' title='instagram' target='_blank' rel='noopener noreferrer'>
                  <div className="animate-bounce  cursor-pointer">
                    <Icon icon={faInstagram} size="xl" color={Colors.secondary} />
                  </div>
                </a>
                <a href='https://linkedin.com/in/teguhkiranaberutu/' title='linkedin' target='_blank' rel='noopener noreferrer'>
                  <div className="animate-bounce cursor-pointer">
                    <Icon icon={faLinkedin} size="xl" color={Colors.secondary} />
                  </div>
                </a>

                <a href='https://github.com/teguh161402025/' title='igithub' target='_blank' rel='noopener noreferrer'>   <div className="animate-bounce  cursor-pointer">
                  <Icon icon={faGithub} size="xl" color={Colors.secondary} />
                </div>
                </a>


              </div>
              <Image className='text-secondary absolute bottom-32 right-24 hidden lg:block'
                src={'/assets/ooorganize-white.svg'}
                alt={'ornament portofolio'}
                width={200}
                height={200}

              />
            </div>


          </div>
          <div className='bg-secondary lg:min-h-screen lg:w-1/3 flex relative flex justify-center h-64'>


            <Image className='absolute z-10  m-12 lg:hidden'
              src="/assets/author-photo.png"
              alt="Image"
              width={180}
              height={180}
              priority
            />


            <Image className='text-secondary absolute top-32 right-12 translatey-12  hidden lg:block'
              src={'/assets/ooorganize.svg'}
              alt={'ornament portofolio'}
              width={200}
              height={200}

            />

            <Image className='text-primary md:hidden translate-y-16 translate-x-8'
              src={'/assets/ooorganize.svg'}
              alt={'ornament portofolio'}
              width={150}
              height={150}
              style={{ width: '150' }}
            />

            <div className='h-44 w-44 border-2 translate-y-8 -translate-x-12 border-primary lg:hidden'></div>

          </div>

          <div className='md:block hidden left-1/2  xl:ml-14 lg:ml-4 mt-24 p-10  absolute z-2' >
            <div className='w-[300px] h-[300px] pl-20
            border-primary border-2'>

            </div>
          </div>
          <div className='md:block hidden  left-1/2 xl:ml-14 mt-24 lg:ml-4  p-10  absolute z-2' >
            <div className='w-[160px] h-[250px] pl-20
            border-secondary border-y-2 border-l-2'>

            </div>
          </div>

          <div className='absolute xl:ml-[800px] md:ml-[500px] top-44 z-10 hidden lg:block' >


            <Image className='lg:block hidden'
              src="/assets/author-photo.png"
              alt="Image"
              width={300}
              height={300}
              priority
            />

          </div>



        </div>


      </div>
      < SectionIndicator offsets={4} />

      <div id='2' className='w-full bg-secondary lg:min-h-screen section relative lg:flex mt-12 lg:mt-0'>
        <div className='min-h-screen w-2/3 bg-primary z-10 hidden lg:block'></div>
        <div className='min-h-screen w-1/3 bg-secondary z-10 hidden lg:block'></div>
        <AnimateScroll doAfter={500} className='lg:min-h-screen lg:w-2/3 lg:bg-secondary hidden lg:block bg-primary lg:absolute lg:top-0 lg:left-0 lg:z-20  container mx-auto ' animation='slider-x'>
          <div className=''>

            <div className='lg:mt-24 lg:p-8 space-y-16 '>
              <AnimateScroll doAfter={1200} animation='fade-in-slide-up'>
                <div className='lg:w-2/3 lg:p-4 p-6'>
                  <p className='xl:text-6xl text-3xl lg:text-primary text-secondary leading-loose font-bold'>Front-End.</p>
                  <p className=' lg:text-primary text-secondary leading-loose lg:text-lg text-sm space-y-4 text-justify lg:mt-8 lg:p-2'>
                    I have a great interest in front-end development.
                    I enjoy creating interactiveand innovative web
                    interfaces thatremain user-friendly. I have a
                    penchant  for simple and modern designs.
                    Throughout my development journey,
                    I frequently utilize JavaScript and its supporting
                    tools to enhance my projects.</p>
                </div>
              </AnimateScroll>
              <div className='grid content-center -translate-y-12 -translate-x-4 lg:translate-x-0 lg:translate-y-0'>
                <div className='bg-primary h-10 rounded-r-3xl text-primary cursor-pointer overflow-hidden group  hover:text-secondary lg:w-2/3 flex  flex-row border-2 border-primary justify-between px-6 slide-animation'>
                  <Link href='/About'><div className='p-2 '>Hey, wanna know more about me? Lets go !!!
                  </div></Link>
                  <TfiArrowRight className=' transition-transform delay-800 bouncing-x  m-2 ' size={24} />

                </div>
              </div>

            </div>

            <Image className='absolute bottom-6 left-12 hidden lg:block'
              src={'/assets/ooorganize.svg'}
              alt={'ornament portofolio'}
              width={150}
              height={150}

            />
          </div>
        </AnimateScroll>
        <div className='lg:min-h-screen lg:w-2/3 lg:bg-secondary lg:hidden bg-primary lg:absolute lg:top-0 lg:left-0 lg:z-20  container mx-auto '>
          <div>
            <div className='lg:mt-24 lg:p-8 space-y-16 '>
              <AnimateScroll doAfter={300} animation='fade-in-slide-up'>
                <div className='lg:w-2/3 lg:p-4 p-6'>
                  <p className='xl:text-6xl text-3xl lg:text-primary text-secondary leading-loose font-bold'>Front-End.</p>
                  <p className=' lg:text-primary text-secondary leading-loose lg:text-lg text-sm space-y-4 text-justify lg:mt-8 lg:p-2'>
                    I have a great interest in front-end development.
                    I enjoy creating interactiveand innovative web
                    interfaces thatremain user-friendly. I have a
                    penchant  for simple and modern designs.
                    Throughout my development journey,
                    I frequently utilize JavaScript and its supporting
                    tools to enhance my projects.</p>
                </div>
              </AnimateScroll>
              <div className='grid content-center -translate-y-12 -translate-x-4 lg:translate-x-0 lg:translate-y-0'>
                <div className='bg-primary h-10 rounded-r-3xl text-primary cursor-pointer overflow-hidden group  hover:text-secondary lg:w-2/3 flex  flex-row border-2 border-primary justify-between px-6 slide-animation'>
                  <Link href='/About'><div className='p-2 '>Hey, wanna know more about me? Lets go !!!
                  </div></Link>
                  <TfiArrowRight className=' transition-transform delay-800 bouncing-x  m-2 ' size={24} />

                </div>
              </div>

            </div>

            <Image className='absolute bottom-6 left-12 hidden lg:block'
              src={'/assets/ooorganize.svg'}
              alt={'ornament portofolio'}
              width={150}
              height={150}

            />
          </div>
        </div>


        <AnimateScroll doAfter={1200} className='lg:min-h-screen lg:w-1/2 lg:bg-primary hidden lg:block bg-secondary lg:absolute top-0 right-0 z-20  container mx-auto' animation='slider-x'>
          <div className=''>

            <Image className='text-secondary absolute top-32 right-12 hidden lg:block'
              src={'/assets/ooorganize-white.svg'}
              alt={'ornament portofolio'}
              width={200}
              height={200}

            />
            <div className='lg:absolute bottom-12 lg:ml-12'>

              <div className='lg:w-2/3 text-justify lg:p-2 p-4'>
                <p className='xl:text-6xl text-3xl lg:text-secondary text-primary font-bold'>Back-End.</p>
                <p className='lg:text-secondary text-sm text-primary lg:text-lg  space-y-4 lg:mt-8 mt-4 p-2 leading-loose'>
                  I am also proficient in web-service development using Node.
                  js and its supporting tools to deliver REST API, process data,
                  and handle SQL as well as NoSQL database management.
                  With Node.js, I can efficiently build and deploy RESTful APIs
                  that enable seamless communication between client-side
                  and server-side applications.</p>
              </div>

            </div>

          </div>
        </AnimateScroll>
        <div className='lg:min-h-screen lg:w-1/2 lg:bg-primary lg:hidden bg-secondary lg:absolute top-0 right-0 z-20  container mx-auto'>
          <div>

            <Image className='text-secondary absolute top-32 right-12 hidden lg:block'
              src={'/assets/ooorganize-white.svg'}
              alt={'ornament portofolio'}
              width={200}
              height={200}

            />
            <div className='lg:absolute bottom-12 lg:ml-12'>
              <AnimateScroll doAfter={300} animation='fade-in-slide-up'>
                <div className='lg:w-2/3 text-justify lg:p-2 p-4'>
                  <p className='xl:text-6xl text-3xl lg:text-secondary text-primary font-bold'>Back-End.</p>
                  <p className='lg:text-secondary text-sm text-primary lg:text-lg  space-y-4 lg:mt-8 mt-4 p-2 leading-loose'>
                    I am also proficient in web-service development using Node.
                    js and its supporting tools to deliver REST API, process data,
                    and handle SQL as well as NoSQL database management.
                    With Node.js, I can efficiently build and deploy RESTful APIs
                    that enable seamless communication between client-side
                    and server-side applications.</p>
                </div>
              </AnimateScroll>

            </div>

          </div>
        </div>
      </div>
      <div id='3' className='lg:min-h-screen bg-primary w-full section lg:py-0 py-4'>
        <div className='container mx-auto lg:w-3/4 xl:mt-24 mt-12 w-full flex justify-center lg:block '>
          <div className='md:flex md:flex-row bg-secondary h-[600px] '>
            <div className='p-8 md:mx-8 xl:my-24 mx-6 md:my-12   md:border-r-2 border-r-primary'>
              <AnimateScroll doAfter={300} animation='fade-in-slide-up'>
                <p className='xl:text-6xl font-bold text-4xl' >Lets See <br /> My project.</p>
                <p className='text-lg mt-8 ' >{"Check out some of the projects I've made before."}</p>
              </AnimateScroll>
              <Link href='/Project'>
                <button className='flex  flex-row border-2 group border-primary bg-secondary xl:mt-24 mt-8 slide-animation p-4 md:p-0 m'>
                  <p className='xl:text-xl text-md text-primary md:group-hover:text-white xl:pl-4 xl:pr-8 xl:py-6 md:pt-2 md:p-4 ' > See My Work</p>
                  <div className=' hidden xl:block pr-8 py-6'>
                    <TfiArrowRight className='text-white group-hover:translate-x-[20px] transition-transform delay-300 ease-in-out' size={26} />
                  </div>

                  <div className=' hidden lg:block xl:hidden p-2'>
                    <Icon icon={faArrowRightLong} size="lg" color={Colors.secondary} />
                  </div>

                </button>
              </Link>

            </div>
            <div>
              <div className='hidden md:block md:m-16 absolute mx-12 md:mt-32 md:mx-18'>
                <Image className=''
                  src="/assets/undraw_developer_activity_re_39tg.svg"
                  alt="Web Dev"
                  width={400}
                  height={400}

                />
              </div>
              <div className='md:hidden  mx-12'>
                <Image className=''
                  src="/assets/undraw_developer_activity_re_39tg.svg"
                  alt="Web Dev"
                  width={250}
                  height={250}

                />
              </div>
              <div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='4' className='bg-secondary w-full lg:min-h-screen section'>
        <div className='container mx-auto'>

          <Contactme />
        </div>
      </div>

      <div id='5' className='bg-primary w-full min-h-screen section'>
        <div className='lg:container lg:mx-auto '>

          <Footer />
        </div>
      </div>
    </main >
  )
}
