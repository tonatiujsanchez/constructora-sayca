import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ["latin"] })

export const metadata: Metadata = {
    title: 'Celso Salazar Campos | Constructora Sayca',
    description: 'Empresa Constructora dedicada a la construcción de proyectos de Arquitectura y obra civil, en el ámbito público y privado.',
    keywords: ['Constructora', 'Inmobiliaria'],
    robots: 'index, follow',
    authors: [{ name: 'Celso Salazar Campos', url: 'https://celsosalazar.com' }],
    openGraph: {
        title: 'Celso Salazar Campos | Constructora Sayca',
        description: 'Empresa Constructora dedicada a la construcción de proyectos de Arquitectura y obra civil, en el ámbito público y privado.',
        url: 'https://celsosalazar.com',
        siteName: 'Celso Salazar',
        images: [
            {
                url: 'https://celsosalazar.com/imagenes/celso_salazar_sayca.webp',
                width: 1200,
                height: 630,
                alt: 'Celso Salazar Sayca',
            },
        ],
        locale: 'es_MX',
        type: 'website',
    },
    twitter: {
        title: 'Celso Salazar Campos | Constructora Sayca',
        description: 'Empresa Constructora dedicada a la construcción de proyectos de Arquitectura y obra civil, en el ámbito público y privado.',
        card: 'summary_large_image',
        images: 'https://celsosalazar.com/imagenes/celso_salazar_sayca.webp',
        site: 'https://celsosalazar.com',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}
