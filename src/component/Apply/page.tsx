import { FaPeopleGroup } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

export default function Apply () {
    return (
        <div className="flex flex-wrap justify-center items-center bg-[#EBF3FF]">
            <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col justify-center items-center text-center w-full sm:w-64 md:w-72 h-56">
                <div className="text-sky-500 text-3xl">
                    <IoPersonOutline />
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                    To apply as a <strong>Individual</strong>, click here
                </p>
                <button className="px-4 py-2 text-sm sm:text-base cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2">
                    Individual <IoIosArrowDropright />
                </button>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center w-full sm:w-64 md:w-72 h-56">
                <div className="text-sky-500 text-3xl">
                    <FaPeopleGroup />
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                    To apply as a <strong>Team</strong>, click here
                </p>
                <button className="px-4 py-2 text-sm sm:text-base cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2">
                    Team <IoIosArrowDropright />
                </button>
            </div>
        </div>
        
);
    
}