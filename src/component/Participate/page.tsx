import Image from "next/image";
import { HiBadgeCheck, HiOutlineBadgeCheck } from "react-icons/hi";

export default function Participate () {
    const participate = [
        "Teams must be physically present at the venue in Lagos throughout the duration of the hacker house (March 24-29).",
        "Teams should ensure they can be fully engaged and attentive to their projects throughout the period.",
        "All participants will be required to adhere to the event guidelines and code of conduct.",
        "Intellectual property created by teams during the hacker house will be retained by those teams.",
    ]
    return (
        // <div className="grid gap-8 md:grid-cols-2">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2">
            <div>
                <Image
                    src="/assets/participation-requirement-image.png"
                    alt="participate"
                    width={800}
                    height={800}
                    className="object-cover rounded-xl"
                />
            </div>

            <div>
                <ul>
                    <p className="mb-6 text-center text-2xl font-bold text-blue-600">Participation Requirements</p>
                    {participate.map((item, index) => (
                        <div className="flex gap-2 mb-6">
                            <HiBadgeCheck size={25} color="#06B6D4"/>
                            <li key={index} className="text-[#020817] text-base ">{item}</li>
                        </div>
                    ))}
                </ul>

            </div>
        </div>
        
    )
}