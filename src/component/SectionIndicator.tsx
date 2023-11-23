"use client";
import React, { useEffect, useState } from 'react';
import { faCircle, } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
import { RiSquareLine, RiCircleFill } from "react-icons/ri";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Icon from '../component/fontAwesome';
import Colors from '../component/Colors';
interface IndicatorProps {
    offsets: number,
    project?: boolean;
}
const SectionIndicator: React.FC<IndicatorProps> = ({ offsets, project = false }) => {
    const [current, setCurrent] = useState(0)
    const [sideBar, setSideBar] = useState<number[]>([]);

    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    //console.log(entry.target.id)
                    setCurrent(parseInt(entry.target.id));
                }
            });
        }, options);

        const targetElements = document.getElementsByClassName('section');
        for (let i = 0; i < targetElements.length; i++) {


            observer.observe(targetElements[i]);
        }

        for (let i = 0; i < offsets; i++) {

            setSideBar((a) => [...a, i]);
        }


        return () => {
            observer.disconnect();
        };
    }, []);





    return (
        <div className={`hidden lg:block fixed right-0 bottom-0 xl:p-32 p-20 ${project == true ? 'space-y-4' : 'space-y-6'} z-50`}>



            {sideBar.map((a, index) => (
                <div key={index} className={`icon-container ${current == index + 1 ? 'active' : ''} ${project == true ? current == offsets + 1 ? 'text-primary' : 'text-secondary' : current == 3 || current == 2 ? 'text-secondary' : 'text-primary'}`}>
                    {

                        current == index + 1 ?
                            <RiSquareLine size={18} />
                            :
                            <RiCircleFill size={18} />
                    }


                </div>
            ))}



        </div>
    )
}

export default SectionIndicator