"use client";
import React, { ReactNode, useEffect, useState, useRef } from 'react';

interface AnimationProps {
    animation: string;
    doAfter?: number;
    children: ReactNode;
    className?: string;

}
const AnimateScroll: React.FC<AnimationProps> = ({ animation, children, doAfter = 0, className = '' }) => {
    const targetElement = useRef(null);
    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (doAfter > 0) {
                    if (!entry.target.classList.contains('opacity-100')) {
                        entry.target.classList.add('opacity-0');
                    }

                }
                if (entry.isIntersecting) {

                    const animationName: string = animation;

                    setTimeout(() => {
                        if (entry.target.classList.contains('opacity-0')) {
                            entry.target.classList.remove('opacity-0')
                            entry.target.classList.add('opacity-100')
                        }

                        entry.target.classList.add(animationName)
                    }, doAfter)

                }
            });
        }, options);

        if (targetElement.current) {
            observer.observe(targetElement.current);
        }





        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={targetElement} className={`animate ${className}`} >
            {children}</div>
    )
}

export default AnimateScroll