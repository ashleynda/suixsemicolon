import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDropright } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";

export default function Apply () {
    return (
        <div className='flex flex-col items-center justify-center my-16'>
        <div className='flex gap-20 max-lg:gap-10 max-md:flex-col mb-6 w-full justify-center items-center relative'>
            <div className='absolute bg-[#EAF2FF] top-11 bottom-11 right-0 left-0 -z-20'></div>
            <div className='p-10 shadow rounded-2xl flex flex-col justify-center items-center bg-[#F7FAFF] mx-5 max-w-[300px]' >
                <IoPersonOutline size={50} color='#38D2D7' />
                <p className='my-4 text-center text-[#020817]'>To apply as an<span className='font-bold'> Individual</span>, click here</p>
                <p className="px-4 py-2 text-sm sm:text-base cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2"><a href="https://docs.google.com/forms/d/1dcsPfOPBPyt2qL7ZDPpt5vZJp96Md3kOmcvbePIdWkM/viewform?edit_requested=true" target='blank' className='text-[#F9F9F9} | link'>Individual</a> <span><MdArrowForward color='#F9F9F9' /></span></p>
            </div>
            <div className='p-10 shadow rounded-2xl flex flex-col justify-center items-center bg-[#F7FAFF] mx-5 w-[300px] md:max-w-[300px] h-[250px]'>
                <FaUsers size={50} color='#38D2D7' />
                <p className='text-sm sm:text-base my-4 text-center text-[#020817]'>To apply as a<span className='font-bold'> Team,</span> click here</p>
                <div className='px-4 py-2 text-sm sm:text-base cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2'><a href="https://docs.google.com/forms/d/1IF7HY2Sa3FL9WSS5zZbLgA6jJ-sp-Hgkw7OCeb-8zrI/viewform?edit_requested=true" target='blank' className='text-[#F9F9F9} | link'>Team</a> <span><MdArrowForward color='#F9F9F9' /></span></div>
            </div>
        </div>
        <p className='mx-5 text-center text-[#020817]'>We will inform applicants if they were selected by <span className='font-semibold'>Monday, March 17, 2025.</span></p>
    </div>
        // <div className="flex flex-wrap justify-center items-center bg-[#EBF3FF]">
        //     <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col justify-center items-center text-center w-full sm:w-64 md:w-72 h-56">
        //         <div className="text-sky-500 text-3xl">
        //             <IoPersonOutline />
        //         </div>
        //         <p className="text-gray-600 text-sm sm:text-base">
        //             To apply as a <strong>Individual</strong>, click here
        //         </p>
        //         <button className="px-4 py-2 text-sm sm:text-base cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2">
        //             Individual <IoIosArrowDropright />
        //         </button>
        //     </div>

        //     <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center text-center w-full sm:w-64 md:w-72 h-56">
        //         <div className="text-sky-500 text-3xl">
        //             <FaPeopleGroup />
        //         </div>
        //         <p className="text-gray-600 text-sm sm:text-base">
        //             To apply as a <strong>Team</strong>, click here
        //         </p>
        //         <button className="px-4 py-2 text-sm sm:text-base cursor-pointer bg-slate-900 text-white rounded-full flex items-center gap-2">
        //             Team <IoIosArrowDropright />
        //         </button>
        //     </div>
        // </div>
        
);
    
}