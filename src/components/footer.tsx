import Image from 'next/image'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoIosPin } from 'react-icons/io'
import { Copyright } from '@/components'

export const Footer = () => {
    return (
        <footer className="footer text-white">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 py-14">
                <figure className="md:col-span-1 p-4">
                    <Image
                        src="/assets/images/logotipo.webp"
                        width={400}
                        height={400}
                        alt="Logo de Constructora Sayca"
                        className="max-w-[260px] mx-auto"
                    />
                </figure>
                <div className="md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-8">
                    <div>
                        <h4 className="font-bold mb-8">CELSO SALAZAR CAMPOS</h4>
                        <p  className="font-light">Como <strong>Persona Fisica</strong> es una empresa dedicada a la industria de la construcción, con alto sentido de responsabilidad y profesionalismo, cumplimos puntualmente los plazos establecidos en cada proyecto.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-8">CONTACTO</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-2 items-center">
                                <MdEmail className="text-yellow-primary"/>
                                <a href="" className="text-[15px] leading-[26px]">sayca.csc@hotmail.com</a>
                            </li>
                            <li className="flex gap-2 items-center">
                                <FaPhoneAlt size={16} className="text-yellow-primary"/>
                                <a href="" className="text-[15px] leading-[26px]">(757) 105 63 86 - Celso Salazar Campos</a>
                            </li>
                            <li className="flex gap-2 items-center">
                                <IoIosPin size={35} className="text-yellow-primary"/>
                                <span className="text-[15px] leading-[26px]">Calle: Granado No. 12, colonia Buena Vista, Tlapa de Comonfort, Guerrero.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    )
}
