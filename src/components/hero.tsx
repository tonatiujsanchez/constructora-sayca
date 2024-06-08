'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
// modules
import Image from 'next/image'

const slides = [
    {
        id: 1,
        title: 'Constructora de Viviendas',
        description: 'Somos una empresa constructora que se dedica a la construcción de viviendas de alto valor en el país, en el máximo y privado.',
        img: '/assets/images/slider/02.webp',
        sloganImg:'/assets/images/celso_salazar_campos.webp'
    },
    {
        id: 2,
        title: 'Constructora de Viviendas',
        description: 'Somos una empresa constructora que se dedica a la construcción de viviendas de alto valor en el país, en el máximo y privado.',
        img: '/assets/images/slider/01.webp',
        sloganImg:'/assets/images/celso_salazar_campos.webp'
    },
    {
        id: 3,
        title: 'Constructora de Viviendas',
        description: 'Somos una empresa constructora que se dedica a la construcción de viviendas de alto valor en el país, en el máximo y privado.',
        img: '/assets/images/slider/02a.jpg',
        sloganImg:'/assets/images/celso_salazar_campos.webp'
    },
]

export const Hero = () => {
    return (
        <Swiper 
            loop={true}
            className="h-[500px] md:h-[720px] 2xl:h-[800px]"
        >
            {
                slides.map( slide => (
                    <SwiperSlide key={slide.id}>
                        <Image
                            src={ slide.img }
                            alt={ slide.title }
                            width={1920}
                            height={400}
                            className="h-full object-cover"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[95%] md:w-[80%] lg:w-[65%] flex flex-col items-center">
                            <Image
                                src={ slide.sloganImg }
                                alt="Celso Salazar Campos"
                                width={1920}
                                height={400}
                            />
                            <p className="uppercase text-lg sm:text-3xl font-bold px-2 py-1 sm:px-4 sm:py-2 bg-yellow-primary text-white">Arquitectura y obra civil</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
