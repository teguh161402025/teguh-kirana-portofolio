"use client";
import '../app/globals.css'
import { useState } from 'react'
import { TfiArrowRight } from "react-icons/tfi";
import '@fortawesome/fontawesome-svg-core/styles.css';
import AnimateScroll from './animateScroll';
const Contactme = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [body, setBody] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const submitHandler = (e: any) => {
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            message
        }
        const currentUrl = window.location.href;
        console.log('Current URL:', currentUrl);
        fetch('http://localhost:3000/api/message', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',

                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
                setBody('')
            }
        })
    }
    return (
        <div className='xl:mx-44 bg-white py-12 space-y-8 xl:my-24 lg:my-12 lg:mx-24 my-12 mx-6'>
            <AnimateScroll doAfter={400} animation='fade-in-slide-up'>
                <div className='xl:text-4xl text-2xl text-primary flex justify-center font-bold xl:p-4' >
                    <p>Send Me a Message!</p>
                </div>
            </AnimateScroll>
            <form>
                <div className='md:flex justify-center'>
                    <div className='lg:w-1/2 space-y-8 '>
                        <div className='md:flex md:flex-row lg:justify-between xl:mx-8 mx-4 md:mx-0 space-y-4 md:space-y-0 md:space-x-4'>

                            <div>
                                <span className='after:content-["*"] after:text-red-500 block text-primary  font-medium lg:text-xl '>
                                    Name
                                </span>
                                <input onChange={(e) => { setName(e.target.value) }} name='name' type="text" className=' py-4 text-primary border-b-2 border-slate-400 focus:border-primary  focus:outline-none' placeholder='Enter Your Name' ></input>
                            </div>
                            <div>
                                <span className='after:content-["*"] after:text-red-500 block text-primary  font-medium xl:text-xl '>
                                    Email
                                </span>
                                <input onChange={(e) => { setEmail(e.target.value) }} name='email' type="email" className=' py-4 text-primary border-b-2 border-slate-400 focus:border-primary  focus:outline-none' placeholder='Enter Your Email Address' ></input>
                            </div>
                        </div>

                        <div className='xl:mx-8 md:mx-0 mx-4'>
                            <span className='after:content-["*"] after:ml-0.5 after:text-red-500 block font-medium text-primary xl:text-xl '>
                                Message
                            </span>
                            <textarea onChange={(e) => { setMessage(e.target.value) }} name='message' placeholder='Write Your Message Here!' className='w-full resize-none xl:h-32 h-24 text-primary border-b-2 border-slate-400 focus:border-primary  focus:outline-none'>

                            </textarea>
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' onClick={(e) => { submitHandler(e) }} className='flex flex-row border-2 border-primary  xl:mt-4 w-1/2 slide-animation-white '>

                                <div className="xl:text-xl text-primary group hover:text-white w-full flex items-center justify-center mx-auto xl:pl-4 xl:pr-8 lg:py-4 xl:space-x-24 pr-4 py-2 pl-2">
                                    <p>Send.</p>
                                    <TfiArrowRight className='text-secondary group-hover:translate-x-[20px] transition-transform delay-300 ease-out' size={26} />
                                </div>

                            </button>
                        </div>

                    </div>
                </div>
            </form>
        </div >
    )
}

export default Contactme