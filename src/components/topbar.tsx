import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";



export const TopBar = () => {
    return (
        <section className="bg-blue-dark-primary text-white">
            <div className="container">
                <ul className="flex items-center gap-5 h-[50px]">
                    <li className="flex gap-2 items-center text-[11px] sm:text-sm">
                        <FaPhoneAlt size={16} className="text-yellow-primary"/>
                        <p className="flex flex-col justify-start items-start sm:items-center sm:flex-row">
                            <span className="text-[12px] sm:text-sm leading-4">(757) 105 63 86</span>
                            <span className="hidden sm:inline px-2">-</span>
                            <span className="text-[12px] sm:text-sm leading-4">Celso Salazar Campos</span>
                        </p>
                    </li>
                    <li className="flex gap-2 items-center text-[10px] sm:text-sm">
                        <HiOutlineMail size={22} className="text-yellow-primary"/>
                        <span className="text-[12px] sm:text-sm">sayca.csc@hotmail.com</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
