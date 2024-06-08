import { ReactNode } from "react"

interface Props {
    children: ReactNode
    className?: string
}
export const Subtitle = ({ children, className }:Props) => {
    return (
        <h2 className={`relative uppercase text-3xl sm:text-4xl font-bold after:content-[''] after:h-1 after:w-20 after:bg-yellow-primary after:absolute after:left-0 after:-bottom-5 ${className}`}> 
            { children }
        </h2>
    )
}
