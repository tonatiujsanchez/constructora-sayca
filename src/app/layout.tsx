import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Celso Salazar Campos | Constructora SAYCA",
    description: "Empresa constructora dedicada a la construcción de proyectos de Arquitectura y obra civil, en el ámbito público y privado.",
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
