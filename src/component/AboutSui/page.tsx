import Image from "next/image";

export default function AboutSui() {
    return (
        // <div className=" max-w h-full px-4 py-8 bg-white">
        <div className="mx-auto my-16 max-w-6xl px-4 py-8 bg-white">
            <div className="grid gap-8 md:grid-cols-2">
            {/* <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-center"> */}
                <div className="relative flex justify-center md:justify-start">
                    <Image
                        src="/assets/about-sui-image.svg"
                        alt="sui"
                        width={0}
                        height={0}
                        className="mb-24 bg-[#0A1739] object-contain"
                        style={{ width: "400px", height: "400px", borderRadius: "100%" }}

                    />

                </div>
             

                <div className="text-center md:text-left">
                    <p className="mb-6 text-2xl font-bold text-blue-600">About SUI Lagos Hacker House</p>
                    <p className="text-[#020817] text-base tracking-wide leading-7 font-sans mb-4 ">
                        <span className="font-semibold text-blue-600">Sui Lagos Hacker House </span> 
                        is a 6-day event that is designed to bring<br/> together developers, engineers, builders, innovators, and blockchain <br/>
                        enthusiasts who are interested in building on the Sui blockchain.<br/>
                    </p>

                    <p  className="text-[#020817] text-base tracking-wide leading-7 font-sans mb-4">The event will feature workshops, mentorship and coaching sessions,<br/>
                        hacking, and networking opportunities to encourage innovation and <br/>
                        collaboration. Attendees will learn about the Sui blockchain, develop <br/>
                        skills to build robust solutions using Sui and prepare for the <span className="font-semibold text-blue-600"> Sui <br/>
                        Overflow 2023 Hackathon</span>, a global competition with over $500,000 in <br/>
                        combined prizes.
                    </p>

                    <p  className="text-[#020817] text-base tracking-wide leading-7 font-sans mb-4 ">The Sui Lagos Hacker House is implemented by <span className="font-semibold">Semicolon</span> and <br/>
                        sponsored by <span className="font-semibold">Sui Foundation.</span>                    
                    </p>
                </div>
            </div>

        </div>
    )
}