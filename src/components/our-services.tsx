import Image from 'next/image'
import { FaConnectdevelop } from 'react-icons/fa6'
import { FaHome, FaRegBuilding } from 'react-icons/fa'
import { Subtitle } from '@/components'

export const OurServices = () => {
    return (
        <section id="servicios" className="pb-24">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
                <figure className="">
                    <Image
                        src="/assets/images/excavadora.webp"
                        alt="Constructora SAYCA"
                        width={700}
                        height={700}
                    />
                </figure>
                <div>
                    <Subtitle className="mb-24">
                        NUESTROS SERVICIOS
                    </Subtitle>
                    <ul>
                        <li className="flex gap-10 mb-6">
                            <div className="min-w-[3.8rem] h-[3.8rem] grid place-content-center bg-dark-primary text-yellow-primary border-[0.32rem] border-yellow-primary">
                                <FaConnectdevelop size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">ESTUDIOS PRELIMINARES</h3>
                                <p>Ofrecemos procesos para el desarrollo de todo proyecto; nuestra experiencia y precisión, nos permite realizar diversos estudios preliminares propios de cada obra.</p>
                            </div>
                        </li>
                        <li className="flex gap-10 mb-6">
                            <div className="min-w-[3.8rem] h-[3.8rem] grid place-content-center bg-dark-primary text-yellow-primary border-[0.32rem] border-yellow-primary">
                                <FaHome size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">CONSTRUCCIÓN DE OBRA CIVIL</h3>
                                <p>Realizamos con eficacia, cuidado en el rendimiento económico y profesionalismo la construcción de vialidades, así como todo tipo de Urbanizaciones.</p>
                            </div>
                        </li>
                        <li className="flex gap-10 mb-6">
                            <div className="min-w-[3.8rem] h-[3.8rem] grid place-content-center bg-dark-primary text-yellow-primary border-[0.32rem] border-yellow-primary">
                                <FaRegBuilding size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">EDIFICACIÓN</h3>
                                <p>Convertimos grandes ideas en grandes construcciones, por ello establecemos y ejecutamos modelos y planes de trabajo estructurado para lograr levantar cualquier edificación.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
