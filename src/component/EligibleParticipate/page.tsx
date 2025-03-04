import Image from "next/image";

export default function EligibleParticipate() {
 
    
    return(
        <div className="mx-auto max-w-6xl mb-20 max-md:p-5 ">
            <div className="flex flex-col items-center justify-between lg:flex-row rounded-2xl bg-[#0A1739] p-8 lg:pl-10">
                <div className="md:w-1/2 md:pr-6 pb-8 py-6">
                    <p className="mb-6 text-xl font-bold text-cyan-500">Eligibility Criteria</p>
                    <p className="font-semibold text-cyan-500">Team Size: <span className="text-white text-base"> Maximum of 4 (individuals are eligible to<br/>
                    apply but will be paired to make the team)</span></p>
                    <p className="font-semibold text-cyan-500 mt-4">Age: <span className="text-white text-base">18+ years old</span></p>

                    <p className="font-semibold text-cyan-500 mt-4">Participants: <span className="text-white text-base">Open to developers, designers,<br/>
                     entrepreneurs, and blockchain enthusiasts</span> </p>
                </div>
                <div className="mt-8 flex justify-center lg:relative md:w-1/2 lg:-mr-12">
                    <Image
                        src="/assets/eligibility-image.svg"
                        alt="eligible"
                        width={800}
                        height={800}
                        className="object-contain lg:absolute lg:z-10 lg:right-[-500px] lg:bottom-0 lg:left-0 lg:top-[-210px]" 
                    />
                </div>
            </div>
        </div>

        
    )
}