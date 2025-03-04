import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-12 bg-[#051027] py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 grid-cols-1 md:grid-cols-2">
            {/* Logistics Section */}
            <div>
                <h4 className="mb-4 text-lg font-bold text-cyan-500">Logistics</h4>
                <ul className="space-y-2 list-disc list-inside text-white text-sm sm:text-base">
                    <li className="flex items-start gap-2 before:content-['•'] before:text-white before:mr-2">
                        <span>Accommodation will be provided for teams near the hacker house venue in Lagos.</span>
                    </li>
                    <li className="flex items-start gap-2 before:content-['•'] before:text-white before:mr-2">
                        <span>Meals will be provided</span> 
                    </li>
                </ul>
            </div>

            {/* Resources and Support Section */}
            <div>
                <h4 className="mb-4 text-lg font-bold text-cyan-500">Resources and Support</h4>
                <p className="mb-4 text-sm sm:text-base">
                    Semicolon is hosting the training on Sui Move, sponsored by the Sui Foundation. If you have any questions or need any kind of support, click on the link to register:  
                    <a className="underline text-cyan-400" href="https://bit.ly/SC-SUI-Training" target="_blank" rel="noopener noreferrer">
                        https://bit.ly/SC-SUI-Training
                    </a>
                </p>
                <p className="text-sm sm:text-base">
                    Semicolon is a workforce development company that is solving the problem of youth unemployment by training software engineers and hardware developers through an intensive 12-month program. The company has a proven track record with over 300 software engineers in the global market.
                </p>
            </div>
        </div>

        {/* Logo Section */}
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 p-6 sm:p-12">        
            <Image
                src="/assets/semicolon-logo.svg"
                alt="Semicolon Logo"
                width={100}
                height={100}
            />
            <span className="text-xl hidden sm:block">|</span>
            <Image 
                src="/assets/sui-logo.svg"
                alt="Sui Logo"
                width={50}
                height={30}
            />
        </div>
    </footer>

  );
};
    