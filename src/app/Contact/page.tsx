import React from 'react'
import Contactme from '@/component/Contactme';
import Footer from '@/component/footer';
export default function Contact() {
    return (
        <main className="flex flex-col lg:fullpage-container h-screen">
            <div id='1' className='bg-secondary w-full min-h-screen section'>
                <div className='container mx-auto'>

                    <Contactme />
                </div>
            </div>
            <div id='2' className='bg-primary w-full min-h-screen section'>
                <div className='container mx-auto '>

                    <Footer />
                </div>
            </div>
        </main>
    )
}

