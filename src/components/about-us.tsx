import Image from 'next/image'

export const AboutUs = () => {
    return (
        <section id="nosotros" className="py-16 md:py-24">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                    <h1 className="relative uppercase text-3xl sm:text-4xl font-bold after:content-[''] after:h-1 after:w-20 after:bg-yellow-primary after:absolute after:left-0 after:-bottom-5 mb-12"> 
                        CELSO SALAZAR CAMPOS
                    </h1>
                    <p className="">Como persona física, es una <strong>EMPRESA CONSTRUCTORA</strong> dedicada a la construcción de proyectos de Arquitectura y obra civil, en el ámbito público y privado.</p>

                    <div id="mision" className="mt-10">
                        <h3 className="uppercase text-2xl font-bold mb-3">MISIÓN</h3>
                        <p>Ser la <strong>MEJOR EMPRESA</strong> en el ramo de la construcción, por medio de la responsabilidad y eficiencia, cumpliendo a tiempo con todos y cada uno de los trabajos encomendados.
                        Buscando siempre dar más de sí mismos, y con esto lograr la satisfacción y necesidades de los clientes, con altos estándares de calidad, cumplimiento, diseño y conciencia de servicio al cliente que garanticen solidez de la empresa.</p>
                    </div>
                    <div id="vision" className="mt-10">
                        <h3 className="uppercase text-2xl font-bold mb-3">VISIÓN</h3>
                        <p>Ser la <strong>MEJOR EMPRESA</strong> en el ramo de la construcción, por medio de la responsabilidad y eficiencia, cumpliendo a tiempo con todos y cada uno de los trabajos encomendados.
                        Buscando siempre dar más de sí mismos, y con esto lograr la satisfacción y necesidades de los clientes, con altos estándares de calidad, cumplimiento, diseño y conciencia de servicio al cliente que garanticen solidez de la empresa.</p>
                    </div>
                </div>
                <figure className='lg:col-span-5'>
                    <Image
                        src="/assets/images/constructora.webp"
                        alt="Constructora SAYCA"
                        width={500}
                        height={500}
                    />
                </figure>
            </div>
        </section>
    )
}
