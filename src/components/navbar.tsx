'use client'
import { useState } from 'react'
import Image from 'next/image'
import { GrMenu, GrClose } from 'react-icons/gr'

export const Navbar = () => {

    const [openNavbar, setOpenNavbar] = useState(false)

    const handleCloseNavbar = () => {
        setOpenNavbar(false)
    }

    const handleOpenNavbar = () => {
        setOpenNavbar(true)
    }

    

    return (
        <header className="py-1 shadow-md sticky top-0 z-10 bg-white">
            <div className="container flex items-center justify-between gap-5">
                <figure className="w-[10rem] lg:w-[16rem] py-1">      
                    <Image
                        src="/assets/images/logotipo_sayca.webp"
                        alt="Logo Constructora SAYCA"
                        title="Constructora SAYCA"
                        width={395}
                        height={87}    
                    />
                </figure>
                <div
                    onClick={handleCloseNavbar}
                    className={openNavbar ? "fixed inset-0 bg-neutral-950/35 z-10 md:hidden" : "hidden"} 
                ></div>
                <nav 
                    className={`fixed left-0 top-0 bottom-0 p-10 md:p-0 bg-white shadow-lg w-[20rem] md:w-auto md:static md:block-1/2 md:bg-transparent md:shadow-none ${ openNavbar ? 'translate-x-0': 'translate-x-[-100%] md:translate-x-0' } transition-all z-10`}
                >
                    <ul className="flex flex-col md:flex-row gap-8">
                        <li>
                            <a href="#" className="uppercase font-bold text-sm hover:text-yellow-primary transition-colors duration-500">Inicio</a>
                        </li>
                        <li>
                            <a href="#nosotros" className="uppercase font-bold text-sm hover:text-yellow-primary transition-colors duration-500">Acerca de nosotros</a>
                        </li>
                        <li>
                            <a href="#mision" className="uppercase font-bold text-sm hover:text-yellow-primary transition-colors duration-500">Misión</a>
                        </li>
                        <li>
                            <a href="#vision" className="uppercase font-bold text-sm hover:text-yellow-primary transition-colors duration-500">Visión</a>
                        </li>
                        <li>
                            <a href="#servicios" className="uppercase font-bold text-sm hover:text-yellow-primary transition-colors duration-500">Servicios</a>
                        </li>
                    </ul>
                    <button
                        onClick={handleCloseNavbar}
                        className="absolute top-4 right-4 border h-8 w-8 rounded-md grid place-content-center text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 transition-colors active:scale-95 md:hidden"
                    >
                        <GrClose size={18} />
                    </button>
                </nav>
                <button
                    onClick={handleOpenNavbar} 
                    className="border h-10 w-10 rounded-md grid place-content-center text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 transition-colors active:scale-95 md:hidden"
                >
                    <GrMenu size={24} />
                </button>
            </div>
        </header>
    )
}
