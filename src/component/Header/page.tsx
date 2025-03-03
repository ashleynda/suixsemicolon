import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import { IoCalendarClearOutline, IoLocationOutline } from "react-icons/io5";


export default function Header() {
    return (
        <div className="bg-gradient-to-b from-[#051027] to-[#071a3e] text-white ">
            <div className="flex items-center justify-center gap-4 p-12">
                <img
                    src="/assets/semicolon-logo.svg"
                    alt="semicolon"
                    width={100}
                    height={100}
                />
                <span className="text-xl">|</span>
                <img 
                    src="/assets/sui-logo.svg"
                    alt="sui"
                    width={50}
                    height={30}
                />
            </div>
            <div className="flex justify-center mt-6 object-contain">
                <img
                    src="/assets/HackerHouseNew.svg"
                    alt="hackerHouse"
                    width={500}
                    height={300}/>
            </div>
            <div className="flex justify-evenly rounded-xl bg-white p-6 shadow-lg relative translate-y-12 mx-auto -mt-8 w-full max-w-4xl px-4">
                <div className="grid gap-6 md:gap-12 md:grid-cols-3">
                    <div className="flex items-center gap-3">
                        <IoCalendarClearOutline className="text-blue-600 w-10 h-10" />
                        <p className="text-gray-500 text-sm">March 24-29, <br/>
                            <span className="text-gray-800 font-semibold">2025</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                    <IoLocationOutline className="text-blue-600 w-10 h-10"/>
                        <p className="text-gray-500 text-sm">312 Herbert Macaulay,<br/>
                            <span className="text-gray-800 font-semibold">Sabo, Yaba, Lagos, 
                                <br/>Nigeria</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                    <FaRegClock className="text-blue-600 w-10 h-10"/>
                        <p className="text-gray-500 text-sm">Application Deadline:<br/>
                            <span className="text-gray-800 font-semibold">March 12, 2025</span>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}